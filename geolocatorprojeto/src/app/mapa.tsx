import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
import aeroportos from "../data/aeroportos_teste.json";

export default function Mapa() {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}>
      <div style={{ height: "100vh", width: "100%" }}>
        <Map
          defaultZoom={15}
          defaultCenter={aeroportos[8]}
          mapId={process.env.NEXT_PUBLIC_MAP_ID}
        >
          {aeroportos.map((aeroporto, index) => (
            <AdvancedMarker key={index} position={aeroporto}>
              <span style={{ fontSize: "1.5rem" }}>✈️</span>
            </AdvancedMarker>
          ))}
        </Map>
      </div>
    </APIProvider>
  );
}
