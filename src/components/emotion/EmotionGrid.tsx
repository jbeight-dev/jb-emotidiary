import { useMemo } from 'react';
import { EMOTION_LIST } from '../../constants/emotions';
import type { EmotionInfo, EmotionType } from '../../types';
import { EmotionButton } from './EmotionButton';

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

interface EmotionGridProps {
  onSelect: (emotion: EmotionInfo) => void;
  selectedEmotion?: EmotionType;
}

export function EmotionGrid({ onSelect, selectedEmotion }: EmotionGridProps) {
  const shuffledEmotions = useMemo(() => shuffleArray(EMOTION_LIST), []);

  return (
    <div className="grid grid-cols-5 gap-3 justify-items-center">
      {shuffledEmotions.map((emotion) => (
        <EmotionButton
          key={emotion.type}
          emotion={emotion}
          onClick={onSelect}
          isSelected={selectedEmotion === emotion.type}
        />
      ))}
    </div>
  );
}
