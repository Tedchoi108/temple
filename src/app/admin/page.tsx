"use client";

import { useState } from 'react';
import { pois as initialPois, POI } from '@/lib/poiData';
import styles from './admin.module.css';
import Link from 'next/link';

export default function AdminPage() {
    const [poiList, setPoiList] = useState<POI[]>(initialPois);
    const [isEditing, setIsEditing] = useState(false);
    const [currentPoi, setCurrentPoi] = useState<Partial<POI>>({});

    const handleEdit = (poi: POI) => {
        setCurrentPoi(poi);
        setIsEditing(true);
    };

    const handleAddNew = () => {
        setCurrentPoi({
            id: `poi_${Date.now()}`,
            nameKo: '',
            category: 'pagoda',
            latitude: 35.789,
            longitude: 129.332,
            descriptionKo: '',
        });
        setIsEditing(true);
    };

    const handleSave = () => {
        // In a real app, this would be an API call
        const exists = poiList.find(p => p.id === currentPoi.id);
        if (exists) {
            setPoiList(poiList.map(p => p.id === currentPoi.id ? { ...p, ...currentPoi } as POI : p));
        } else {
            setPoiList([...poiList, currentPoi as POI]);
        }
        setIsEditing(false);
    };

    return (
        <main className={styles.adminMain}>
            <header className={styles.adminHeader}>
                <div>
                    <h1>문화재 콘텐츠 관리 (CMS)</h1>
                    <p>불국사/석굴암 POI 및 AR 타겟 설정</p>
                </div>
                <button onClick={handleAddNew} className={styles.addBtn}>+ 새 문화재 등록</button>
            </header>

            <div className={styles.adminContent}>
                {isEditing ? (
                    <section className={styles.editSection}>
                        <div className={styles.formCard}>
                            <h2>{currentPoi.id?.startsWith('poi_') ? '새 문화재 등록' : '콘텐츠 수정'}</h2>
                            <div className={styles.formGrid}>
                                <div className={styles.inputGroup}>
                                    <label>문화재 명칭 (한국어)</label>
                                    <input
                                        value={currentPoi.nameKo}
                                        onChange={e => setCurrentPoi({ ...currentPoi, nameKo: e.target.value })}
                                        placeholder="예: 다보탑"
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>카테고리</label>
                                    <select
                                        value={currentPoi.category}
                                        onChange={e => setCurrentPoi({ ...currentPoi, category: e.target.value as any })}
                                    >
                                        <option value="pagoda">석탑</option>
                                        <option value="temple">전각</option>
                                        <option value="grotto">석굴</option>
                                        <option value="statue">불상</option>
                                    </select>
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>위도 (Latitude)</label>
                                    <input
                                        type="number"
                                        value={currentPoi.latitude}
                                        onChange={e => setCurrentPoi({ ...currentPoi, latitude: parseFloat(e.target.value) })}
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>경도 (Longitude)</label>
                                    <input
                                        type="number"
                                        value={currentPoi.longitude}
                                        onChange={e => setCurrentPoi({ ...currentPoi, longitude: parseFloat(e.target.value) })}
                                    />
                                </div>
                                <div className={`${styles.inputGroup} ${styles.full}`}>
                                    <label>상세 해설 (한국어)</label>
                                    <textarea
                                        value={currentPoi.descriptionKo}
                                        onChange={e => setCurrentPoi({ ...currentPoi, descriptionKo: e.target.value })}
                                        rows={5}
                                    />
                                </div>

                                <div className={styles.divider}>AR 및 이미지 매칭 설정</div>

                                <div className={styles.inputGroup}>
                                    <label>인식 타겟 ID (Recognition ID)</label>
                                    <input
                                        value={currentPoi.recognitionId}
                                        onChange={e => setCurrentPoi({ ...currentPoi, recognitionId: e.target.value })}
                                        placeholder="AR 엔진 매칭용 ID"
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>카메라 매칭 가이드 문구</label>
                                    <input
                                        value={currentPoi.targetImageLabel}
                                        onChange={e => setCurrentPoi({ ...currentPoi, targetImageLabel: e.target.value })}
                                        placeholder="예: 기단부 사자상을 비춰주세요"
                                    />
                                </div>
                            </div>
                            <div className={styles.formActions}>
                                <button onClick={() => setIsEditing(false)} className={styles.cancelBtn}>취소</button>
                                <button onClick={handleSave} className={styles.saveBtn}>저장하기</button>
                            </div>
                        </div>
                    </section>
                ) : (
                    <section className={styles.listSection}>
                        <div className={styles.tableCard}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>명칭</th>
                                        <th>카테고리</th>
                                        <th>좌표</th>
                                        <th>AR 타겟</th>
                                        <th>상태</th>
                                        <th>관리</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {poiList.map(poi => (
                                        <tr key={poi.id}>
                                            <td className={styles.nameCell}>
                                                <strong>{poi.nameKo}</strong>
                                                <span>{poi.id}</span>
                                            </td>
                                            <td>{poi.category === 'pagoda' ? '석탑' : poi.category}</td>
                                            <td className={styles.coordCell}>{poi.latitude.toFixed(4)}, {poi.longitude.toFixed(4)}</td>
                                            <td>
                                                {poi.recognitionId ? (
                                                    <span className={styles.badgeSuccess}>{poi.recognitionId}</span>
                                                ) : (
                                                    <span className={styles.badgeWarn}>미설정</span>
                                                )}
                                            </td>
                                            <td><span className={styles.statusActive}>운영중</span></td>
                                            <td>
                                                <button onClick={() => handleEdit(poi)} className={styles.editBtn}>편집</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                )}
            </div>

            <footer className={styles.adminFooter}>
                <Link href="/">← 서비스 화면으로 돌아가기</Link>
            </footer>
        </main>
    );
}
