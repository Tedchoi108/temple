import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImageContainer}>
          <Image
            src="/images/hero.png"
            alt="Bulguksa Temple"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.overlay} />
        </div>

        <div className={styles.heroContent}>
          <h1 className="fade-in">불국사의 영혼, <br />AR로 다시 깨어나다</h1>
          <p className="fade-in">천년의 신비, 불국사와 석굴암을 가장 지능적인 방식으로 탐험하세요.</p>
          <div className={styles.ctaGroup}>
            <Link href="/explore">
              <button className={styles.primaryBtn}>탐험 시작하기</button>
            </Link>
            <button className={styles.secondaryBtn}>앱 가이드 보기</button>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className={styles.features}>
        <div className="container">
          <div className={styles.featureGrid}>
            <div className={`${styles.featureCard} glass`}>
              <div className={styles.icon}>🎥</div>
              <h3>AR 스캔 가이드</h3>
              <p>스마트폰 카메라로 유물을 비추면 3D 정보와 역사가 눈앞에 펼쳐집니다.</p>
            </div>
            <div className={`${styles.featureCard} glass`}>
              <div className={styles.icon}>🎧</div>
              <h3>GPS 상황인지 가이드</h3>
              <p>당신의 위치를 파악하여 자동으로 깊이 있는 오디오 해설을 제공합니다.</p>
            </div>
            <div className={`${styles.featureCard} glass`}>
              <div className={styles.icon}>💬</div>
              <h3>AI 문화재 챗봇</h3>
              <p>궁금한 점은 무엇이든 물어보세요. 불국사 전문가가 즉시 답변해 드립니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className={styles.footer}>
        <div className="container">
          <p>© 2026 Gyeongju Heritage AR Guide. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
