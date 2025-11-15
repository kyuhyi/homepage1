# AI 바이브코딩 무료 비밀특강 랜딩페이지

1인 지식창업자와 소상공인을 위한 AI 바이브코딩 무료 특강 랜딩페이지입니다.

## 🚀 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v3
- **Language**: TypeScript
- **Icons**: Lucide React
- **Database**: Google Sheets (via Apps Script)
- **Analytics**: Google Analytics 4
- **Deployment**: Vercel

## 📋 주요 기능

- ✨ 다크모드 메인 디자인
- 📱 완벽한 반응형 레이아웃
- 🎯 원스크롤 랜딩페이지 구조
- 📧 이메일 + 카카오톡 ID 수집
- 📊 구글 스프레드시트 자동 저장
- 🔍 SEO 최적화 (메타태그, sitemap, robots.txt)
- 📈 Google Analytics 4 통합

## 🛠️ 로컬 개발 환경 설정

### 1. 패키지 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env.local` 파일을 수정하여 다음 값을 설정하세요:

```env
# Google Apps Script Web App URL
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec

# Google Analytics ID (선택사항)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 📝 구글 앱스 스크립트 연동

폼 데이터를 구글 스프레드시트에 자동으로 저장하려면:

1. [구글 앱스 스크립트 연동 가이드](./docs/GOOGLE_APPS_SCRIPT_SETUP.md) 문서를 참고하세요
2. 가이드에 따라 Google Sheets와 Apps Script를 설정하세요
3. 생성된 웹 앱 URL을 `.env.local`에 추가하세요

## 🎨 프로젝트 구조

```
ai-vibecoding-landing/
├── app/
│   ├── layout.tsx          # 루트 레이아웃 (SEO, Analytics)
│   ├── page.tsx            # 메인 페이지
│   ├── globals.css         # 전역 스타일
│   ├── robots.ts           # SEO robots.txt
│   └── sitemap.ts          # SEO sitemap
├── components/
│   ├── Hero.tsx            # 히어로 섹션
│   ├── Story.tsx           # 스토리 섹션
│   ├── SocialProof.tsx     # 수강생 후기
│   ├── SignupForm.tsx      # 신청 폼
│   └── Footer.tsx          # 푸터
├── lib/
│   └── analytics.ts        # Google Analytics 유틸
├── docs/
│   └── GOOGLE_APPS_SCRIPT_SETUP.md
└── public/                 # 정적 파일
```

## 📦 빌드 및 배포

### 프로덕션 빌드

```bash
npm run build
npm start
```

### Vercel 배포

1. [Vercel](https://vercel.com)에 로그인
2. 새 프로젝트 생성 후 GitHub 저장소 연결
3. 환경 변수 설정:
   - `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`
   - `NEXT_PUBLIC_GA_ID`
4. 배포 버튼 클릭

자동 배포가 설정되며, `main` 브랜치에 푸시할 때마다 자동으로 배포됩니다.

## 🎯 섹션 설명

### Hero 섹션
- 강렬한 헤드라인과 CTA 버튼
- 배경 그라데이션 애니메이션
- 주요 통계 수치 표시

### Story 섹션
- 문제 제기 → 해결책 제시
- 강사 권위 세우기
- 특강 혜택 강조

### Social Proof 섹션
- 실제 수강생 후기
- 평점 및 성과 표시
- 신뢰도 향상

### Signup Form 섹션
- 이메일 + 카카오톡 ID 수집
- 구글 시트 자동 저장
- 성공/에러 상태 처리

## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary**: Purple (#6B46C1) - 주요 CTA 및 강조
- **Background**: Black (#000) - 다크모드 배경
- **Text**: White (#FFF) - 주요 텍스트
- **Muted**: Gray - 보조 텍스트

### 폰트
- **Primary**: Inter (Google Fonts)
- **Fallback**: Pretendard, sans-serif

## 📈 성능 최적화

- Next.js Image 컴포넌트 사용
- Tailwind CSS로 최소화된 CSS
- Google Fonts 최적화
- 코드 스플리팅 자동 적용

## 🔧 커스터마이징

### 텍스트 수정
- 각 컴포넌트 파일에서 텍스트 수정 가능
- SEO 메타데이터는 `app/layout.tsx`에서 수정

### 디자인 수정
- `tailwind.config.ts`에서 컬러 팔레트 변경
- `app/globals.css`에서 CSS 변수 수정

### 폼 필드 추가
- `components/SignupForm.tsx` 수정
- Google Apps Script도 함께 업데이트 필요

## 📞 문의

프로젝트 관련 문의사항이 있으시면 이슈를 등록해주세요.

## 📄 라이선스

MIT License
