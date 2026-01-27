# EmotiDiary PRD (Product Requirements Document)

## 1. 서비스 개요

### 1.1 프로젝트 정보
- **프로젝트명**: EmotiDiary (Emotion + Diary)
- **목적**: 7세 전후 아동(5-9세)을 위한 감정 표현 학습 도구
- **핵심 가치**: 직관적이고 재미있는 인터페이스로 아이들의 감정 인식 및 표현 능력 향상

### 1.2 핵심 플로우
```
감정 선택 → 맞춤 질문 제시 → 음성 일기 작성 → 저장 → 칭찬/보상
```

### 1.3 기술 스택
- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + Framer Motion
- **음성 인식**: Web Speech API
- **Backend**: Firebase (Firestore + Auth + Hosting + Storage)
- **PWA**: 오프라인 지원, 홈 화면 추가, 푸시 알림

---

## 2. 주요 기능 명세

### 2.1 감정 선택 (10가지)
| 감정 | 이모지 | 영문 키 | 질문 예시 |
|------|--------|---------|-----------|
| 행복해요 | 😊 | happy | 오늘 무엇이 행복했나요? |
| 슬퍼요 | 😢 | sad | 무엇 때문에 슬펐나요? |
| 화나요 | 😠 | angry | 무엇 때문에 화가 났나요? |
| 무서워요 | 😨 | scared | 무엇이 무서웠나요? |
| 피곤해요 | 😴 | tired | 오늘 무엇을 했나요? |
| 사랑해요 | 🤗 | love | 누구를 사랑하나요? |
| 짜증나요 | 😤 | annoyed | 무엇이 짜증났나요? |
| 평온해요 | 😌 | calm | 오늘 하루는 어땠나요? |
| 신나요 | 😆 | excited | 무엇이 신났나요? |
| 외로워요 | 😔 | lonely | 누구와 함께하고 싶나요? |

### 2.2 음성 인식(STT) 기능
- Web Speech API 사용 (브라우저 내장, 무료)
- 실시간 음성 → 텍스트 변환
- 녹음 중 시각적 피드백 (파형 애니메이션)
- 재녹음 및 수동 수정 기능

### 2.3 일기 저장 및 관리
- 날짜, 감정, 내용 저장
- 캘린더 뷰로 과거 일기 확인
- 감정 통계 (주간/월간)
- 칭찬 스티커/뱃지 시스템

### 2.4 보상 시스템
- **뱃지 종류**:
  - `first_diary`: 첫 일기 작성
  - `streak_3`: 3일 연속 작성
  - `streak_7`: 7일 연속 작성
  - `streak_30`: 30일 연속 작성
  - `emotion_explorer`: 모든 감정 표현 완료
  - `weekly_complete`: 일주일 매일 작성

---

## 3. 화면 구성

### 3.1 사용자 화면 (아동용)
1. **홈 화면**: 오늘의 감정 선택
2. **질문 화면**: 맞춤 질문 + 음성 녹음 버튼
3. **일기 확인**: 작성한 내용 검토 및 수정
4. **저장 완료**: 칭찬 메시지 + 스티커 획득
5. **캘린더**: 과거 일기 보기
6. **내 뱃지**: 획득한 뱃지 컬렉션

### 3.2 부모용 화면
1. **대시보드**: 자녀 일기 요약
2. **통계**: 감정 트렌드 그래프
3. **자녀 관리**: 프로필 추가/수정
4. **설정**: 알림, 계정 관리

---

## 4. 데이터베이스 스키마 (Firestore)

