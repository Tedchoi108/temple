"use client";

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { pois } from '@/lib/poiData';

// Dynamic import for Leaflet components to avoid SSR errors
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

const MapViewer = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [L, setL] = useState<any>(null);

    useEffect(() => {
        setIsMounted(true);
        // Import leaflet for icon setup on client side
        import('leaflet').then((leaflet) => {
            setL(leaflet);
            // Fix for Leaflet default marker icons in React
            const DefaultIcon = leaflet.icon({
                iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
                shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
            });
            leaflet.Marker.prototype.options.icon = DefaultIcon;
        });
    }, []);

    if (!isMounted || !L) return <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyItems: 'center' }}>지도 로딩 중...</div>;

    return (
        <MapContainer
            center={[35.7901, 129.3321]}
            zoom={16}
            style={{ height: '100%', width: '100%', borderRadius: '12px' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {pois.map(poi => (
                <Marker key={poi.id} position={[poi.latitude, poi.longitude]}>
                    <Popup>
                        <div style={{ padding: '5px' }}>
                            <h4 style={{ margin: '0 0 5px 0', color: '#B8860B' }}>{poi.nameKo}</h4>
                            <p style={{ fontSize: '0.85rem', margin: 0 }}>{poi.descriptionKo}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapViewer;
