import MapViewer from "@/components/map/MapViewer";
import ChatInterface from "@/components/chatbot/ChatInterface";
import styles from "./explore.module.css";
import Link from "next/link";

export default function ExplorePage() {
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <Link href="/" className={styles.backBtn}>← 홈으로</Link>
                <h1>불국사 실시간 탐험</h1>
            </header>

            <div className={styles.content}>
                <div className={styles.mapSection}>
                    <MapViewer />
                </div>

                <aside className={styles.poiList}>
                    <div className={styles.poiSubsection}>
                        <h2>주요 문화재</h2>
                        <div className={styles.list}>
                            <div className={styles.poiItem}>
                                <span>다보탑</span>
                                <button>해설 듣기</button>
                            </div>
                            <div className={styles.poiItem}>
                                <span>석가탑</span>
                                <button>해설 듣기</button>
                            </div>
                            <div className={styles.poiItem}>
                                <span>석굴암</span>
                                <button>이동하기</button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.chatSection}>
                        <h3 className={styles.sectionTitle}>지능형 해설 챗봇</h3>
                        <ChatInterface />
                    </div>

                    <div className={styles.arSection}>
                        <button className={styles.arBtn}>
                            <span className={styles.arIcon}>📷</span>
                            AR 스캔 시작하기
                        </button>
                    </div>
                </aside>
            </div>
        </main>
    );
}
