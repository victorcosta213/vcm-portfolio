import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ConfigProvider, theme as antdTheme, App as AntdApp } from "antd";

type Theme = "light" | "dark" | "system";
type Ctx = { theme: Theme; setTheme: (t: Theme) => void };

const ThemeCtx = createContext<Ctx>({ theme: "system", setTheme: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as Theme) || "system";
    setTheme(stored);
  }, []);

  const isDark = useMemo(() => {
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    return theme === "dark" || (theme === "system" && prefersDark);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const commonTokens = {
    colorPrimary: "#2f6feb",
    borderRadius: 12,
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji'",
  } as const;

  const lightTokens = {
    ...commonTokens,
    colorBgLayout: "#f5f7fb",       
    colorBgContainer: "#ffffff",     
    colorText: "#1f2937",            
    colorTextSecondary: "#667085",  
    colorBorderSecondary: "#e5e7eb",
  };

  const darkTokens = {
    ...commonTokens,
    
  };

  return (
    <ThemeCtx.Provider value={{ theme, setTheme }}>
      <ConfigProvider
        theme={{
          algorithm: isDark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
          token: isDark ? darkTokens : lightTokens,
          components: {
            Layout: {
              headerPadding: "0 0", 
            },
            Menu: {
              itemSelectedBg: isDark ? undefined : "#e8f1ff",
              itemSelectedColor: isDark ? undefined : "#1f2937",
            },
            Segmented: {
              itemSelectedBg: isDark ? undefined : "#e8f1ff",
            },
            Typography: {
              fontSizeHeading1: 48, 
            },
          },
        }}
      >
        <AntdApp>{children}</AntdApp>
      </ConfigProvider>
    </ThemeCtx.Provider>
  );
}

export const useTheme = () => useContext(ThemeCtx);
