"use client";
import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import { getDistanceFromLatLonInKm } from "../../utils/geo";
import { calculateAverageSpeed, determineTransport } from "../../utils/tracker";
import { saveData } from "../../utils/dataStorage";
import Map from "../components/Map";
import { calculateLandTransportCarbon } from "../../utils/carbonFootprint";
import TrackFilter from "./TrackFilter";
import TrackMetrics from "./TrackMetrics";

type RouteMetric = {
	transport: string;
	distance: number;
	elapsedMinutes: number;
	carbon: number;
	date: number;
};

export default function TrackPage() {
	const [prevPosition, setPrevPosition] = useState<{ lat: number; lon: number } | null>(null);
	const [distance, setDistance] = useState(0);
	const [startTime, setStartTime] = useState<number | null>(null);
	const [transport, setTransport] = useState("--");
	const [route, setRoute] = useState<{ lat: number; lon: number }[]>([]);
	const [routeMetrics, setRouteMetrics] = useState<RouteMetric[]>([]);
	const [selectedTransport, setSelectedTransport] = useState<string>("Todos");

	useEffect(() => {
		const storedRoute = localStorage.getItem("trackedRoute");
		if (storedRoute && storedRoute.trim() !== "") {
			try {
				const lines = storedRoute.split("\n");
				const parsedRoute = lines.map(line => JSON.parse(line));
				setRoute(parsedRoute);
			} catch (error) {
				console.error("Erro ao carregar a rota salva:", error);
			}
		}
		const storedMetrics = localStorage.getItem("routeMetrics");
		if (storedMetrics) {
			try {
				setRouteMetrics(JSON.parse(storedMetrics));
			} catch (error) {
				console.error("Erro ao carregar métricas de rotas:", error);
			}
		}
	}, []);

	useEffect(() => {
		if (!navigator.geolocation) return;
		const watchId = navigator.geolocation.watchPosition(
			(position) => {
				const { latitude, longitude } = position.coords;
				const currentTime = Date.now();
				const newPoint = { lat: latitude, lon: longitude };

				if (!startTime) {
					setStartTime(currentTime);
					setPrevPosition(newPoint);
					setRoute(prev => [...prev, newPoint]);
					saveData("trackedRoute", JSON.stringify(newPoint));
					const newMetric: RouteMetric = {
						transport: "--",
						distance: 0,
						elapsedMinutes: 0,
						carbon: 0,
						date: currentTime,
					};
					setRouteMetrics(prev => {
						const updated = [...prev, newMetric];
						localStorage.setItem("routeMetrics", JSON.stringify(updated));
						return updated;
					});
					return;
				}

				if (prevPosition) {
					const incrementalDist = getDistanceFromLatLonInKm(
						prevPosition.lat,
						prevPosition.lon,
						latitude,
						longitude
					);
					const newDistance = distance + incrementalDist;
					setDistance(newDistance);
					setPrevPosition(newPoint);
					setRoute(prev => [...prev, newPoint]);
					saveData("trackedRoute", JSON.stringify(newPoint));

					const avgSpeed = calculateAverageSpeed(newDistance, startTime, currentTime);
					const currentTransport = determineTransport(avgSpeed);
					setTransport(currentTransport);

					let carbon = 0;
					if (currentTransport === "Carro") {
						carbon = calculateLandTransportCarbon(newDistance);
					} else if (currentTransport === "Bicicleta") {
						carbon = newDistance * 0.05;
					} else if (currentTransport === "A pé") {
						carbon = 0;
					} else {
						carbon = calculateLandTransportCarbon(newDistance);
					}

					const elapsed = Math.floor((currentTime - (startTime as number)) / 60000);
					setRouteMetrics(prev => {
						const updated = [...prev];
						const lastIndex = updated.length - 1;
						updated[lastIndex] = {
							transport: currentTransport,
							distance: newDistance,
							elapsedMinutes: elapsed,
							carbon,
							date: currentTime,
						};
						localStorage.setItem("routeMetrics", JSON.stringify(updated));
						return updated;
					});
				}
			},
			(error) => console.error("Geolocation error:", error),
			{ enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
		);
		return () => navigator.geolocation.clearWatch(watchId);
	}, [prevPosition, startTime, distance]);

	const filteredMetrics = routeMetrics.filter(metric =>
		selectedTransport === "Todos" ? true : metric.transport === selectedTransport
	);
	const aggregated = filteredMetrics.reduce(
		(acc, cur) => ({
			distance: acc.distance + cur.distance,
			elapsedMinutes: acc.elapsedMinutes + cur.elapsedMinutes,
			carbon: acc.carbon + cur.carbon,
		}),
		{ distance: 0, elapsedMinutes: 0, carbon: 0 }
	);
	const totalCarbon = routeMetrics.reduce((sum, metric) => sum + metric.carbon, 0);
	const elapsedMinutesCurrent = startTime ? Math.floor((Date.now() - startTime) / 60000) : 0;

	return (
		<>
			<div className="w-full">
				<Navigation />
			</div>
			<div className="page-container max-w-4xl mx-auto flex flex-col items-center">
				<h2 className="page-title">Rastreamento de Percurso</h2>
				<div className="map-placeholder">
					<Map
						route={route}
						googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
					/>
				</div>
				<TrackFilter selectedTransport={selectedTransport} setSelectedTransport={setSelectedTransport} />
				<TrackMetrics
					aggregated={aggregated}
					totalCarbon={totalCarbon}
					currentTransport={transport}
					elapsedMinutesCurrent={elapsedMinutesCurrent}
					selectedTransport={selectedTransport}
				/>
			</div>
		</>
	);
}
