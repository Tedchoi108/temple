import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={`${styles.main} ripple-fade`}>
      <header className={styles.header}>
        <div className={styles.profileSection}>
          <div className={styles.welcome}>
            <p className={styles.subtitle}>마음의 거울</p>
            <h1 className="serif">심경(心鏡)</h1>
          </div>
          <div className={styles.avatar}>🪞</div>
        </div>
      </header>

      <section className={styles.heroCard}>
        <div className={styles.heroImageWrapper}>
          <div className={styles.heroOverlay}></div>
          <Image
            src="/img/01.jpg"
            alt="Zen Temple"
            fill
            className={styles.heroImg}
          />
        </div>
        <div className={styles.heroInfo}>
          <h2 className="serif">천년의 고독 속으로</h2>
          <p>불국사와 석굴암에서 만나는 비움의 미학</p>
          <Link href="/ar" className={styles.scanLink}>
            <button className={styles.zenBtn}>
              <span className={styles.btnIcon}>👁️</span>
              사물과 스캔하여 소통하기
            </button>
          </Link>
        </div>
      </section>

      <section className={styles.pillars}>
        <div className={styles.pillarHeader}>
          <h3 className="serif">사유의 길 (수행 기능)</h3>
        </div>

        <div className={styles.pillarList}>
          {/* 1. 지능형 스캔 및 도슨트 */}
          <Link href="/chatbot" className={styles.pillarCard}>
            <div className={styles.pillarIcon}>🎧</div>
            <div className={styles.pillarText}>
              <h4 className="serif">지능형 챗봇 도슨트</h4>
              <p>큰스님과 마주하듯 대화하는 멀티모달 오디오 가이드</p>
            </div>
          </Link>

          {/* 2. 산책 가이드 */}
          <Link href="/explore" className={styles.pillarCard}>
            <div className={styles.pillarIcon}>🧭</div>
            <div className={styles.pillarText}>
              <h4 className="serif">사찰 산책 가이드</h4>
              <p>단순한 수묵화 지도로 만나는 고요한 전각 순례</p>
            </div>
          </Link>

          {/* 3. 뷰포인트 & 영성 기록 */}
          <div className={styles.pillarCard}>
            <div className={styles.pillarIcon}>📸</div>
            <div className={styles.pillarText}>
              <h4 className="serif">AI 마음 저장소</h4>
              <p>최적의 구도로 계절의 아름다움을 간직하는 영성 기록</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.featureBlock}>
        <div className={styles.meditationBox}>
          <span className={styles.meditationIcon}>🎐</span>
          <h4 className="serif">디지털 템플스테이</h4>
          <p>1분간 눈을 감고 싱잉볼의 파동을 느껴보세요</p>
          <button className={styles.zenOutlineBtn}>명상 시작</button>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© 2026 심경(心鏡) - Zen Temple Guide.</p>
          <Link href="/admin" className={styles.adminLink}>콘텐츠 서랍 (관리자) →</Link>
        </div>
      </footer>
    </main>
  );
}
