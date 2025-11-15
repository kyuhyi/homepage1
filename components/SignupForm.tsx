"use client";

import { useState } from "react";
import { Mail, MessageCircle, Loader2, CheckCircle } from "lucide-react";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [kakaoId, setKakaoId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      // Google Apps Script Web App URL (나중에 실제 URL로 교체)
      const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";

      if (!scriptURL) {
        throw new Error("Google Script URL이 설정되지 않았습니다.");
      }

      const formData = new FormData();
      formData.append("email", email);
      formData.append("kakaoId", kakaoId);
      formData.append("timestamp", new Date().toISOString());

      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("신청 중 오류가 발생했습니다.");
      }

      setIsSuccess(true);
      setEmail("");
      setKakaoId("");

      // 3초 후 성공 메시지 초기화
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "신청 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="signup-form" className="bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              지금 바로 <span className="text-purple-400">무료 특강</span>에 참여하세요
            </h2>
            <p className="text-gray-400 text-lg">
              선착순 100명 한정! 놓치지 마세요
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 sm:p-12 shadow-2xl">
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">신청이 완료되었습니다!</h3>
                <p className="text-gray-400">
                  입력하신 이메일로 특강 안내를 보내드렸습니다.
                  <br />
                  스팸함도 확인해주세요.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    이메일 주소 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="example@email.com"
                      className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Kakao ID Input */}
                <div>
                  <label htmlFor="kakaoId" className="block text-sm font-medium text-gray-300 mb-2">
                    카카오톡 ID <span className="text-gray-500">(선택)</span>
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      id="kakaoId"
                      value={kakaoId}
                      onChange={(e) => setKakaoId(e.target.value)}
                      placeholder="카카오톡 ID를 입력해주세요"
                      className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    카카오톡으로도 특강 정보를 받아보실 수 있습니다
                  </p>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-600/50 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-purple-600/50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      신청 중...
                    </>
                  ) : (
                    "무료 특강 신청하기"
                  )}
                </button>

                {/* Privacy Notice */}
                <p className="text-xs text-gray-500 text-center">
                  신청 시 개인정보 수집 및 이용에 동의한 것으로 간주됩니다.
                  <br />
                  수집된 정보는 특강 안내 목적으로만 사용됩니다.
                </p>
              </form>
            )}
          </div>

          {/* Additional CTA */}
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              ⏰ <span className="font-semibold text-purple-400">선착순 100명</span> 마감 시 신청이 조기 종료될 수 있습니다
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
