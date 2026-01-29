import { useParams, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';
import { Layout, Button, Card } from '../components/common';
import { EMOTIONS } from '../constants/emotions';
import type { EmotionType } from '../types';

export function DiaryWritePage() {
  const { emotion } = useParams<{ emotion: EmotionType }>();
  const navigate = useNavigate();
  const diaryRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);

  const emotionInfo = emotion ? EMOTIONS[emotion] : null;

  const handleDownloadImage = async () => {
    if (!diaryRef.current || !content.trim()) {
      alert('일기 내용을 입력해주세요.');
      return;
    }

    setIsDownloading(true);
    try {
      const canvas = await html2canvas(diaryRef.current, {
        backgroundColor: '#ffffff',
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
      });

      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      const today = new Date().toISOString().split('T')[0];
      link.download = `EmotiDiary_${today}.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('이미지 저장 실패:', error);
      alert(`이미지 저장에 실패했습니다: ${error instanceof Error ? error.message : '알 수 없는 오류'}`);
    } finally {
      setIsDownloading(false);
    }
  };

  if (!emotionInfo) {
    return (
      <Layout title="오류" showBackButton onBack={() => navigate('/')}>
        <p className="text-center text-[var(--color-text-secondary)]">
          잘못된 감정입니다. 다시 선택해주세요.
        </p>
      </Layout>
    );
  }

  return (
    <Layout title="EmotiDiary" showBackButton onBack={() => navigate('/')}>
      <div className="flex flex-col gap-6">
        {/* 질문 카드 및 입력 영역 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card padding="lg">
            {/* 선택된 감정 표시 */}
            <div className="flex flex-col items-center mb-4">
              <div
                className="w-16 h-16 rounded-full relative mb-2"
                style={{ backgroundColor: `${emotionInfo.color}40` }}
              >
                <span
                  className="absolute text-4xl"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    lineHeight: 1,
                  }}
                >
                  {emotionInfo.emoji}
                </span>
              </div>
              <span
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: `${emotionInfo.color}30`,
                  color: emotionInfo.color,
                }}
              >
                {emotionInfo.label}
              </span>
            </div>

            <p className="text-xl font-medium text-[var(--color-text-primary)] text-center mb-4">
              {emotionInfo.question}
            </p>

            {/* 텍스트 입력 영역 */}
            <textarea
              className="w-full p-4 border border-[var(--color-border)] rounded-xl resize-none bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[#6B8AFD] focus:border-transparent transition-colors"
              rows={4}
              placeholder="오늘 있었던 일을 이야기해줘!"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Card>
        </motion.div>

        {/* 이미지로 캡처될 영역 - html2canvas 호환을 위해 hex 색상 사용 */}
        {content && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p
              className="text-sm mb-2"
              style={{ color: '#6b7280' }}
            >
              미리보기
            </p>
            <div
              ref={diaryRef}
              className="p-6 rounded-2xl relative overflow-hidden"
              style={{ backgroundColor: emotion === 'love' ? '#fff0f5' : '#ffffff' }}
            >
              {/* 사랑해요 감정일 때 하트 배경 */}
              {emotion === 'love' && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ opacity: 0.15 }}
                >
                  {[...Array(12)].map((_, i) => (
                    <span
                      key={i}
                      className="absolute"
                      style={{
                        fontSize: `${20 + (i % 3) * 10}px`,
                        top: `${(i * 25) % 100}%`,
                        left: `${(i * 30 + 10) % 100}%`,
                        transform: `rotate(${i * 15 - 20}deg)`,
                      }}
                    >
                      ❤️
                    </span>
                  ))}
                </div>
              )}
              {/* 날짜 */}
              <p
                className="text-center text-sm mb-2"
                style={{ color: '#6b7280' }}
              >
                {new Date().toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  weekday: 'long',
                })}
              </p>

              {/* 선택된 감정 표시 */}
              <div className="flex flex-col items-center">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center mb-2"
                  style={{ backgroundColor: `${emotionInfo.color}40` }}
                >
                  <span className="text-5xl" style={{ lineHeight: 1 }}>
                    {emotionInfo.emoji}
                  </span>
                </div>
                <span
                  className="px-4 py-1 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: `${emotionInfo.color}30`,
                    color: emotionInfo.color,
                  }}
                >
                  {emotionInfo.label}
                </span>
              </div>

              {/* 일기 내용 */}
              <div
                className="mt-3 p-4 rounded-xl"
                style={{ backgroundColor: '#f9fafb' }}
              >
                <p className="whitespace-pre-wrap" style={{ color: '#1f2937' }}>
                  {content}
                </p>
              </div>

              {/* 워터마크 */}
              <p
                className="text-center text-xs mt-3"
                style={{ color: '#9ca3af' }}
              >
                EmotiDiary
              </p>
            </div>
          </motion.div>
        )}

        {/* 저장 버튼 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Button fullWidth size="lg" onClick={handleDownloadImage} disabled={isDownloading}>
            {isDownloading ? '저장 중...' : '이미지로 저장하기'}
          </Button>
        </motion.div>
      </div>
    </Layout>
  );
}
