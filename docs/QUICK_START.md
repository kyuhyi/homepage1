# ⚡ 5분 빠른 시작 가이드

**구글 시트 ID**: `1YMRIXQpEcMK2gQb5zU6XnDKLrHbbW7vKZ0iOe_V8Ozc`

---

## 1️⃣ 구글 시트 열기

https://docs.google.com/spreadsheets/d/1YMRIXQpEcMK2gQb5zU6XnDKLrHbbW7vKZ0iOe_V8Ozc/edit

---

## 2️⃣ Apps Script 설정

1. **확장 프로그램** → **Apps Script**
2. 기존 코드 전체 삭제
3. `docs/google-apps-script.js` 내용 복사 & 붙여넣기
4. **Ctrl+S** 저장

---

## 3️⃣ 웹 앱 배포

1. **배포** → **새 배포**
2. 톱니바퀴 ⚙️ → **웹 앱** 선택
3. 설정:
   - 실행: **나**
   - 액세스: **모든 사용자**
4. **배포** 클릭
5. 권한 승인 (안전하지 않은 페이지로 이동 → 허용)
6. **웹 앱 URL 복사** 📋

---

## 4️⃣ 환경 변수 설정

`.env.local` 파일에 URL 붙여넣기:

```env
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ID/exec
```

---

## 5️⃣ 서버 재시작

```bash
rm -rf .next && npm run dev
```

---

## ✅ 테스트

1. http://localhost:3000
2. 신청 폼에 테스트 데이터 입력
3. 버튼 클릭
4. 구글 시트에서 "신청자" 탭 확인

---

**🎉 완료!**

상세 가이드: [SETUP_COMPLETE_GUIDE.md](./SETUP_COMPLETE_GUIDE.md)