### 4.1 users 컬렉션
```typescript
interface User {
  id: string;                    // Firebase Auth UID
  email: string;
  displayName: string;
  role: 'parent';                // 부모만 계정 생성 가능
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

### 4.2 children 컬렉션
```typescript
interface Child {
  id: string;                    // Auto-generated
  name: string;                  // 자녀 이름
  birthDate: Timestamp | null;   // 생년월일 (선택)
  parentId: string;              // 부모 userId 참조
  avatarColor: string;           // 프로필 색상 (예: "#FF6B6B")
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

### 4.3 diaries 컬렉션
```typescript
interface Diary {
  id: string;                    // Auto-generated
  childId: string;               // 자녀 ID 참조
  emotion: EmotionType;          // 감정 타입
  question: string;              // 제시된 질문
  content: string;               // 일기 내용 (STT 결과)
  audioUrl: string | null;       // 음성 파일 URL (선택적 저장)
  date: Timestamp;               // 일기 날짜 (시간 제외)
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

type EmotionType =
  | 'happy' | 'sad' | 'angry' | 'scared' | 'tired'
  | 'love' | 'annoyed' | 'calm' | 'excited' | 'lonely';
```

### 4.4 badges 컬렉션
```typescript
interface Badge {
  id: string;                    // Auto-generated
  childId: string;               // 자녀 ID 참조
  type: BadgeType;               // 뱃지 종류
  earnedAt: Timestamp;           // 획득 시간
  metadata: Record<string, any>; // 추가 정보
}

type BadgeType =
  | 'first_diary'
  | 'streak_3' | 'streak_7' | 'streak_30'
  | 'emotion_explorer'
  | 'weekly_complete';
```

### 4.5 emotionStats 컬렉션 (집계용)
```typescript
interface EmotionStats {
  id: string;                    // "{childId}_{yearMonth}" 형식
  childId: string;
  yearMonth: string;             // "2026-01" 형식
  counts: Record<EmotionType, number>;  // { happy: 5, sad: 2, ... }
  totalEntries: number;          // 해당 월 총 일기 수
  updatedAt: Timestamp;
}
```

### 4.6 questions 컬렉션 (정적 데이터)
```typescript
interface Question {
  id: string;
  emotion: EmotionType;
  text: string;                  // 질문 내용
  order: number;                 // 표시 순서
}
```

---

## 5. API 엔드포인트 설계

> Firebase Firestore 직접 접근이 기본이지만, Cloud Functions로 비즈니스 로직 처리

### 5.1 인증 (Firebase Auth 직접 사용)
| 기능 | 메서드 | 설명 |
|------|--------|------|
| 회원가입 | `createUserWithEmailAndPassword()` | 부모 계정 생성 |
| 로그인 | `signInWithEmailAndPassword()` | 이메일 로그인 |
| 로그아웃 | `signOut()` | 로그아웃 |
| 비밀번호 재설정 | `sendPasswordResetEmail()` | 이메일로 재설정 링크 |

### 5.2 자녀 프로필 (Firestore + Cloud Functions)
| Method | Endpoint | 설명 |
|--------|----------|------|
| GET | `/api/children` | 현재 사용자의 자녀 목록 조회 |
| POST | `/api/children` | 자녀 프로필 생성 |
| GET | `/api/children/:childId` | 자녀 정보 조회 |
| PUT | `/api/children/:childId` | 자녀 정보 수정 |
| DELETE | `/api/children/:childId` | 자녀 프로필 삭제 |

### 5.3 일기 (Firestore + Cloud Functions)
| Method | Endpoint | 설명 |
|--------|----------|------|
| GET | `/api/children/:childId/diaries` | 일기 목록 (쿼리: date, emotion, limit) |
| POST | `/api/children/:childId/diaries` | 일기 작성 |
| GET | `/api/children/:childId/diaries/:diaryId` | 일기 상세 |
| PUT | `/api/children/:childId/diaries/:diaryId` | 일기 수정 |
| DELETE | `/api/children/:childId/diaries/:diaryId` | 일기 삭제 |

**일기 작성 요청 예시:**
```json
{
  "emotion": "happy",
  "question": "오늘 무엇이 행복했나요?",
  "content": "친구랑 같이 놀아서 행복했어요!",
  "date": "2026-01-28"
}
```

### 5.4 통계 (Cloud Functions)
| Method | Endpoint | 설명 |
|--------|----------|------|
| GET | `/api/children/:childId/stats/weekly` | 최근 7일 감정 통계 |
| GET | `/api/children/:childId/stats/monthly?month=2026-01` | 월간 감정 통계 |
| GET | `/api/children/:childId/stats/streak` | 연속 작성 일수 |

**주간 통계 응답 예시:**
```json
{
  "period": {
    "start": "2026-01-22",
    "end": "2026-01-28"
  },
  "counts": {
    "happy": 3,
    "sad": 1,
    "excited": 2,
    "calm": 1
  },
  "totalEntries": 7,
  "mostFrequent": "happy"
}
```

### 5.5 뱃지 (Cloud Functions)
| Method | Endpoint | 설명 |
|--------|----------|------|
| GET | `/api/children/:childId/badges` | 획득한 뱃지 목록 |
| POST | `/api/children/:childId/badges/check` | 뱃지 조건 체크 및 자동 부여 |

**뱃지 체크 로직 (Trigger: 일기 작성 시 자동 실행)**
- `first_diary`: 첫 일기 작성 시 즉시 부여
- `streak_N`: 연속 작성일 계산 후 조건 충족 시 부여
- `emotion_explorer`: 10가지 감정 모두 사용 시 부여

### 5.6 질문 조회
| Method | Endpoint | 설명 |
|--------|----------|------|
| GET | `/api/questions/:emotion` | 해당 감정의 질문 목록 (또는 랜덤 1개) |

---

## 6. Firestore 보안 규칙

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // 사용자는 자신의 문서만 읽기/쓰기 가능
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // 부모는 자신의 자녀 문서만 접근 가능
    match /children/{childId} {
      allow read, write: if request.auth != null
        && resource.data.parentId == request.auth.uid;
      allow create: if request.auth != null
        && request.resource.data.parentId == request.auth.uid;
    }

