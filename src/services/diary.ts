import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { EmotionType } from '../types';

export interface DiaryData {
  id?: string;
  childId: string;
  emotion: EmotionType;
  question: string;
  content: string;
  audioUrl?: string | null;
  date: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

const COLLECTION_NAME = 'diaries';

// 일기 생성
export async function createDiary(data: Omit<DiaryData, 'id' | 'createdAt' | 'updatedAt'>) {
  const docRef = await addDoc(collection(db, COLLECTION_NAME), {
    ...data,
    date: Timestamp.fromDate(data.date),
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return docRef.id;
}

// 일기 조회 (단일)
export async function getDiary(diaryId: string): Promise<DiaryData | null> {
  const docSnap = await getDoc(doc(db, COLLECTION_NAME, diaryId));
  if (!docSnap.exists()) return null;

  const data = docSnap.data();
  return {
    id: docSnap.id,
    ...data,
    date: data.date.toDate(),
    createdAt: data.createdAt?.toDate(),
    updatedAt: data.updatedAt?.toDate(),
  } as DiaryData;
}

// 일기 목록 조회 (자녀별)
export async function getDiariesByChild(childId: string): Promise<DiaryData[]> {
  const q = query(
    collection(db, COLLECTION_NAME),
    where('childId', '==', childId),
    orderBy('date', 'desc')
  );

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnap) => {
    const data = docSnap.data();
    return {
      id: docSnap.id,
      ...data,
      date: data.date.toDate(),
      createdAt: data.createdAt?.toDate(),
      updatedAt: data.updatedAt?.toDate(),
    } as DiaryData;
  });
}

// 특정 날짜의 일기 조회
export async function getDiaryByDate(childId: string, date: Date): Promise<DiaryData | null> {
  const startOfDay = new Date(date);
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date(date);
  endOfDay.setHours(23, 59, 59, 999);

  const q = query(
    collection(db, COLLECTION_NAME),
    where('childId', '==', childId),
    where('date', '>=', Timestamp.fromDate(startOfDay)),
    where('date', '<=', Timestamp.fromDate(endOfDay))
  );

  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) return null;

  const docSnap = querySnapshot.docs[0];
  const data = docSnap.data();
  return {
    id: docSnap.id,
    ...data,
    date: data.date.toDate(),
    createdAt: data.createdAt?.toDate(),
    updatedAt: data.updatedAt?.toDate(),
  } as DiaryData;
}

// 일기 수정
export async function updateDiary(diaryId: string, data: Partial<DiaryData>) {
  const updateData: Record<string, unknown> = {
    ...data,
    updatedAt: serverTimestamp(),
  };

  if (data.date) {
    updateData.date = Timestamp.fromDate(data.date);
  }

  await updateDoc(doc(db, COLLECTION_NAME, diaryId), updateData);
}

// 일기 삭제
export async function deleteDiary(diaryId: string) {
  await deleteDoc(doc(db, COLLECTION_NAME, diaryId));
}
