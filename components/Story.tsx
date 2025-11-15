"use client";

import { CheckCircle2, Users, BookOpen, TrendingUp } from "lucide-react";

export default function Story() {
  const problems = [
    "코딩 지식이 부족해서 자동화가 어렵다",
    "홈페이지 제작 비용이 너무 부담스럽다",
    "마케팅 툴이 너무 많아서 관리가 힘들다",
    "시간과 비용을 줄이고 싶다",
  ];

  const solutions = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "AI 바이브코딩",
      description: "AI가 코딩을 대신해주니 누구나 프로그램을 만들 수 있습니다",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "체계적인 커리큘럼",
      description: "초보자도 따라할 수 있는 단계별 실습 중심 교육",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "실전 프로젝트",
      description: "바로 적용 가능한 실무 자동화 프로그램 제작",
    },
  ];

  const benefits = [
    "단 하루만에 파이썬 프로그램 완성",
    "평생 무료 업데이트 자료 제공",
    "1:1 질의응답 커뮤니티 지원",
    "수료 후 실전 프로젝트 템플릿 제공",
  ];

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            이런 <span className="text-purple-400">고민</span>을 하고 계신가요?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-6 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-purple-600/50 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-500 text-xs">✗</span>
                </div>
                <p className="text-gray-300">{problem}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            <span className="text-purple-400">AI 바이브코딩</span>으로 해결하세요
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            복잡한 코딩 지식 없이도 AI의 도움으로 원하는 프로그램을 만들 수 있습니다
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-xl hover:border-purple-600/50 transition-all hover:shadow-lg hover:shadow-purple-600/10"
              >
                <div className="w-16 h-16 bg-purple-600/10 border border-purple-600/20 rounded-lg flex items-center justify-center text-purple-400 mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-400">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Authority Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-purple-900/20 to-purple-600/20 border border-purple-600/30 rounded-2xl p-8 sm:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600/20 border border-purple-600/40 rounded-full mb-4">
                <span className="text-4xl">👨‍🏫</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">AI 교육 전문가가 직접 가르칩니다</h3>
              <p className="text-purple-300">AI 교육센터장 • 베스트셀러 저자 • 500+ 수강생 배출</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-purple-400 font-bold text-lg mb-1">📚 저서</div>
                <div className="text-gray-300 text-sm">AI 코딩 실전 가이드</div>
              </div>
              <div>
                <div className="text-purple-400 font-bold text-lg mb-1">🏆 경력</div>
                <div className="text-gray-300 text-sm">10년+ IT 교육 경험</div>
              </div>
              <div>
                <div className="text-purple-400 font-bold text-lg mb-1">⭐ 평점</div>
                <div className="text-gray-300 text-sm">4.9/5.0 만족도</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            특강 참여 시 받을 수 있는 <span className="text-purple-400">혜택</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-purple-600/50 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0" />
                <p className="text-gray-300 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
