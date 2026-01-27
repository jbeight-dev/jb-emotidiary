import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layout } from '../components/common';
import { EmotionGrid } from '../components/emotion';
import type { EmotionInfo } from '../types';

export function HomePage() {
  const navigate = useNavigate();

  const handleEmotionSelect = (emotion: EmotionInfo) => {
    navigate(`/diary/${emotion.type}`);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center">
        {/* 인사 메시지 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
            안녕! 오늘 기분이 어때?
          </h1>
          <p className="text-[var(--color-text-secondary)]">오늘의 감정을 선택해줘</p>
        </motion.div>

        {/* 감정 선택 그리드 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full"
        >
          <EmotionGrid onSelect={handleEmotionSelect} />
        </motion.div>

        {/* 하단 안내 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-sm text-[var(--color-text-secondary)] mt-8"
        >
          감정을 누르면 일기를 쓸 수 있어요
        </motion.p>
      </div>
    </Layout>
  );
}
