"use client";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">AI 바이브코딩</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                1인 지식창업자와 소상공인을 위한
                실전 AI 자동화 교육 플랫폼
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">바로가기</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => document.getElementById("signup-form")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
                  >
                    무료 특강 신청
                  </button>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                    커리큘럼 안내
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                    수강 후기
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">문의</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>이메일: contact@aivibecoding.com</li>
                <li>카카오톡: @aivibecoding</li>
                <li>운영시간: 평일 10:00 - 18:00</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            {/* Bottom */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © 2024 AI 바이브코딩. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
                  개인정보처리방침
                </a>
                <a href="#" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
                  이용약관
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
