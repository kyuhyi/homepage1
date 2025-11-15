"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById("signup-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-600/10 border border-purple-600/20 text-purple-400 text-sm font-medium">
            <span className="mr-2">🎓</span>
            무료 비밀 특강
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            단 하루 만에
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              나만의 파이썬 프로그램
            </span>
            <br />
            완성하기
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto">
            코딩 지식 없이도 AI와 함께라면 가능합니다.
            <br />
            1인 지식창업자와 소상공인을 위한 실전 자동화 솔루션
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={scrollToForm}
              className="group px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-2 shadow-lg shadow-purple-600/50 hover:shadow-purple-600/70"
            >
              무료 비밀특강 신청하기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Social proof stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-gray-800">
            <div>
              <div className="text-3xl font-bold text-purple-400">500+</div>
              <div className="text-sm text-gray-400 mt-1">수강생</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">98%</div>
              <div className="text-sm text-gray-400 mt-1">만족도</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">4.9/5</div>
              <div className="text-sm text-gray-400 mt-1">평점</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
