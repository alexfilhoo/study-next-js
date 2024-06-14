import { APIProvider, Map, useMap, AdvancedMarker } from "@vis.gl/react-google-maps";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import type { Marker } from "@googlemaps/markerclusterer";
import { useEffect, useState, useRef } from "react";
import aeroportos from "../data/aeroportos_teste.json";

console.log(aeroportos);

export default function MapaCluster() {
    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}>
            <div style={{ height: "450px", width: "450px" }}>
                <Map 
                defaultZoom={12}
                defaultCenter={{ lat: 43.64, lng: -79.41 }}
                mapId={process.env.NEXT_PUBLIC_MAP_ID}
                >
                    <Markers aeroportos={aeroportos}/>
                </Map>
            </div>
        </APIProvider>
    )
}

type Airport = google.maps.LatLngLiteral & {key: string};
type Props = {aeroportos: Airport[]};

const Markers = ({aeroportos}: Props) => {
const map = useMap();
const [markers, setMarkers] = useState<{[key: string]: Marker}>({});
const clusterer = useRef<MarkerClusterer | null>(null);

useEffect(() => {
    if (!map) return 
    if (!clusterer.current) {
        clusterer.current = new MarkerClusterer({ map })
    }
}, [map])

useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
}, [markers]);

const setMarkerRef = (marker: Marker | null, key: string) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers(prev => {
        if (marker) {
         return {...prev, [key]: marker}
        } else {
            const newMarkers = {...prev};
            delete newMarkers[key];
            return newMarkers;
        }
    })
};

    return (
        <>
            {aeroportos.map(airport => 
            <AdvancedMarker 
            position={airport} 
            key={airport.key} 
            ref={(marker) => setMarkerRef(marker, airport.key)}>
                <span style={{fontSize: "1rem"}}>✈️</span>
            </AdvancedMarker>)}
        </>
    );
}