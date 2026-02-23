import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.profileSection}>
          <div className={styles.welcome}>
            <p>천년의 신비</p>
            <h1>경주 가이드</h1>
          </div>
          <div className={styles.avatar}>🏛️</div>
        </div>

        <div className={styles.searchBar}>
          <span className={styles.searchIcon}>🔍</span>
          <input type="text" placeholder="어디를 탐험하고 싶으신가요?" />
        </div>
      </header>

      <section className={styles.heroCard}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/images/hero.png"
            alt="Bulguksa"
            fill
            className={styles.heroImg}
          />
          <div className={styles.heroBadge}>추천</div>
        </div>
        <div className={styles.heroInfo}>
          <h2>불국사의 아침</h2>
          <p>세계가 인정한 신라 불교 예술의 정수</p>
          <Link href="/explore">
            <button className={styles.exploreBtn}>지금 탐험하기</button>
          </Link>
        </div>
      </section>

      <section className={styles.categories}>
        <div className={styles.sectionHeader}>
          <h3>탐험 카테고리</h3>
          <Link href="/explore">전체보기</Link>
        </div>
        <div className={styles.categoryGrid}>
          <div className={styles.catItem}>
            <div className={styles.catIcon}>🏯</div>
            <span>사찰</span>
          </div>
          <div className={styles.catItem}>
            <div className={styles.catIcon}>🗿</div>
            <span>석굴</span>
          </div>
          <div className={styles.catItem}>
            <div className={styles.catIcon}>🗼</div>
            <span>탑</span>
          </div>
          <div className={styles.catItem}>
            <div className={styles.catIcon}>🎞️</div>
            <span>AR 코스</span>
          </div>
        </div>
      </section>

      <section className={styles.featuredSection}>
        <div className={styles.sectionHeader}>
          <h3>인기 있는 장소</h3>
        </div>
        <div className={styles.horizontalScroll}>
          <div className={styles.placeCard}>
            <div className={styles.placeImgPlaceholder}>💎</div>
            <h4>석굴암</h4>
            <div className={styles.placeMeta}>
              <span>⭐ 4.9</span>
              <span>📍 4.2km</span>
            </div>
          </div>
          <div className={styles.placeCard}>
            <div className={styles.placeImgPlaceholder}>🏮</div>
            <h4>다보탑</h4>
            <div className={styles.placeMeta}>
              <span>⭐ 4.8</span>
              <span>📍 0.1km</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
