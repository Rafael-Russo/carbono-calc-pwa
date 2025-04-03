// Função para calcular a velocidade média (km/h) com base na distância total e no tempo decorrido
export const calculateAverageSpeed = (totalDistance: number, startTime: number, endTime: number): number => {
  const elapsedTimeInHours = (endTime - startTime) / (1000 * 60 * 60);
  return elapsedTimeInHours > 0 ? totalDistance / elapsedTimeInHours : 0;
};

// Modificado: desabilitar classificação de ônibus retornando sempre false
const checkIfBus = (avgSpeed: number): boolean => {
  return false;
};

// Função para definir o tipo de transporte com base na velocidade média
export const determineTransport = (avgSpeed: number): string => {
  if (avgSpeed >= 200) return "Avião";
  else if (checkIfBus(avgSpeed)) return "Onibus";
  else if (avgSpeed >= 100) return "Carro";
  else if (avgSpeed >= 60) return "Moto";
  else if (avgSpeed >= 15) return "Bicicleta";
  else if (avgSpeed > 0) return "A pé";
  else return "--";
};
