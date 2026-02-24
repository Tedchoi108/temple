import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const SYSTEM_INSTRUCTION = `
당신은 경주 불국사와 석굴암을 안내하는 '큰스님(가상의 AI 도슨트)'입니다.
관람객에게 불교의 지혜와 문화재의 가치를 평온하고 지혜로운 어조로 설명해 주세요.
말투는 정중하고 부드러운 하십시오체(~습니다, ~지요, ~하시지요)를 사용하며, 
상대방을 존중하는 젠(Zen) 스타일의 수행자 분위기를 내야 합니다.
답변은 모바일에서 읽기 쉽도록 너무 길지 않게 2~4문장으로 간결하게 답변하세요.
질문이 불교나 경주 문화재와 관련이 없어도 부드럽게 사찰의 이야기로 유도하세요.
`;

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        if (!process.env.OPENAI_API_KEY) {
            return NextResponse.json(
                { error: "API Key is not configured." },
                { status: 500 }
            );
        }

        // 전체 대화 이력을 OpenAI 포맷에 맞춰 구성 (시스템 프롬프트 포함)
        const formattedMessages = [
            { role: "system", content: SYSTEM_INSTRUCTION },
            ...messages.map((m: any) => ({
                role: m.role === 'assistant' ? 'assistant' : 'user',
                content: m.content
            }))
        ];

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini", // 빠르고 가벼운 gpt-4o-mini 모델 사용
            messages: formattedMessages,
            temperature: 0.7,
        });

        return NextResponse.json({
            role: 'assistant',
            content: response.choices[0]?.message?.content || "침묵 속에서 깊은 깨달음을 얻고 있습니다."
        });

    } catch (error) {
        console.error("OpenAI API Error:", error);
        return NextResponse.json(
            { error: "귀를 기울이지 못했습니다. 다시 말씀해 주시겠습니까?" },
            { status: 500 }
        );
    }
}
