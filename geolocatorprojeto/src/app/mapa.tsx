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
          <div style={{ height: "450px", width: "450px" }}>
            <Map defaultZoom={15} defaultCenter={aeroportos[1]} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
              {aeroportos.map((aeroporto, index) => (
                <AdvancedMarker key={index} position={aeroporto}>
                  <Pin/>
                </AdvancedMarker>
              ))}
            </Map>
          </div>
        </APIProvider>
    )
}