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
