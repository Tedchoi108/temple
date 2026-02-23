"use client";

import { useState } from 'react';
import styles from './ChatInterface.module.css';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

export default function ChatInterface() {
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: '안녕하세요! 불국사와 석굴암에 대해 무엇이든 물어보세요.' }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg: Message = { role: 'user', content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setLoading(true);

        // Mock AI Response - In Phase 4 we will integrate real Gemini
        setTimeout(() => {
            let response = "";
            if (input.includes("다보탑")) {
                response = "다보탑은 신라 경덕왕 때 세워진 석탑으로, 복잡한 구조와 화려함이 특징입니다. 국보 20호로 지정되어 있습니다.";
            } else if (input.includes("석굴암")) {
                response = "석굴암은 인공적으로 쌓아 만든 석굴 사찰로, 신라 시대의 고도의 건축 지식과 예술성을 보여줍니다.";
            } else {
                response = "정말 흥미로운 질문이네요! 불국사의 천년 역사는 알면 알수록 신비롭습니다. 어떤 부분을 더 구체적으로 알고 싶으신가요?";
            }

            setMessages(prev => [...prev, { role: 'assistant', content: response }]);
            setLoading(false);
        }, 1000);
    };

    return (
        <div className={styles.chatContainer}>
            <div className={styles.scrollArea}>
                {messages.map((msg, i) => (
                    <div key={i} className={`${styles.message} ${msg.role === 'user' ? styles.user : styles.assistant}`}>
                        <div className={styles.bubble}>{msg.content}</div>
                    </div>
                ))}
                {loading && <div className={styles.loading}>해설가가 생각 중입니다...</div>}
            </div>

            <div className={styles.inputArea}>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="질문을 입력하세요..."
                />
                <button onClick={handleSend}>전송</button>
            </div>
        </div>
    );
}
