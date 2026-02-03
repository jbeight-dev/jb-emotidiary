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
          <h1 className="text-2xl font-bold text-[var(--color-text-primary)] mb-1">
            안녕! 오늘 기분이 어때?
          </h1>
          <p className="text-sm text-[var(--color-text-secondary)] mb-2">
            Hi! How are you feeling today?
          </p>
          <p className="text-[var(--color-text-secondary)]">오늘 남기고 싶은 감정을 선택해줘</p>
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-[var(--color-text-secondary)]">
            감정을 누르면 일기를 쓸 수 있어요
          </p>
          <p className="text-xs text-[var(--color-text-secondary)] mt-1">
            Tap an emotion to write your diary
          </p>
        </motion.div>

        {/* 서비스 소개 섹션 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="w-full mt-12 space-y-8"
        >
          {/* EmotiDiary란? */}
          <div className="bg-[var(--color-card-bg)] rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-3">
              📔 EmotiDiary란?
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              EmotiDiary는 어린이를 위한 감정 일기 서비스입니다.
              매일의 감정을 이모지와 함께 기록하고, 예쁜 카드로 저장할 수 있어요.
              감정을 표현하는 습관을 기르면서 자신의 마음을 더 잘 이해할 수 있습니다.
            </p>
          </div>

          {/* 감정 일기의 이점 */}
          <div className="bg-[var(--color-card-bg)] rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-4">
              ✨ 감정 일기의 좋은 점
            </h2>
            <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
              <li className="flex items-start gap-2">
                <span className="text-base">🧠</span>
                <span><strong>감정 인식 능력 향상</strong> - 자신의 감정을 알아차리고 이름 붙이는 연습을 할 수 있어요</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-base">💬</span>
                <span><strong>표현력 발달</strong> - 느낌을 글과 그림으로 표현하면서 소통 능력이 자라요</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-base">😌</span>
                <span><strong>스트레스 해소</strong> - 속상하거나 화난 감정도 일기로 풀어내면 마음이 편해져요</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-base">📈</span>
                <span><strong>자기 이해 증진</strong> - 시간이 지나며 나의 감정 패턴을 알게 되어요</span>
              </li>
            </ul>
          </div>

          {/* 사용 방법 */}
          <div className="bg-[var(--color-card-bg)] rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-4">
              📝 사용 방법
            </h2>
            <ol className="space-y-3 text-sm text-[var(--color-text-secondary)]">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <span>오늘 느낀 감정과 가장 가까운 이모지를 선택해요</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <span>가이드 질문을 참고해서 오늘의 이야기를 적어요</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <span>완성된 감정 카드를 이미지로 저장하고 공유해요</span>
              </li>
            </ol>
          </div>

          {/* 부모님께 */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-3">
              👨‍👩‍👧 부모님께
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              EmotiDiary는 아이들의 감정 교육을 돕기 위해 만들어졌습니다.
              어린이가 자신의 감정을 인식하고 건강하게 표현하는 습관을 기르도록 도와주세요.
              아이가 작성한 일기를 함께 읽으며 대화를 나누면 더욱 좋습니다.
            </p>
          </div>
        </motion.section>
      </div>
    </Layout>
  );
}
