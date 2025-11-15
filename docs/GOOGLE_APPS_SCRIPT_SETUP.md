# 구글 앱스 스크립트 연동 가이드

이 문서는 랜딩페이지의 폼 데이터를 구글 스프레드시트로 자동 저장하는 방법을 안내합니다.

## 1단계: 구글 스프레드시트 만들기

1. [Google Sheets](https://sheets.google.com)에 접속
2. 새 스프레드시트 생성
3. 첫 번째 행에 다음 헤더 입력:
   - A1: `타임스탬프`
   - B1: `이메일`
   - C1: `카카오톡 ID`

## 2단계: 앱스 스크립트 작성

1. 스프레드시트에서 `확장 프로그램` > `Apps Script` 클릭
2. 기본 코드를 삭제하고 아래 코드 붙여넣기:

\`\`\`javascript
function doPost(e) {
  try {
    // 활성 스프레드시트 가져오기
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // POST 데이터 파싱
    const data = e.parameter;

    // 새 행에 데이터 추가
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.email || '',
      data.kakaoId || ''
    ]);

    // 성공 응답
    return ContentService
      .createTextOutput(JSON.stringify({
        result: 'success',
        message: '데이터가 성공적으로 저장되었습니다.'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // 에러 응답
    return ContentService
      .createTextOutput(JSON.stringify({
        result: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// 테스트용 함수
function testDoPost() {
  const testData = {
    parameter: {
      timestamp: new Date().toISOString(),
      email: 'test@example.com',
      kakaoId: 'testuser123'
    }
  };

  const result = doPost(testData);
  Logger.log(result.getContent());
}
\`\`\`

## 3단계: 배포하기

1. 앱스 스크립트 에디터에서 `배포` > `새 배포` 클릭
2. 배포 유형: `웹 앱` 선택
3. 설정:
   - **설명**: "랜딩페이지 폼 데이터 수집"
   - **다음 계정으로 실행**: 나
   - **액세스 권한**: 모든 사용자
4. `배포` 버튼 클릭
5. 권한 승인 (필요시)
6. **웹 앱 URL 복사** (예: `https://script.google.com/macros/s/AKfy...`)

## 4단계: Next.js 프로젝트에 URL 설정

1. 프로젝트 루트의 `.env.local` 파일 열기
2. 복사한 웹 앱 URL 붙여넣기:

\`\`\`env
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
\`\`\`

3. 개발 서버 재시작:

\`\`\`bash
npm run dev
\`\`\`

## 5단계: 테스트

1. 브라우저에서 `http://localhost:3000` 접속
2. 폼에 테스트 데이터 입력
3. "무료 특강 신청하기" 버튼 클릭
4. 구글 스프레드시트에서 데이터 확인

## 문제 해결

### CORS 에러 발생 시
- 앱스 스크립트 배포 설정에서 "액세스 권한"이 "모든 사용자"로 되어있는지 확인
- 새로 배포할 때마다 새로운 URL이 생성됨 (기존 배포 관리 또는 새 배포 선택)

### 데이터가 저장되지 않을 때
1. 앱스 스크립트의 `testDoPost()` 함수 실행해보기
2. 실행 로그에서 에러 확인
3. 스프레드시트 헤더가 정확한지 확인

### 권한 에러
- 앱스 스크립트 편집기에서 `testDoPost()` 실행 후 권한 승인
- "신뢰할 수 없는 앱" 경고 시: `고급` > `안전하지 않은 페이지로 이동` 클릭

## 고급: 이메일 알림 추가 (선택사항)

폼 제출 시 이메일 알림을 받으려면 `doPost` 함수에 추가:

\`\`\`javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = e.parameter;

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.email || '',
      data.kakaoId || ''
    ]);

    // 이메일 알림 추가
    MailApp.sendEmail({
      to: 'your-email@example.com',
      subject: '새로운 특강 신청',
      body: \`
        새로운 신청이 접수되었습니다.

        이메일: \${data.email}
        카카오톡 ID: \${data.kakaoId}
        시간: \${data.timestamp}
      \`
    });

    return ContentService
      .createTextOutput(JSON.stringify({
        result: 'success',
        message: '데이터가 성공적으로 저장되었습니다.'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        result: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
\`\`\`

## 참고 자료

- [Google Apps Script 공식 문서](https://developers.google.com/apps-script)
- [SpreadsheetApp 클래스 레퍼런스](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app)
