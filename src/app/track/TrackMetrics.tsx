import React from "react";

type Aggregated = {
	distance: number;
	elapsedMinutes: number;
	carbon: number;
};

type TrackMetricsProps = {
	aggregated: Aggregated;
	totalCarbon: number;
	currentTransport: string;
	elapsedMinutesCurrent: number;
	selectedTransport: string;
};

const TrackMetrics: React.FC<TrackMetricsProps> = ({
	aggregated,
	totalCarbon,
	currentTransport,
	elapsedMinutesCurrent,
	selectedTransport,
}) => {
	return (
		<div className="track-metrics-grid grid grid-cols-1 md:grid-cols-2 gap-4">
			<div className="card">
				<h3 className="font-semibold">Métricas ({selectedTransport})</h3>
				<p>Distância: {aggregated.distance.toFixed(2)} km</p>
				<p>Tempo: {aggregated.elapsedMinutes} min</p>
				<p>Pegada de Carbono: {aggregated.carbon.toFixed(2)} kg CO₂</p>
			</div>
			<div className="card">
				<h3 className="font-semibold">Total Pegada de Carbono</h3>
				<p>{totalCarbon.toFixed(2)} kg CO₂</p>
			</div>
			<div className="card">
				<h3 className="font-semibold">Tracking Atual</h3>
				<p>Transporte: {currentTransport}</p>
				<p>Tempo: {elapsedMinutesCurrent} min</p>
			</div>
		</div>
	);
};

export default TrackMetrics;
