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
                        <h2 className="serif">사유의 길목 (주요 전각)</h2>
                        <span>3개 위치</span>
                    </div>

                    <div className={styles.poiScroll}>
                        <div className={styles.poiCard}>
                            <div className={styles.poiInfo}>
                                <h3 className="serif">다보탑</h3>
                                <p>통일신라의 화려한 탑, 국보 제20호</p>
                            </div>
                            <button className={styles.actionBtn}>해설 듣기</button>
                        </div>
                        <div className={styles.poiCard}>
                            <div className={styles.poiInfo}>
                                <h3 className="serif">석가탑</h3>
                                <p>절제의 미학을 담은 탑, 국보 제21호</p>
                            </div>
                            <button className={styles.actionBtn}>해설 듣기</button>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <h2 className="serif">큰스님의 지혜 (AI 가이드)</h2>
                    </div>
                    <ChatInterface />
                </section>

                <div className={styles.spacer}></div>
            </div>
        </main>
    );
}
