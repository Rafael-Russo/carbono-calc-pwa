import React from "react";

type TrackFilterProps = {
	// valor selecionado atual
	selectedTransport: string;
	// handler para alterar o valor selecionado
	setSelectedTransport: (option: string) => void;
};

const TrackFilter: React.FC<TrackFilterProps> = ({ selectedTransport, setSelectedTransport }) => {
	const options = ["Carro", "Bicicleta", "A pé", "Todos"];
	return (
		<div className="transport-filter flex gap-2 my-4">
			{options.map(option => (
				<button
					key={option}
					className={`p-2 border ${selectedTransport === option ? "bg-blue-200" : ""}`}
					onClick={() => setSelectedTransport(option)}
				>
					{option}
				</button>
			))}
		</div>
	);
};

export default TrackFilter;