    // 일기는 해당 자녀의 부모만 접근 가능
    match /diaries/{diaryId} {
      allow read, write: if request.auth != null
        && isParentOfChild(resource.data.childId);
    }

    // 뱃지도 동일한 규칙 적용
    match /badges/{badgeId} {
      allow read: if request.auth != null
        && isParentOfChild(resource.data.childId);
      allow write: if false; // Cloud Functions만 쓰기 가능
    }

    // 질문은 인증된 사용자 모두 읽기 가능
    match /questions/{questionId} {
      allow read: if request.auth != null;
      allow write: if false; // 관리자만 수정
    }

    // 헬퍼 함수
    function isParentOfChild(childId) {
      return get(/databases/$(database)/documents/children/$(childId)).data.parentId == request.auth.uid;
    }
  }
}
```

---

## 7. UI/UX 디자인 가이드

### 7.1 색상 팔레트
```css
/* 메인 컬러 */
--primary: #6B8AFD;      /* 부드러운 파란색 */
--secondary: #FFD166;    /* 따뜻한 노란색 */
--accent: #FF6B9D;       /* 핑크 악센트 */

/* 감정별 컬러 */
--happy: #FFE066;        /* 노란색 */
--sad: #74B9FF;          /* 파란색 */
--angry: #FF7675;        /* 빨간색 */
--scared: #A29BFE;       /* 보라색 */
--tired: #81ECEC;        /* 청록색 */
--love: #FD79A8;         /* 분홍색 */
--annoyed: #FDCB6E;      /* 주황색 */
--calm: #55EFC4;         /* 민트색 */
--excited: #FF9F43;      /* 오렌지색 */
--lonely: #636E72;       /* 회색 */

/* 배경 */
--bg-primary: #FAFBFF;   /* 밝은 배경 */
--bg-card: #FFFFFF;      /* 카드 배경 */
```

### 7.2 타이포그래피
- **제목**: 24-32px, Bold
- **본문**: 18-20px, Regular
- **버튼**: 16-18px, Semi-bold
- **최소 터치 영역**: 44x44px (접근성 기준)

### 7.3 컴포넌트 크기
- **감정 버튼**: 최소 80x80px
- **녹음 버튼**: 72x72px (원형)
- **일반 버튼**: 높이 48px 이상

---

## 8. 개발 마일스톤

### Phase 1: 프로젝트 설정 및 기본 UI
- [ ] Vite + React + TypeScript 프로젝트 생성
- [ ] Tailwind CSS + Framer Motion 설정
- [ ] 기본 라우팅 설정 (React Router)
- [ ] 공통 컴포넌트 (Button, Card, Layout)
- [ ] 감정 선택 화면 UI

### Phase 2: Firebase 연동 및 인증
- [ ] Firebase 프로젝트 설정
- [ ] 인증 기능 (회원가입, 로그인)
- [ ] 자녀 프로필 CRUD
- [ ] Firestore 보안 규칙

### Phase 3: 핵심 기능 - 일기 작성
- [ ] Web Speech API 연동
- [ ] 음성 녹음 UI (파형 애니메이션)
- [ ] 일기 작성 플로우
- [ ] 일기 저장 및 조회

### Phase 4: 캘린더 및 통계
- [ ] 캘린더 뷰 구현
- [ ] 감정 통계 집계
- [ ] 통계 시각화 (차트)

### Phase 5: 보상 시스템
- [ ] 뱃지 로직 구현
- [ ] 뱃지 획득 알림
- [ ] 뱃지 컬렉션 화면

### Phase 6: PWA 및 배포
- [ ] Service Worker 설정
- [ ] 오프라인 지원
- [ ] Firebase Hosting 배포
- [ ] 푸시 알림 (선택)

---

## 9. 추가 고려사항

### 9.1 접근성
- 모든 인터랙티브 요소에 적절한 ARIA 라벨
- 키보드 네비게이션 지원
- 고대비 모드 옵션

### 9.2 성능
- 이미지 최적화 (WebP 포맷)
- 코드 스플리팅
- Firestore 쿼리 최적화 (인덱스 설정)

### 9.3 보안
- 민감 정보 서버 사이드 처리
- Rate limiting (Cloud Functions)
- 부모 인증 PIN 코드 (앱 내 자녀/부모 모드 전환)

### 9.4 향후 확장
- 그림 그리기 기능
- 다국어 지원
- 선생님 공유 기능
- AI 감정 분석 리포트
