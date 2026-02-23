"use client";

import { useState, useEffect } from 'react';
import styles from './InstallPrompt.module.css';

export default function InstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        // Check if it's iOS
        const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
        setIsIOS(ios);

        // If already in standalone mode, don't show prompt
        if (window.matchMedia('(display-mode: standalone)').matches) {
            return;
        }

        const handleBeforeInstallPrompt = (e: any) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            // Stash the event so it can be triggered later.
            setDeferredPrompt(e);
            setIsVisible(true);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        // For iOS, we can show it manually based on some logic (e.g., first visit)
        if (ios) {
            // Logic to decide when to show for iOS (e.g., check localStorage)
            const hasSeenPrompt = localStorage.getItem('ios_pwa_prompt_seen');
            if (!hasSeenPrompt) {
                setIsVisible(true);
            }
        }

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = async () => {
        if (isIOS) {
            alert('아이폰/아이패드: 브라우저 하단의 [공유판] 아이콘을 누른 후 [홈 화면에 추가]를 선택해주세요.');
            localStorage.setItem('ios_pwa_prompt_seen', 'true');
            setIsVisible(false);
            return;
        }

        if (!deferredPrompt) return;

        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        // We've used the prompt, and can't use it again, throw it away
        setDeferredPrompt(null);
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className={styles.banner}>
            <div className={styles.content}>
                <span className={styles.icon}>📱</span>
                <div className={styles.text}>
                    <p className={styles.title}>앱으로 더 편하게 이용하세요</p>
                    <p className={styles.desc}>바탕화면에 설치하고 바로 접속하세요</p>
                </div>
            </div>
            <div className={styles.actions}>
                <button onClick={handleInstallClick} className={styles.installBtn}>설치하기</button>
                <button onClick={() => setIsVisible(false)} className={styles.closeBtn}>✕</button>
            </div>
        </div>
    );
}
