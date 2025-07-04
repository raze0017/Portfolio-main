import { useEffect, useState } from "react";

const themes = [
  { name: "light", color: "white" }, // yellow
  { name: "dark", color: "black" }, // gray-800
  { name: "cyberpunk", color: "yellow" }, // pinkish
  { name: "dracula", color: "#6272a4" }, // bluish-purple
];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("dracula");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="flex gap-2">
      {themes.map((t) => (
        <button
          key={t.name}
          onClick={() => setTheme(t.name)}
          className={`w-6 h-6 rounded-full border-2 ${
            theme === t.name ? "border-white scale-110" : "border-transparent"
          } transition-transform`}
          style={{ backgroundColor: t.color }}
          title={t.name}
        />
      ))}
    </div>
  );
}
