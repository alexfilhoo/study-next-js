"use client";

import "./globals.css";
import Mapa from "./mapa";
import MapaCluster from "./mapaCluster";

export default function RootLayout() {
  return (
    <html>
      <body>
        <div className="mb-5">
        <Mapa />
        </div>
        {/* <div>
          <MapaCluster />
        </div> */}
      </body>
    </html>
  );
}
