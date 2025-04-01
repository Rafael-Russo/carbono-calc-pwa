"use client";
import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import { getDistanceFromLatLonInKm } from "../../utils/geo";

export default function TrackPage() {
  // Estados para rastreamento
  const [prevPosition, setPrevPosition] = useState<{ lat: number, lon: number } | null>(null);
  const [distance, setDistance] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [transport, setTransport] = useState("--");

  useEffect(() => {
    if (!navigator.geolocation) return;
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const currentTime = Date.now();

        if (!startTime) {
          setStartTime(currentTime);
          setPrevPosition({ lat: latitude, lon: longitude });
          return;
        }

        if (prevPosition) {
          const incrementalDist = getDistanceFromLatLonInKm(
            prevPosition.lat, 
            prevPosition.lon, 
            latitude, 
            longitude
          );
          setDistance(prev => prev + incrementalDist);
          setPrevPosition({ lat: latitude, lon: longitude });

          // Calcular tempo decorrido em horas
          const elapsedTimeInHours = (currentTime - (startTime ?? currentTime)) / (1000 * 60 * 60);
          // Velocidade média em km/h (evitando divisão por zero)
          const avgSpeed = elapsedTimeInHours > 0 ? (distance + incrementalDist) / elapsedTimeInHours : 0;
          
          // Definir tipo de transporte baseado na velocidade média
          if (avgSpeed >= 30) {
            setTransport("Carro");
          } else if (avgSpeed >= 15) {
            setTransport("Bicicleta");
          } else if (avgSpeed > 0) {
            setTransport("A pé");
          } else {
            setTransport("--");
          }
        }
      },
      (error) => console.error("Geolocation error:", error),
      { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
    );
    return () => navigator.geolocation.clearWatch(watchId);
  }, [prevPosition, startTime, distance]);

  // Calcular tempo de percurso em minutos
  const elapsedMinutes = startTime ? Math.floor((Date.now() - startTime) / 60000) : 0;

  return (
    <>
      <div className="w-full">
        <Navigation />
      </div>
      <div className="page-container max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="page-title">Rastreamento de Percurso</h2>
        <div className="map-placeholder">
          <div className="map-content">
            Mapa Aqui
          </div>
        </div>
        <div className="track-metrics-grid">
          <div className="card">
            <h3 className="font-semibold">Transporte</h3>
            <p>Veículo definido: {transport}</p>
          </div>
          <div className="card">
            <h3 className="font-semibold">Distância</h3>
            <p>{distance.toFixed(2)} km</p>
          </div>
          <div className="card">
            <h3 className="font-semibold">Tempo</h3>
            <p>{elapsedMinutes} min</p>
          </div>
          <div className="card">
            <h3 className="font-semibold">Pegada de Carbono</h3>
            <p>-- kg CO₂</p>
          </div>
        </div>
      </div>
    </>
  );
}
