// Função para salvar dados no dispositivo utilizando localStorage.
// fileKey pode ser uma chave única ou um array de chaves para salvar em "arquivos" diferentes.
export const saveData = (fileKey: string | string[], newData: string): void => {
  const keys = Array.isArray(fileKey) ? fileKey : [fileKey];
  keys.forEach(key => {
    const existing = localStorage.getItem(key);
    if (existing === null || existing.trim() === "") {
      localStorage.setItem(key, newData);
    } else {
      // Insere o novo dado, separando por quebra de linha
      localStorage.setItem(key, existing + "\n" + newData);
    }
  });
};

export const deleteData = (fileKey: string | string[]): void => {
  const keys = Array.isArray(fileKey) ? fileKey : [fileKey];
  keys.forEach(key => localStorage.removeItem(key));
};

export const getDynamicData = (): { name: string; value: number }[] => {
  const keys = ["electricity", "gasLp", "naturalGas", "landTransport", "airTransport", "routeMetrics"];
  const names = ["Energia", "GLP", "Gás Natural", "Transporte Terrestre", "Transporte Aéreo", "Rastreio"];

  return keys.map((key, index) => {
    const storedData = localStorage.getItem(key);
    let value = 0;

    if (key === "routeMetrics" && storedData) {
      try {
        const metrics = JSON.parse(storedData);
        value = metrics.reduce((sum: number, metric: { carbon: number }) => sum + metric.carbon, 0);
      } catch (error) {
        console.error("Erro ao processar os dados de rastreio:", error);
      }
    } else if (storedData) {
      value = storedData.split("\n").reduce((sum, entry) => sum + parseFloat(entry), 0);
    }

    return { name: names[index], value: parseFloat(value.toFixed(2)) };
  });
};
