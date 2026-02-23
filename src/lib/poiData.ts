export interface POI {
    id: string;
    name: string;
    nameKo: string;
    category: 'temple' | 'pagoda' | 'gate' | 'grotto' | 'statue' | 'etc';
    latitude: number;
    longitude: number;

    // Content
    descriptionKo: string;
    descriptionEn: string;
    audioUrl?: string;
    imageUrl?: string;

    // AR & Visual Recognition
    arModelUrl?: string;
    recognitionId?: string; // ID for visual matching (e.g., MindAR or 8th Wall)
    targetImageLabel?: string; // Human readable label of what the camera should see

    // Metadata
    difficulty?: 'easy' | 'medium' | 'hard';
    estimatedTime?: number; // in minutes
}

export const pois: POI[] = [
    {
        id: 'dabotap',
        name: 'Dabotap Pagoda',
        nameKo: '다보탑',
        category: 'pagoda',
        latitude: 35.789823,
        longitude: 129.332269,
        descriptionKo: '신라 경덕왕 10년(751)에 세워진 고려 시대 이전의 가장 세련된 석탑입니다. 국보 제20호.',
        descriptionEn: 'A masterpiece of Shilla Buddhist art, known for its complex and ornate design.',
        recognitionId: 'target_dabotap',
        targetImageLabel: '다보탑 전체 전경',
        difficulty: 'easy',
        estimatedTime: 10,
    },
    {
        id: 'seokgatap',
        name: 'Seokgatap Pagoda',
        nameKo: '석가탑',
        category: 'pagoda',
        latitude: 35.789823,
        longitude: 129.332015,
        descriptionKo: '그림자가 비치지 않는 무영탑으로도 불리는 정갈한 미학의 정수입니다. 국보 제21호.',
        descriptionEn: 'The Pagoda of No Shadows, representing the essence of simplicity and proportion.',
        recognitionId: 'target_seokgatap',
        targetImageLabel: '석가탑 상단',
        difficulty: 'easy',
        estimatedTime: 8,
    }
];
