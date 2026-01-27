// 감정 타입
export type EmotionType =
  | 'happy'
  | 'sad'
  | 'angry'
  | 'scared'
  | 'tired'
  | 'love'
  | 'annoyed'
  | 'calm'
  | 'excited'
  | 'lonely';

// 감정 정보
export interface EmotionInfo {
  type: EmotionType;
  emoji: string;
  label: string;
  color: string;
  question: string;
}

// 일기 엔트리
export interface DiaryEntry {
  id: string;
  childId: string;
  emotion: EmotionType;
  question: string;
  content: string;
  audioUrl: string | null;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

// 자녀 프로필
export interface Child {
  id: string;
  name: string;
  birthDate: Date | null;
  parentId: string;
  avatarColor: string;
  createdAt: Date;
  updatedAt: Date;
}

// 뱃지 타입
export type BadgeType =
  | 'first_diary'
  | 'streak_3'
  | 'streak_7'
  | 'streak_30'
  | 'emotion_explorer'
  | 'weekly_complete';

// 뱃지 정보
export interface Badge {
  id: string;
  childId: string;
  type: BadgeType;
  earnedAt: Date;
  metadata: Record<string, unknown>;
}

// 감정 통계
export interface EmotionStats {
  id: string;
  childId: string;
  yearMonth: string;
  counts: Record<EmotionType, number>;
  totalEntries: number;
  updatedAt: Date;
}
