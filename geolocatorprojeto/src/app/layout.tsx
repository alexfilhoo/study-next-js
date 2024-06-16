"use client";

import "./globals.css";
import Mapa from "./mapa";
import MapaCluster from "./mapaCluster";
import MapaRotas from "./mapaRotas";

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
        {/* <div>
          <MapaRotas />
        </div> */}
      </body>
    </html>
  );
}
