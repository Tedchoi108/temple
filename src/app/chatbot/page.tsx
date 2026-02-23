import ChatInterface from "@/components/chatbot/ChatInterface";
import styles from "./chatbot.module.css";

export default function ChatbotPage() {
    return (
        <main className={`${styles.container} ripple-fade`}>
            <header className={styles.header}>
                <h1 className="serif">큰스님의 지혜</h1>
                <p>마음의 소리에 귀 기울이듯 물어보시지요.</p>
            </header>

            <div className={styles.chatWrapper}>
                <ChatInterface />
            </div>
            <div className={styles.spacer}></div>
        </main>
    );
}
