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

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: [...messages, userMsg] })
            });

            if (!res.ok) {
                throw new Error("API 연동 에러");
            }

            const data = await res.json();
            setMessages(prev => [...prev, data]);
        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: "(시스템) 스님께서 아직 답을 주실 준비가 되지 않으셨습니다. 관리자에게 API 키 등록을 요청해 주세요."
            }]);
        } finally {
            setLoading(false);
        }
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
