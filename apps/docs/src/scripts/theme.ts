export const themeScript = `
(function () {
  const STORAGE_KEY = "theme";
  const saved = localStorage.getItem(STORAGE_KEY);
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  const theme = saved === "system" || !saved ? systemTheme : saved;
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme === "dark" ? "dark" : "light");
})();
`;
