import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const systemPrompt = `당신은 "AI 바이브코딩 무료 비밀특강"의 친절한 AI 도우미입니다.

강의 정보:
- 강의명: AI 바이브코딩 무료 비밀특강
- 대상: 1인 지식창업자, 소상공인
- 목표: 단 하루 만에 나만의 파이썬 프로그램 완성
- 특징: AI와 함께라면 코딩 지식 없이도 가능합니다
- 수강료: 완전 무료

핵심 메시지:
✅ 비전공자도 쉽게 배울 수 있습니다
✅ AI의 도움으로 빠르게 실습합니다
✅ 실전에 바로 적용 가능한 프로젝트를 완성합니다
✅ 업무 자동화, 데이터 분석 등 실용적인 프로그램 제작

답변 스타일:
- 친절하고 격려하는 톤으로 답변해주세요
- 이모지를 적절히 사용하여 친근하게 대화하세요
- 답변은 간결하고 명확하게 2-3문장으로 작성하세요
- 강의 신청을 자연스럽게 유도하세요
- 모르는 내용은 솔직하게 인정하고 공식 문의를 안내하세요

자주 묻는 질문:
- 비전공자도 가능한가요? → 네! 코딩 경험이 전혀 없어도 괜찮습니다. AI가 함께 도와드립니다.
- 준비물은? → 노트북만 있으면 됩니다. 모든 소프트웨어는 무료로 제공됩니다.
- 강의 시간은? → 하루 집중 과정으로 진행됩니다.
- 수강료는? → 완전 무료입니다!
`;

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: '메시지를 입력해주세요.' },
        { status: 400 }
      );
    }

    // Gemini 2.5 Flash 모델 사용
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash-exp',
      systemInstruction: systemPrompt
    });

    // 대화 히스토리 구성
    const chatHistory = (history || [])
      .filter((msg: any) => msg.role && msg.content)
      .map((msg: any) => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      }));

    const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 500,
      }
    });

    const result = await chat.sendMessage(message);
    const response = result.response;
    const text = response.text();

    return NextResponse.json({ response: text });
  } catch (error: any) {
    console.error('Gemini API Error:', error);

    return NextResponse.json(
      {
        error: '죄송합니다. AI 응답 생성 중 오류가 발생했습니다.',
        details: error.message
      },
      { status: 500 }
    );
  }
}
