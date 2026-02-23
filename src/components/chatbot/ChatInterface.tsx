"use client";

import { useState } from 'react';
import styles from './ChatInterface.module.css';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

export default function ChatInterface() {
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: '합장합니다. 천년의 세월을 품은 이곳에서 무엇이 마음에 닿으셨는지요?' }
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
            if (input.includes("다보탑") || input.includes("탑")) {
                response = "다보탑의 복잡하고 화려한 문양 속에는 신라 장인들의 간절한 염원이 스며있습니다. 국보 20호로, 변치 않는 진리를 상징하지요.";
            } else if (input.includes("석굴암") || input.includes("굴")) {
                response = "석굴암은 인공적으로 둥글게 쌓아 올린 돔 구조에 부처님의 자비로운 미소를 모신 곳입니다. 동해의 아침 해가 가장 먼저 닿는 고요한 성전이지요.";
            } else {
                response = "귀를 기울여 듣고 있습니다. 마음 가는 곳을 조금 더 자세히 일러주시겠습니까?";
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
                {loading && <div className={styles.loading}>생각을 가다듬는 중입니다...</div>}
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
