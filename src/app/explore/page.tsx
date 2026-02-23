import MapViewer from "@/components/map/MapViewer";
import ChatInterface from "@/components/chatbot/ChatInterface";
import styles from "./explore.module.css";

export default function ExplorePage() {
    return (
        <main className={styles.container}>
            <div className={styles.mapContainer}>
                <MapViewer />
            </div>

            <div className={styles.bottomSheet}>
                <div className={styles.handle}></div>

                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <h2>주요 문화재</h2>
                        <span>3개 위치</span>
                    </div>

                    <div className={styles.poiScroll}>
                        <div className={styles.poiCard}>
                            <div className={styles.poiInfo}>
                                <h3>다보탑</h3>
                                <p>통일신라의 화려한 탑</p>
                            </div>
                            <button className={styles.actionBtn}>해설</button>
                        </div>
                        <div className={styles.poiCard}>
                            <div className={styles.poiInfo}>
                                <h3>석가탑</h3>
                                <p>절제의 미학을 담은 탑</p>
                            </div>
                            <button className={styles.actionBtn}>해설</button>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <h2>AI 가이드 피드</h2>
                    </div>
                    <ChatInterface />
                </section>

                <div className={styles.spacer}></div>
            </div>
        </main>
    );
}
