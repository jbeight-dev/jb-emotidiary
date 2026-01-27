import type { EmotionInfo, EmotionType } from '../types';

export const EMOTIONS: Record<EmotionType, EmotionInfo> = {
  happy: {
    type: 'happy',
    emoji: '😊',
    label: '행복해요',
    color: '#FFE066',
    question: '오늘 무엇이 행복했나요?',
  },
  sad: {
    type: 'sad',
    emoji: '😢',
    label: '슬퍼요',
    color: '#74B9FF',
    question: '무엇 때문에 슬펐나요?',
  },
  angry: {
    type: 'angry',
    emoji: '😠',
    label: '화나요',
    color: '#FF7675',
    question: '무엇 때문에 화가 났나요?',
  },
  scared: {
    type: 'scared',
    emoji: '😨',
    label: '무서워요',
    color: '#A29BFE',
    question: '무엇이 무서웠나요?',
  },
  tired: {
    type: 'tired',
    emoji: '😴',
    label: '피곤해요',
    color: '#81ECEC',
    question: '오늘 무엇을 했나요?',
  },
  love: {
    type: 'love',
    emoji: '🤗',
    label: '사랑해요',
    color: '#FD79A8',
    question: '누구를 사랑하나요?',
  },
  annoyed: {
    type: 'annoyed',
    emoji: '😤',
    label: '짜증나요',
    color: '#FDCB6E',
    question: '무엇이 짜증났나요?',
  },
  calm: {
    type: 'calm',
    emoji: '😌',
    label: '평온해요',
    color: '#55EFC4',
    question: '오늘 하루는 어땠나요?',
  },
  excited: {
    type: 'excited',
    emoji: '😆',
    label: '신나요',
    color: '#FF9F43',
    question: '무엇이 신났나요?',
  },
  lonely: {
    type: 'lonely',
    emoji: '😔',
    label: '외로워요',
    color: '#636E72',
    question: '누구와 함께하고 싶나요?',
  },
};

export const EMOTION_LIST = Object.values(EMOTIONS);
