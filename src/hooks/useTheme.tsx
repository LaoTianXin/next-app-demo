"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "classic" | "modern" | "warm" | "cool" | "rainbow";

export interface ThemeConfig {
  name: Theme;
  displayName: string;
  description: string;
  emoji: string;
  colors: {
    primary: string;
    background: string;
    preview: string[];
  };
}

export const themes: Record<Theme, ThemeConfig> = {
  classic: {
    name: "classic",
    displayName: "经典蓝",
    description: "专业商务风格",
    emoji: "💼",
    colors: {
      primary: "#2563eb",
      background: "#ffffff",
      preview: ["#2563eb", "#64748b", "#1e40af", "#059669"],
    },
  },
  modern: {
    name: "modern",
    displayName: "现代绿",
    description: "清新自然风格",
    emoji: "🌿",
    colors: {
      primary: "#16a34a",
      background: "#f0fdf4",
      preview: ["#16a34a", "#059669", "#22c55e", "#eab308"],
    },
  },
  warm: {
    name: "warm",
    displayName: "温馨橙",
    description: "温暖活力风格",
    emoji: "🔥",
    colors: {
      primary: "#ea580c",
      background: "#fff7ed",
      preview: ["#ea580c", "#dc2626", "#16a34a", "#d97706"],
    },
  },
  cool: {
    name: "cool",
    displayName: "冷酷紫",
    description: "科技未来风格",
    emoji: "🌌",
    colors: {
      primary: "#8b5cf6",
      background: "#0f0f23",
      preview: ["#8b5cf6", "#06b6d4", "#475569", "#10b981"],
    },
  },
  rainbow: {
    name: "rainbow",
    displayName: "彩虹色",
    description: "活泼多彩风格",
    emoji: "🌈",
    colors: {
      primary: "#ff6b6b",
      background: "#667eea",
      preview: ["#ff6b6b", "#4ecdc4", "#ffe66d", "#51cf66"],
    },
  },
};

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: Record<Theme, ThemeConfig>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

export function ThemeProvider({
  children,
  defaultTheme = "classic",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [isClient, setIsClient] = useState(false);

  // 客户端挂载检查
  useEffect(() => {
    setIsClient(true);

    // 从localStorage读取主题
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme && themes[savedTheme]) {
      setThemeState(savedTheme);
    }
  }, []);

  // 更新主题
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);

    if (isClient) {
      // 保存到localStorage
      localStorage.setItem("theme", newTheme);

      // 更新document的data-theme属性
      document.documentElement.setAttribute("data-theme", newTheme);

      // 添加主题切换动画
      document.body.classList.add("animate-theme-change");
      setTimeout(() => {
        document.body.classList.remove("animate-theme-change");
      }, 500);
    }
  };

  // 初始化主题
  useEffect(() => {
    if (isClient) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme, isClient]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
