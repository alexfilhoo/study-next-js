"use client";

import "./globals.css";
import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

export default function RootLayout() {
  const position = { lat: -23.6000725997, lng: -46.718757125 };
  const [open, setOpen] = useState(false);
  return (
    <html>
      <body>
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}>
          <div style={{ height: "100vh", width: "100%" }}>
            <Map zoom={9} center={position}>
              <AdvancedMarker position={position} onClick={() => setOpen(true)}>
                <Pin></Pin>
              </AdvancedMarker>
              {open && (
                <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
                  <p>Amigo estou aqui</p>
                </InfoWindow>
              )}
            </Map>
          </div>
        </APIProvider>
      </body>
    </html>
  );
}
