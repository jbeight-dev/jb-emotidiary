# EmotiDiary

아이들을 위한 감정 일기장 웹 애플리케이션

**Live Demo**: https://emotidiary-202601.web.app

## 소개

EmotiDiary는 5-9세 아동이 자신의 감정을 인식하고 표현하는 능력을 기를 수 있도록 돕는 감정 일기장입니다. 직관적인 이모티콘 선택과 음성 인식을 통해 아이들이 쉽게 일기를 작성할 수 있습니다.

### 핵심 기능

- 10가지 감정 이모티콘 선택 (랜덤 배치)
- 감정별 맞춤 질문 제시
- 음성 인식(STT)으로 일기 작성
- 다크모드/라이트모드 지원
- 알록달록한 파스텔 그라데이션 UI

## 기술 스택

| 분류 | 기술 |
|------|------|
| Frontend | React 19, TypeScript, Vite |
| Styling | Tailwind CSS v4, Framer Motion |
| Backend | Firebase (Auth, Firestore, Storage) |
| Hosting | Firebase Hosting |
| 음성 인식 | Web Speech API (예정) |

## 시작하기

### 요구사항

- Node.js 18+
- npm 9+
- Firebase CLI

### 설치

```bash
# 저장소 클론
git clone https://github.com/your-username/emotidiary.git
cd emotidiary

# 의존성 설치
npm install

# 환경변수 설정
cp .env.example .env.local
# .env.local 파일에 Firebase 설정값 입력
```

### 실행

```bash
# 개발 서버
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview

# Firebase 배포
npm run deploy
```

## 프로젝트 구조

```
src/
├── components/
│   ├── common/          # Button, Card, Layout, ThemeToggle
│   └── emotion/         # EmotionButton, EmotionGrid
├── constants/
│   └── emotions.ts      # 10가지 감정 데이터
├── contexts/
│   └── ThemeContext.tsx # 다크모드 상태 관리
├── lib/
│   └── firebase.ts      # Firebase 초기화
├── pages/
│   ├── HomePage.tsx     # 감정 선택 화면
│   └── DiaryWritePage.tsx
├── services/
│   ├── auth.ts          # 인증 서비스
│   ├── diary.ts         # 일기 CRUD
│   └── child.ts         # 자녀 프로필 CRUD
├── types/
│   └── index.ts         # TypeScript 타입
└── App.tsx              # 라우팅
```

## 개발 현황

### Phase 1: 기본 UI ✅
- [x] Vite + React + TypeScript 설정
- [x] Tailwind CSS + Framer Motion
- [x] 감정 선택 UI (10가지, 랜덤 배치)
- [x] 일기 작성 화면
- [x] 다크모드/라이트모드
- [x] Firebase Hosting 배포

### Phase 2: Firebase 연동 (진행 중)
- [x] Firebase SDK 설정
- [x] Auth/Firestore/Storage 서비스 코드
- [x] 보안 규칙 작성
- [ ] 로그인/회원가입 UI
- [ ] 자녀 프로필 관리

### Phase 3: 핵심 기능 (예정)
- [ ] Web Speech API 연동
- [ ] 일기 저장 및 조회
- [ ] 일기 메일 발송

### Phase 4: 캘린더 및 통계 (예정)
- [ ] 캘린더 뷰
- [ ] 감정 통계 차트

### Phase 5: 보상 시스템 (예정)
- [ ] 뱃지 시스템
- [ ] 연속 작성 추적

## 환경 변수

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

## 문서

- [PRD (상세 기획서)](./docs/prd.md)

## 라이선스

MIT License
