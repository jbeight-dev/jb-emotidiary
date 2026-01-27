import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layout, Button, Card } from '../components/common';
import { EMOTIONS } from '../constants/emotions';
import type { EmotionType } from '../types';

export function DiaryWritePage() {
  const { emotion } = useParams<{ emotion: EmotionType }>();
  const navigate = useNavigate();

  const emotionInfo = emotion ? EMOTIONS[emotion] : null;

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
    <Layout title="일기 쓰기" showBackButton onBack={() => navigate('/')}>
      <div className="flex flex-col gap-6">
        {/* 선택된 감정 표시 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center"
        >
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center mb-3"
            style={{ backgroundColor: `${emotionInfo.color}40` }}
          >
            <span className="text-5xl">{emotionInfo.emoji}</span>
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
        </motion.div>

        {/* 질문 카드 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card padding="lg">
            <p className="text-xl font-medium text-[var(--color-text-primary)] text-center mb-6">
              {emotionInfo.question}
            </p>

            {/* 음성 녹음 버튼 (Phase 3에서 구현) */}
            <div className="flex flex-col items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
                aria-label="녹음 시작"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                  />
                </svg>
              </motion.button>
              <p className="text-sm text-[var(--color-text-secondary)]">버튼을 눌러 말해보세요</p>
            </div>

            {/* 텍스트 입력 영역 (임시) */}
            <div className="mt-6">
              <textarea
                className="w-full p-4 border border-[var(--color-border)] rounded-xl resize-none bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[#6B8AFD] focus:border-transparent transition-colors"
                rows={4}
                placeholder="여기에 직접 써도 돼요..."
              />
            </div>
          </Card>
        </motion.div>

        {/* 저장 버튼 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-3"
        >
          <Button fullWidth size="lg">
            일기 저장하기
          </Button>
          <Button fullWidth size="lg" variant="secondary">
            일기 메일로 보내기
          </Button>
        </motion.div>
      </div>
    </Layout>
  );
}
