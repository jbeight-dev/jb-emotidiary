# EmotiDiary PRD (Product Requirements Document)

## 1. 서비스 개요

### 1.1 프로젝트 정보
- **프로젝트명**: EmotiDiary (Emotion + Diary)
- **목적**: 7세 전후 아동(5-9세)을 위한 감정 표현 학습 도구
- **핵심 가치**: 직관적이고 재미있는 인터페이스로 아이들의 감정 인식 및 표현 능력 향상

### 1.2 핵심 플로우
```
감정 선택 → 맞춤 질문 제시 → 일기 작성 → 이미지로 저장
```

### 1.3 기술 스택
- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + Framer Motion
- **이미지 저장**: html2canvas
- **배포**: Firebase Hosting

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
| 사랑해요 | 🥰 | love | 누구를 사랑하나요? |
| 짜증나요 | 😤 | annoyed | 무엇이 짜증났나요? |
| 평온해요 | 😌 | calm | 오늘 하루는 어땠나요? |
| 신나요 | 😆 | excited | 무엇이 신났나요? |
| 외로워요 | 😔 | lonely | 누구와 함께하고 싶나요? |

### 2.2 일기 작성 기능
- 텍스트 입력 방식으로 일기 작성
- 감정별 맞춤 질문 제시 (랜덤 8개 표시)
- 일기 미리보기 카드 UI
- 이미지로 저장 기능 (html-to-image)
  - 이미지 비율: Instagram 피드 표준 규격인 1:1(Square) 비율로 생성

---

## 3. 화면 구성

### 3.1 사용자 화면
1. **홈 화면**: 오늘의 감정 선택 (8개 랜덤 표시)
2. **일기 작성 화면**: 맞춤 질문 + 텍스트 입력 + 미리보기
3. **저장**: 이미지로 다운로드

---

## 4. UI/UX 디자인 가이드

### 4.1 색상 팔레트
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

### 4.2 타이포그래피
- **제목**: 24-32px, Bold
- **본문**: 18-20px, Regular
- **버튼**: 16-18px, Semi-bold
- **최소 터치 영역**: 44x44px (접근성 기준)

### 4.3 컴포넌트 크기
- **감정 버튼**: 최소 80x80px
- **일반 버튼**: 높이 48px 이상

---

## 5. 개발 마일스톤

### Phase 1: 프로젝트 설정 및 기본 UI ✅ 완료
- [x] Vite + React + TypeScript 프로젝트 생성
- [x] Tailwind CSS + Framer Motion 설정
- [x] 기본 라우팅 설정 (React Router)
- [x] 공통 컴포넌트 (Button, Card, Layout)
- [x] 감정 선택 화면 UI
- [x] 다크모드/라이트모드 테마 전환 (ThemeContext)
- [x] 한/영 병기 UI 지원

### Phase 2: 핵심 기능 - 일기 작성 ✅ 완료
- [x] 일기 작성 플로우 구현 (`DiaryWritePage.tsx`)
- [x] 감정별 맞춤 질문 시스템 (10가지 감정, 랜덤 8개 표시)
- [x] 일기 미리보기 카드 UI
- [x] 이미지로 저장 기능 (html-to-image)

### Phase 3: 배포 ✅ 완료
- [x] Firebase Hosting 배포
- [x] GitHub Actions CI/CD 설정

---

## 6. 향후 확장 가능성 (선택)
- 그림 그리기 기능
- 다국어 지원
- PWA 오프라인 지원
