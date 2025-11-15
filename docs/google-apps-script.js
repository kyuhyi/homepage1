/**
 * AI 바이브코딩 무료 특강 신청 폼 - Google Apps Script
 *
 * 설정 방법:
 * 1. Google Sheets에서 도구 > 스크립트 편집기 열기
 * 2. 이 코드를 복사해서 붙여넣기
 * 3. SPREADSHEET_ID 상수를 본인의 시트 ID로 변경
 * 4. 배포 > 새 배포 > 유형: 웹 앱 선택
 * 5. 다음 사용자로 실행: 나
 * 6. 액세스 권한: 모든 사람
 * 7. 배포 후 URL 복사하여 .env.local에 설정
 */

// ===== 설정 =====
const SPREADSHEET_ID = '1YMRIXQpEcMK2gQb5zU6XnDKLrHbbW7vKZ0iOe_V8Ozc';
const SHEET_NAME = 'db';

/**
 * POST 요청 처리 함수
 */
function doPost(e) {
  try {
    // CORS 헤더 설정
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json'
    };

    // OPTIONS 요청 (preflight) 처리
    if (e.parameter.method === 'OPTIONS') {
      return ContentService.createTextOutput(JSON.stringify({ status: 'ok' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // 요청 데이터 파싱
    const data = JSON.parse(e.postData.contents);

    // 필수 필드 검증
    if (!data.email || !data.kakaoId) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        message: '이메일과 카카오톡 ID는 필수입니다.'
      }))
      .setMimeType(ContentService.MimeType.JSON);
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        message: '올바른 이메일 형식이 아닙니다.'
      }))
      .setMimeType(ContentService.MimeType.JSON);
    }

    // 스프레드시트 가져오기
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    // 시트가 없으면 생성
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);

      // 헤더 행 추가
      const headers = [
        '신청일시',
        '이메일',
        '카카오톡 ID',
        'IP 주소',
        'User Agent',
        '상태'
      ];

      sheet.getRange(1, 1, 1, headers.length)
        .setValues([headers])
        .setFontWeight('bold')
        .setBackground('#6B46C1')
        .setFontColor('#FFFFFF');

      // 열 너비 자동 조정
      sheet.autoResizeColumns(1, headers.length);
    }

    // 중복 확인 (이메일 기준)
    const existingData = sheet.getDataRange().getValues();
    const emailColumnIndex = 1; // 이메일은 2번째 열 (0-based index로 1)

    for (let i = 1; i < existingData.length; i++) {
      if (existingData[i][emailColumnIndex] === data.email) {
        return ContentService.createTextOutput(JSON.stringify({
          success: false,
          message: '이미 신청하신 이메일입니다.'
        }))
        .setMimeType(ContentService.MimeType.JSON);
      }
    }

    // 데이터 추가
    const timestamp = new Date();
    const ipAddress = e.parameter.userip || 'Unknown';
    const userAgent = e.parameter.useragent || 'Unknown';

    const newRow = [
      Utilities.formatDate(timestamp, Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm:ss'),
      data.email,
      data.kakaoId,
      ipAddress,
      userAgent,
      '신규'
    ];

    sheet.appendRow(newRow);

    // 신청 완료 이메일 전송 (선택사항)
    sendConfirmationEmail(data.email, data.kakaoId);

    // 성공 응답
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: '신청이 완료되었습니다!'
    }))
    .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // 에러 로깅
    Logger.log('Error: ' + error.toString());

    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
      error: error.toString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * GET 요청 처리 함수 (테스트용)
 */
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'ok',
    message: 'AI 바이브코딩 무료 특강 신청 API',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  }))
  .setMimeType(ContentService.MimeType.JSON);
}

/**
 * 신청 확인 이메일 전송 (선택사항)
 */
function sendConfirmationEmail(email, kakaoId) {
  try {
    const subject = '[AI 바이브코딩] 무료 특강 신청이 완료되었습니다';
    const body = `
안녕하세요!

AI 바이브코딩 무료 비밀특강 신청이 완료되었습니다.

📧 신청 이메일: ${email}
💬 카카오톡 ID: ${kakaoId}

특강 일정 및 상세 안내는 등록하신 카카오톡으로 발송될 예정입니다.

감사합니다.

---
AI 바이브코딩 팀
    `.trim();

    MailApp.sendEmail({
      to: email,
      subject: subject,
      body: body
    });

    Logger.log('Confirmation email sent to: ' + email);
  } catch (error) {
    Logger.log('Failed to send confirmation email: ' + error.toString());
  }
}

/**
 * 관리자용: 신청자 통계 가져오기
 */
function getApplicationStats() {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);

  if (!sheet) {
    return {
      total: 0,
      today: 0,
      thisWeek: 0
    };
  }

  const data = sheet.getDataRange().getValues();
  const today = new Date();
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  let totalCount = data.length - 1; // 헤더 제외
  let todayCount = 0;
  let weekCount = 0;

  for (let i = 1; i < data.length; i++) {
    const timestamp = new Date(data[i][0]);

    if (timestamp >= todayStart) {
      todayCount++;
    }

    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    if (timestamp >= weekAgo) {
      weekCount++;
    }
  }

  return {
    total: totalCount,
    today: todayCount,
    thisWeek: weekCount
  };
}

/**
 * 관리자용: 시트 초기화 (주의: 모든 데이터 삭제)
 */
function resetSheet() {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);

  if (sheet) {
    const ui = SpreadsheetApp.getUi();
    const response = ui.alert(
      '경고',
      '정말로 모든 신청 데이터를 삭제하시겠습니까?',
      ui.ButtonSet.YES_NO
    );

    if (response === ui.Button.YES) {
      sheet.clear();
      Logger.log('Sheet has been reset');
    }
  }
}
