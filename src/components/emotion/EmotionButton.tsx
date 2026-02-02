import { motion } from 'framer-motion';
import type { EmotionInfo } from '../../types';

interface EmotionButtonProps {
  emotion: EmotionInfo;
  onClick: (emotion: EmotionInfo) => void;
  isSelected?: boolean;
}

export function EmotionButton({
  emotion,
  onClick,
  isSelected = false,
}: EmotionButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(emotion)}
      className={`
        flex flex-col items-center justify-center
        w-[80px] h-[110px] rounded-2xl
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${isSelected ? 'ring-2 ring-offset-2' : 'hover:shadow-lg'}
      `}
      style={{
        backgroundColor: `${emotion.color}30`,
        borderColor: emotion.color,
        borderWidth: isSelected ? 3 : 0,
        ['--tw-ring-color' as string]: emotion.color,
      }}
      aria-label={`${emotion.label} (${emotion.labelEn})`}
      aria-pressed={isSelected}
    >
      <span className="text-4xl mb-1" role="img" aria-hidden="true">
        {emotion.emoji}
      </span>
      <span className="text-sm font-medium text-[var(--color-text-primary)]">{emotion.label}</span>
      <span className="text-xs text-[var(--color-text-secondary)]">{emotion.labelEn}</span>
    </motion.button>
  );
}
