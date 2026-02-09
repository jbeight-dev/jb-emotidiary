import { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toPng } from 'html-to-image';
import { Layout, Card, Button } from '../components/common';
import { EMOTIONS } from '../constants/emotions';
import type { EmotionType } from '../types';

export function DiaryWritePage() {
  const { emotion } = useParams<{ emotion: string }>();
  const navigate = useNavigate();
  const [diaryContent, setDiaryContent] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [showSaveSuccess, setShowSaveSuccess] = useState(false);
  const [showShareSuccess, setShowShareSuccess] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const emotionInfo = emotion ? EMOTIONS[emotion as EmotionType] : null;

  if (!emotionInfo) {
    return (
      <Layout showBackButton onBack={() => navigate('/')}>
        <div className="text-center py-12">
          <p className="text-[var(--color-text-secondary)]">
            감정을 찾을 수 없어요
          </p>
          <Button className="mt-4" onClick={() => navigate('/')}>
            홈으로 돌아가기
          </Button>
        </div>
      </Layout>
    );
  }

  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

  const handleSaveImage = async () => {
    if (!previewRef.current || !diaryContent.trim()) return;

    setIsSaving(true);
    try {
      const dataUrl = await toPng(previewRef.current, {
        quality: 1.0,
        pixelRatio: 2,
        backgroundColor: '#FFFBF7',
      });

      // 이미지 다운로드
      const link = document.createElement('a');
      link.download = `emotidiary-${emotion}-${today.toISOString().split('T')[0]}.png`;
      link.href = dataUrl;
      link.click();

      setShowSaveSuccess(true);
      setTimeout(() => setShowSaveSuccess(false), 3000);
    } catch (error) {
      console.error('이미지 저장 실패:', error);
      alert('이미지 저장에 실패했어요. 다시 시도해주세요.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleShareToInstagram = async () => {
    if (!previewRef.current || !diaryContent.trim()) return;

    setIsSharing(true);
    try {
      const dataUrl = await toPng(previewRef.current, {
        quality: 1.0,
        pixelRatio: 2,
        backgroundColor: '#FFFBF7',
      });

      // dataUrl을 Blob으로 변환
      const response = await fetch(dataUrl);
      const blob = await response.blob();
      const file = new File([blob], `emotidiary-${emotion}-${today.toISOString().split('T')[0]}.png`, {
        type: 'image/png',
      });

      // Web Share API 지원 여부 확인
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'EmotiDiary',
          text: `오늘의 감정: ${emotionInfo.label} ${emotionInfo.emoji}`,
        });
        setShowShareSuccess(true);
        setTimeout(() => setShowShareSuccess(false), 3000);
      } else {
        // Web Share API 미지원 시 이미지 저장 후 안내
        const link = document.createElement('a');
        link.download = `emotidiary-${emotion}-${today.toISOString().split('T')[0]}.png`;
        link.href = dataUrl;
        link.click();
        alert('이미지가 저장되었어요! Instagram 앱에서 직접 업로드해주세요.');
      }
    } catch (error) {
      // 사용자가 공유를 취소한 경우는 에러로 처리하지 않음
      if (error instanceof Error && error.name !== 'AbortError') {
        console.error('공유 실패:', error);
        alert('공유에 실패했어요. 다시 시도해주세요.');
      }
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <Layout
      title="일기 쓰기"
      showBackButton
      onBack={() => navigate('/')}
    >
      <div className="flex flex-col gap-6">
        {/* 감정 표시 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-3"
            style={{ backgroundColor: `${emotionInfo.color}30` }}
          >
            <span className="text-5xl">{emotionInfo.emoji}</span>
          </div>
          <h2 className="text-xl font-bold text-[var(--color-text-primary)]">
            {emotionInfo.label}
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] mt-1">
            {formattedDate}
          </p>
        </motion.div>

        {/* 질문 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <p className="text-lg font-medium text-[var(--color-text-primary)] mb-1">
              {emotionInfo.question}
            </p>
            <p className="text-sm text-[var(--color-text-secondary)]">
              {emotionInfo.questionEn}
            </p>
          </Card>
        </motion.div>

        {/* 일기 입력 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <textarea
            value={diaryContent}
            onChange={(e) => setDiaryContent(e.target.value)}
            placeholder="오늘의 이야기를 써보세요..."
            className="w-full h-40 p-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] resize-none text-lg"
          />
        </motion.div>

        {/* 미리보기 카드 (1:1 Instagram 피드 비율) */}
        {diaryContent.trim() && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-sm text-[var(--color-text-secondary)] mb-2">
              미리보기 / Preview (1:1)
            </p>
            <div
              ref={previewRef}
              className="aspect-square p-6 rounded-3xl flex flex-col"
              style={{
                backgroundColor: '#FFFBF7',
                border: `3px solid ${emotionInfo.color}`,
              }}
            >
              {/* 헤더 */}
              <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                <div
                  className="flex items-center justify-center w-16 h-16 rounded-full flex-shrink-0"
                  style={{ backgroundColor: `${emotionInfo.color}40` }}
                >
                  <span className="text-4xl">{emotionInfo.emoji}</span>
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-xl">
                    {emotionInfo.label}
                  </p>
                  <p className="text-sm text-gray-500">{formattedDate}</p>
                </div>
              </div>

              {/* 내용 */}
              <div className="flex-1 overflow-hidden mt-4">
                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap line-clamp-8">
                  {diaryContent}
                </p>
              </div>

              {/* 푸터 */}
              <div className="pt-4 border-t border-gray-200 flex justify-center mt-auto">
                <span className="text-sm text-gray-400">EmotiDiary</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* 저장 및 공유 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-3"
        >
          <div className="flex gap-3">
            <Button
              fullWidth
              size="lg"
              onClick={handleSaveImage}
              disabled={!diaryContent.trim() || isSaving}
            >
              {isSaving ? '저장 중...' : '💾 저장'}
            </Button>

            <Button
              fullWidth
              size="lg"
              variant="secondary"
              onClick={handleShareToInstagram}
              disabled={!diaryContent.trim() || isSharing}
            >
              {isSharing ? '준비 중...' : '📸 공유'}
            </Button>
          </div>

          {showSaveSuccess && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-sm text-green-600"
            >
              이미지가 저장되었어요!
            </motion.p>
          )}

          {showShareSuccess && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-sm text-green-600"
            >
              공유가 완료되었어요!
            </motion.p>
          )}
        </motion.div>
      </div>
    </Layout>
  );
}
