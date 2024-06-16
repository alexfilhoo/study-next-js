import {
  APIProvider,
  Map,
  useMapsLibrary,
  useMap,
} from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
import "./mapaRotas.css";
import Image from "next/image";

export default function MapaRotas() {
  const position = { lat: -30.02968, lng: -51.23412 };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}>
        <Map
          defaultZoom={15}
          defaultCenter={position}
          mapId={process.env.NEXT_PUBLIC_MAP_ID}
        >
          <Directions />
        </Map>
      </APIProvider>
    </div>
  );
}

function Directions() {
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");
  const [directionsService, setDirectionsService] =
    useState<google.maps.DirectionsService>();
  const [directionsRenderer, setDirectionsRenderer] =
    useState<google.maps.DirectionsRenderer>();
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];
  const [isAltWaysVisible, setAltWaysVisible] = useState(false);

  useEffect(() => {
    if (!routesLibrary || !map) return;
    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [routesLibrary, map]);

  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;

    directionsService
      .route({
        origin:
          "R. Gen. João Manoel, 157 - Centro Histórico, Porto Alegre - RS, 90010-030",
        destination:
          "R. Gen. Lima e Silva, 606 - Cidade Baixa, Porto Alegre - RS 90050-100",
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      });
  }, [directionsService, directionsRenderer]);

  useEffect(() => {
    if (!directionsRenderer) return;
    directionsRenderer.setRouteIndex(routeIndex);
  });

  if (!leg) return null;

  return (
    <>
      <div className="directions">
        <p className="min">{leg.duration?.text}</p>
        <p className="km">{leg.distance?.text}</p>
        <Image
          src="/alt-way.svg"
          width={25}
          height={25}
          alt="alternative way"
          onClick={() => setAltWaysVisible(!isAltWaysVisible)}
          className="alt-way-image"
        />
      </div>
      <div
        className="alt-ways"
        style={{ display: isAltWaysVisible ? "flex" : "none" }}
      >
        <h2>Trajetos alternativos:</h2>
        <ul>
          {routes.map((route, index) => (
            <li key={route.summary} className="routes">
              <button onClick={() => setRouteIndex(index)}>
                {route.summary}
              </button>
              <p>{route.legs[0].duration?.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
