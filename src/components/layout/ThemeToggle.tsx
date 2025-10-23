import { useTheme } from "../../app/providers/ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const order: ("light" | "dark" | "system")[] = ["light", "dark", "system"];
  const next = () => setTheme(order[(order.indexOf(theme) + 1) % order.length]);

  return (
    <button
      onClick={next}
      className="rounded-xl border px-3 py-2 text-sm shadow-card hover:opacity-90 transition"
      aria-label="Alternar tema"
      title={`Tema atual: ${theme}`}
    >
      Tema: {theme}
    </button>
  );
}
