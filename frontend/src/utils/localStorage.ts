export const persistLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};
export const clearLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
