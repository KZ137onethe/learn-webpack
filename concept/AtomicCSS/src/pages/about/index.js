  const themeButton = document.getElementById("theme");
  themeButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    themeButton.textContent = document.documentElement.classList.contains("dark")
      ? "当前主题：暗色"
      : "当前主题：亮色";
  });