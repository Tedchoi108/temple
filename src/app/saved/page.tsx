import Link from "next/link";
import styles from "./saved.module.css";

export default function SavedPage() {
    return (
        <main className={`${styles.container} ripple-fade`}>
            <header className={styles.header}>
                <h1 className="serif">AI 마음 저장소</h1>
                <p>내가 머물렀던 천년의 시간들</p>
            </header>

            <div className={styles.content}>
                <div className={styles.emptyState}>
                    <span className={styles.emptyIcon}>📸</span>
                    <h3 className="serif">아직 담긴 풍경이 없습니다</h3>
                    <p>
                        AR 카메라로 유물을 스캔하고<br />
                        계절의 아름다움을 기록해 보세요.
                    </p>
                    <Link href="/ar" style={{ textDecoration: 'none' }}>
                        <button className={styles.arBtn}>
                            사물과 스캔하며 소통하기
                        </button>
                    </Link>
                </div>
            </div>

            <div className={styles.spacer}></div>
        </main>
    );
}
