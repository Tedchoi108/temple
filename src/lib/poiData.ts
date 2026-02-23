export interface POI {
    id: string;
    name: string;
    nameKo: string;
    description: string;
    descriptionKo: string;
    latitude: number;
    longitude: number;
    category: 'temple' | 'pagoda' | 'gate' | 'grotto';
    audioUrl?: string;
    arModelUrl?: string;
}

export const pois: POI[] = [
    {
        id: 'dabotap',
        name: 'Dabotap Pagoda',
        nameKo: '다보탑',
        description: 'A masterpiece of Shilla Buddhist art, known for its complex and ornate design.',
        descriptionKo: '신라 미술의 정수로 꼽히는 화려하고 복잡한 구조의 탑입니다.',
        latitude: 35.789823,
        longitude: 129.332269,
        category: 'pagoda',
    },
    {
        id: 'seokgatap',
        name: 'Seokgatap Pagoda',
        nameKo: '석가탑',
        description: 'Also known as the Pagoda of No Shadows, it represents the essence of simplicity and proportion.',
        descriptionKo: '그림자가 비치지 않는 탑(무영탑)으로도 불리며, 단순함과 비례미의 정수를 보여줍니다.',
        latitude: 35.789823,
        longitude: 129.332015,
        category: 'pagoda',
    },
    {
        id: 'seokguram',
        name: 'Seokguram Grotto',
        nameKo: '석굴암',
        description: 'A cave temple containing a monumental statue of Buddha looking out to the sea.',
        descriptionKo: '동해를 향해 자리 잡은 기념비적인 부처님 상이 안치된 석굴 사찰입니다.',
        latitude: 35.794123,
        longitude: 129.349123,
        category: 'grotto',
    }
];
