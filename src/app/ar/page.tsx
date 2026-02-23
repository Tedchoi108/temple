"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './ar.module.css';

export default function ARPage() {
    const router = useRouter();
    const [showGuide, setShowGuide] = useState(true);

    return (
        <main className={styles.container}>
            {/* HUD overlay for user controls */}
            <div className={styles.hudOverlay}>
                <button
                    className={styles.backBtn}
                    onClick={() => router.back()}
                >
                    ✕ 닫기
                </button>

                <div className={styles.statusBox}>
                    <span className={styles.dot}></span>
                    AR 카메라 스캔 중...
                </div>
            </div>

            {showGuide && (
                <div className={styles.tutorialOverlay}>
                    <div className={styles.tutorialContent}>
                        <div className={styles.scanIcon}>[ ]</div>
                        <h2>주변 문화재를 비춰주세요</h2>
                        <p>다보탑 주변에 있는 AR 마커(Hiro)를 화면에 가득 차게 잡아주세요. 숨겨진 천년의 역사가 모델로 나타납니다.</p>
                        <button
                            className={styles.understandBtn}
                            onClick={() => setShowGuide(false)}
                        >
                            확인
                        </button>
                    </div>
                </div>
            )}

            {/* The AR scene using AR.js and A-Frame */}
            <iframe
                className={styles.arFrame}
                src="/ar.html"
                allow="camera; microphone"
                title="AR Viewer"
            />
        </main>
    );
}
