"use client";

import { useEffect, useRef } from "react";

import { Loader } from "@googlemaps/js-api-loader";
import classes from "./GoogleMaps.module.css";

export default function GoogleMaps() {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");

      const { Marker } = await loader.importLibrary("marker");

      const position = {
        lat: 42.150092922599434,
        lng: 24.74748952598738,
      };

      const mapOptions = {
        center: position,
        zoom: 14,
        mapId: "MY_NEXTJS_MAPID",
      };

      const map = new Map(mapRef.current, mapOptions);

      const marker = new Marker({
        map: map,
        position: position,
      });
    };

    initMap();
  }, []);

  return <div className={classes.map} ref={mapRef}></div>;
}
