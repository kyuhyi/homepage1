"use client";

import { Star, Quote } from "lucide-react";

export default function SocialProof() {
  const testimonials = [
    {
      name: "김지훈",
      role: "1인 창업자",
      rating: 5,
      comment: "코딩을 전혀 몰랐는데 AI 바이브코딩 덕분에 제 사업에 필요한 자동화 프로그램을 직접 만들었어요. 정말 신세계입니다!",
      result: "월 업무시간 30시간 절감",
    },
    {
      name: "박소연",
      role: "온라인 쇼핑몰 운영",
      rating: 5,
      comment: "홈페이지 제작 비용으로 수백만원 쓸 뻔 했는데, 이 특강 듣고 직접 만들었습니다. 강의 내용도 너무 쉽고 실용적이에요.",
      result: "개발 비용 500만원 절감",
    },
    {
      name: "이민수",
      role: "프리랜서 디자이너",
      rating: 5,
      comment: "반복적인 작업들을 자동화하니 클라이언트 작업에만 집중할 수 있게 되었습니다. 수익도 2배 이상 늘었어요!",
      result: "월 수익 200% 증가",
    },
    {
      name: "최유진",
      role: "마케터",
      rating: 5,
      comment: "마케팅 데이터 분석을 자동으로 처리하는 프로그램을 만들었어요. 이제 데이터 정리에 시간 낭비 안 해도 됩니다.",
      result: "데이터 분석 시간 80% 단축",
    },
    {
      name: "정현우",
      role: "카페 사장님",
      rating: 5,
      comment: "비전공자인 제가 재고관리 시스템을 만들다니! 강사님이 정말 쉽게 가르쳐주셔서 따라하기만 하면 됐어요.",
      result: "재고관리 효율 3배 향상",
    },
    {
      name: "강민지",
      role: "콘텐츠 크리에이터",
      rating: 5,
      comment: "AI 활용법을 배워서 콘텐츠 제작 속도가 엄청 빨라졌어요. 이제 하루에 3배 더 많은 콘텐츠를 만들 수 있습니다!",
      result: "콘텐츠 생산성 300% 증가",
    },
  ];

  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            수강생들의 <span className="text-purple-400">생생한 후기</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            이미 500명 이상이 AI 바이브코딩으로 삶을 변화시켰습니다
          </p>
        </div>

        {/* Overall Stats */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-purple-900/30 to-purple-600/30 border border-purple-600/30 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-gray-300 text-sm">누적 수강생</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
                <div className="text-gray-300 text-sm">추천 의향</div>
              </div>
              <div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold text-purple-400">4.9</span>
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                </div>
                <div className="text-gray-300 text-sm">평균 평점</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-gray-300 text-sm">완강률</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-purple-600/50 transition-all hover:shadow-lg hover:shadow-purple-600/10"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-purple-600/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-300 mb-4 leading-relaxed">
                "{testimonial.comment}"
              </p>

              {/* Result Badge */}
              <div className="inline-flex items-center px-3 py-1 bg-purple-600/10 border border-purple-600/20 rounded-full text-purple-400 text-xs font-medium mb-4">
                ✨ {testimonial.result}
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-gray-700">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            당신도 다음 성공 사례의 주인공이 될 수 있습니다
          </p>
          <button
            onClick={() => document.getElementById("signup-form")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-purple-600/50"
          >
            지금 바로 시작하기
          </button>
        </div>
      </div>
    </section>
  );
}
