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
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../lib/firebase';

export interface ChildData {
  id?: string;
  name: string;
  birthDate?: Date | null;
  parentId: string;
  avatarColor: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const COLLECTION_NAME = 'children';

// 자녀 프로필 생성
export async function createChild(data: Omit<ChildData, 'id' | 'createdAt' | 'updatedAt'>) {
  const docRef = await addDoc(collection(db, COLLECTION_NAME), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return docRef.id;
}

// 자녀 프로필 조회 (단일)
export async function getChild(childId: string): Promise<ChildData | null> {
  const docSnap = await getDoc(doc(db, COLLECTION_NAME, childId));
  if (!docSnap.exists()) return null;

  const data = docSnap.data();
  return {
    id: docSnap.id,
    ...data,
    birthDate: data.birthDate?.toDate() || null,
    createdAt: data.createdAt?.toDate(),
    updatedAt: data.updatedAt?.toDate(),
  } as ChildData;
}

// 부모의 자녀 목록 조회
export async function getChildrenByParent(parentId: string): Promise<ChildData[]> {
  const q = query(
    collection(db, COLLECTION_NAME),
    where('parentId', '==', parentId)
  );

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnap) => {
    const data = docSnap.data();
    return {
      id: docSnap.id,
      ...data,
      birthDate: data.birthDate?.toDate() || null,
      createdAt: data.createdAt?.toDate(),
      updatedAt: data.updatedAt?.toDate(),
    } as ChildData;
  });
}

// 자녀 프로필 수정
export async function updateChild(childId: string, data: Partial<ChildData>) {
  await updateDoc(doc(db, COLLECTION_NAME, childId), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

// 자녀 프로필 삭제
export async function deleteChild(childId: string) {
  await deleteDoc(doc(db, COLLECTION_NAME, childId));
}

// 아바타 색상 옵션
export const AVATAR_COLORS = [
  '#FF6B6B', // 빨강
  '#4ECDC4', // 청록
  '#45B7D1', // 하늘
  '#96CEB4', // 민트
  '#FFEAA7', // 노랑
  '#DDA0DD', // 보라
  '#98D8C8', // 연두
  '#F7DC6F', // 금색
];
