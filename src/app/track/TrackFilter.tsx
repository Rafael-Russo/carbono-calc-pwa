import React from "react";

type TrackFilterProps = {
	// array com os transportes selecionados
	selectedTransports: string[];
	// handler para atualizar o array de transportes selecionados
	setSelectedTransports: (options: string[]) => void;
};

const options = ["Carro", "Bicicleta", "A pé", "Onibus", "Moto", "Avião"];

const TrackFilter: React.FC<TrackFilterProps> = ({ selectedTransports, setSelectedTransports }) => {
	// Toggle da opção: adiciona se não existir, remove se já existir
	const toggleOption = (option: string) => {
		// Desabilita toggling para "Onibus"
		if (option === "Onibus") return;
		if (selectedTransports.includes(option)) {
			setSelectedTransports(selectedTransports.filter(item => item !== option));
		} else {
			setSelectedTransports([...selectedTransports, option]);
		}
	};

	return (
		<div className="transport-filter flex gap-2 my-4">
			{options.map(option => (
				<button
					key={option}
					onClick={() => toggleOption(option)}
					disabled={option === "Onibus"}
					className={`p-2 border rounded 
          ${selectedTransports.includes(option) ? "bg-green-500 text-white" : "bg-white text-green-500"}
          ${option === "Onibus" ? "opacity-50 cursor-not-allowed" : ""}`}
				>
					{option}
				</button>
			))}
		</div>
	);
};

export default TrackFilter;
