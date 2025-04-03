export function calculateElectricityCarbon(kWh: number): number {
  // Fator aproximado: 0.527 kg CO2e por kWh
  return kWh * 0.527;
}
export function calculateGasLpCarbon(kg: number): number {
  // Fator aproximado: 2.988 kg CO2e por kg de GLP
  return kg * 2.988;
}
export function calculateNaturalGasCarbon(cubicMeters: number): number {
  // Fator aproximado: 1.88 kg CO2e por m³ de gás natural
  return cubicMeters * 1.88;
}
export function calculateLandTransportCarbon(km: number): number {
  // Fator aproximado: 0.192 kg CO2e por km
  return km * 0.192;
}
export function calculateAirTransportCarbon(trips: number): number {
  // Fator aproximado: 150 kg CO2e por viagem aérea
  return trips * 150;
}