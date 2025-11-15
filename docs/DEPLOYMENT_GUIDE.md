# Vercel 배포 가이드

이 문서는 AI 바이브코딩 랜딩페이지를 Vercel에 배포하는 방법을 단계별로 안내합니다.

## 사전 준비사항

- [x] GitHub 계정
- [x] Vercel 계정 (없으면 GitHub로 무료 가입)
- [x] 구글 앱스 스크립트 웹 앱 URL (선택사항)
- [x] Google Analytics ID (선택사항)

## 1단계: GitHub에 코드 푸시

### 1.1 Git 초기화 (이미 되어있다면 건너뛰기)

```bash
git init
git add .
git commit -m "Initial commit: AI Vibecoding landing page"
```

### 1.2 GitHub 저장소 생성

1. [GitHub](https://github.com)에서 새 저장소 생성
2. 저장소 이름: `ai-vibecoding-landing` (또는 원하는 이름)
3. Public 또는 Private 선택
4. README, .gitignore, 라이선스는 **추가하지 않음** (이미 있으므로)

### 1.3 원격 저장소 연결 및 푸시

```bash
git remote add origin https://github.com/YOUR_USERNAME/ai-vibecoding-landing.git
git branch -M main
git push -u origin main
```

## 2단계: Vercel에 프로젝트 배포

### 2.1 Vercel에 로그인

1. [Vercel](https://vercel.com)에 접속
2. "Continue with GitHub" 클릭하여 GitHub 계정으로 로그인

### 2.2 새 프로젝트 생성

1. 대시보드에서 "Add New..." → "Project" 클릭
2. GitHub 저장소 목록에서 `ai-vibecoding-landing` 찾기
3. "Import" 버튼 클릭

### 2.3 프로젝트 설정

**Configure Project** 화면에서:

- **Framework Preset**: Next.js (자동 감지됨)
- **Root Directory**: `./` (기본값)
- **Build Command**: `npm run build` (기본값)
- **Output Directory**: `.next` (기본값)

### 2.4 환경 변수 설정

"Environment Variables" 섹션에서 다음 변수들을 추가:

#### Google Apps Script URL (필수)

```
Name: NEXT_PUBLIC_GOOGLE_SCRIPT_URL
Value: https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

#### Google Analytics ID (선택사항)

```
Name: NEXT_PUBLIC_GA_ID
Value: G-XXXXXXXXXX
```

**주의**: 각 환경 변수를 추가한 후 "Add" 버튼을 클릭하세요.

### 2.5 배포 시작

1. 모든 설정 완료 후 "Deploy" 버튼 클릭
2. 배포 진행 상황 확인 (약 1-2분 소요)
3. 배포 완료 후 축하 메시지와 함께 프리뷰 URL 표시

## 3단계: 배포 확인

### 3.1 사이트 확인

1. Vercel이 제공한 URL 클릭 (예: `https://ai-vibecoding-landing.vercel.app`)
2. 모든 섹션이 정상적으로 표시되는지 확인
3. 폼 제출 테스트 (구글 시트에 데이터가 저장되는지 확인)

### 3.2 모바일 반응형 확인

- 크롬 개발자 도구(F12) → 모바일 뷰로 전환
- 다양한 화면 크기에서 레이아웃 확인

## 4단계: 커스텀 도메인 연결 (선택사항)

### 4.1 도메인 추가

1. Vercel 프로젝트 대시보드 → "Settings" → "Domains"
2. 소유한 도메인 입력 (예: `aivibecoding.com`)
3. "Add" 클릭

### 4.2 DNS 설정

Vercel이 제공하는 네임서버 또는 CNAME 레코드를 도메인 등록업체에 추가:

**Option A: CNAME 레코드** (추천)
```
Type: CNAME
Name: www (또는 @)
Value: cname.vercel-dns.com
```

**Option B: A 레코드**
```
Type: A
Name: @
Value: 76.76.21.21
```

### 4.3 SSL 인증서

- Vercel이 자동으로 Let's Encrypt SSL 인증서를 발급합니다
- 보통 몇 분 내에 HTTPS가 활성화됩니다

## 5단계: 자동 배포 설정

Vercel은 기본적으로 자동 배포가 활성화되어 있습니다:

### 프로덕션 배포
- `main` 브랜치에 푸시할 때마다 자동 배포
- 배포 URL: 커스텀 도메인 또는 `*.vercel.app`

### 프리뷰 배포
- 다른 브랜치에 푸시하거나 Pull Request 생성 시
- 각 PR마다 고유한 프리뷰 URL 생성

### 배포 워크플로우

```bash
# 로컬에서 변경사항 작업
git add .
git commit -m "Update landing page content"
git push origin main

# Vercel이 자동으로 감지하고 배포 시작
# 배포 완료 시 이메일 알림 (설정한 경우)
```

## 6단계: 성능 모니터링

### 6.1 Vercel Analytics

1. 프로젝트 대시보드 → "Analytics" 탭
2. Web Vitals, 방문자 수, 지역별 성능 등 확인

### 6.2 Google Analytics

1. [Google Analytics](https://analytics.google.com)에서 데이터 확인
2. 실시간 사용자, 페이지뷰, 전환율 등 모니터링

## 문제 해결

### 배포 실패 시

**빌드 에러**
```bash
# 로컬에서 빌드 테스트
npm run build

# 에러 로그 확인 후 수정
# 수정 후 다시 푸시
```

**환경 변수 문제**
- Vercel 대시보드 → Settings → Environment Variables
- 변수 이름과 값이 정확한지 확인
- 변경 후 "Redeploy" 필요

**404 에러**
- `vercel.json` 파일 확인
- Next.js App Router 사용 시 자동 라우팅 적용됨

### CORS 에러

구글 앱스 스크립트에서 CORS 에러가 발생하면:

1. Apps Script 배포 설정에서 "액세스 권한" → "모든 사용자" 확인
2. 새로운 배포 버전 생성
3. 새 웹 앱 URL을 Vercel 환경 변수에 업데이트

## 고급 설정

### 빌드 최적화

`next.config.ts`에 다음 옵션 추가:

```typescript
const config = {
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
}
```

### 리다이렉트 설정

특정 경로를 리다이렉트하려면:

```typescript
// next.config.ts
{
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/',
        permanent: true,
      },
    ]
  }
}
```

### 보안 헤더

```typescript
// next.config.ts
{
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
    ]
  }
}
```

## 참고 자료

- [Vercel 공식 문서](https://vercel.com/docs)
- [Next.js 배포 가이드](https://nextjs.org/docs/deployment)
- [Vercel CLI 사용법](https://vercel.com/docs/cli)

## 지원

배포 과정에서 문제가 발생하면:

1. [Vercel 커뮤니티](https://github.com/vercel/vercel/discussions)
2. [Next.js Discord](https://discord.gg/nextjs)
3. 프로젝트 이슈 트래커
