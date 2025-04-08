// Função para calcular a velocidade média (km/h) com base na distância total e no tempo decorrido
export const calculateAverageSpeed = (totalDistance: number, startTime: number, endTime: number): number => {
  const elapsedTimeInHours = (endTime - startTime) / (1000 * 60 * 60);
  return elapsedTimeInHours > 0 ? totalDistance / elapsedTimeInHours : 0;
};


// Removida a verificação de "Onibus" na função determineTransport
export const determineTransport = (avgSpeed: number): string => {
  if (avgSpeed >= 200) return "Avião";
  else if (avgSpeed >= 100) return "Carro";
  else if (avgSpeed >= 60) return "Moto";
  else if (avgSpeed >= 15) return "Bicicleta";
  else return "A pé";
};
