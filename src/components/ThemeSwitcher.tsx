"use client";

import clsx from "clsx";
import { useState } from "react";

import { type Theme,useTheme } from "@/hooks/useTheme";

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme: currentTheme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (theme: Theme) => {
    setTheme(theme);
    setIsOpen(false);
  };

  return (
    <div className={clsx("relative", className)}>
      {/* 当前主题按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card text-card-foreground border border-border hover:bg-muted transition-colors"
        aria-label="切换主题"
      >
        <span className="text-lg">{themes[currentTheme].emoji}</span>
        <span className="hidden sm:inline text-sm font-medium">
          {themes[currentTheme].displayName}
        </span>
        <svg
          className={clsx(
            "w-4 h-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* 主题选择面板 */}
      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* 主题面板 */}
          <div className="absolute right-0 top-full mt-2 w-80 bg-popover text-popover-foreground border border-border rounded-lg shadow-xl z-50 animate-scale-in">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-3">选择主题</h3>
              <div className="space-y-2">
                {Object.values(themes).map((themeConfig) => (
                  <button
                    key={themeConfig.name}
                    onClick={() => handleThemeChange(themeConfig.name)}
                    className={clsx(
                      "w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 theme-switch-button",
                      currentTheme === themeConfig.name
                        ? "bg-primary/10 border-2 border-primary active"
                        : "bg-card hover:bg-muted border-2 border-transparent"
                    )}
                  >
                    {/* 主题图标 */}
                    <div className="text-2xl">{themeConfig.emoji}</div>

                    {/* 主题信息 */}
                    <div className="flex-1 text-left">
                      <div className="font-medium">
                        {themeConfig.displayName}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {themeConfig.description}
                      </div>
                    </div>

                    {/* 颜色预览 */}
                    <div className="flex gap-1">
                      {themeConfig.colors.preview.map((color, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full border border-border/50"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>

                    {/* 当前选中指示器 */}
                    {currentTheme === themeConfig.name && (
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>

              {/* 主题预览提示 */}
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground text-center">
                  💡 主题会自动保存，下次访问时生效
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* 紧凑版主题切换器 - 只显示图标 */
export function CompactThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme: currentTheme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (theme: Theme) => {
    setTheme(theme);
    setIsOpen(false);
  };

  return (
    <div className={clsx("relative", className)}>
      {/* 紧凑按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-lg bg-card text-card-foreground border border-border hover:bg-muted transition-colors flex items-center justify-center"
        aria-label="切换主题"
        title={`当前主题: ${themes[currentTheme].displayName}`}
      >
        <span className="text-lg">{themes[currentTheme].emoji}</span>
      </button>

      {/* 主题选择面板 */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute right-0 top-full mt-2 bg-popover text-popover-foreground border border-border rounded-lg shadow-xl z-50 animate-scale-in">
            <div className="p-2">
              <div className="grid grid-cols-2 gap-2 w-48">
                {Object.values(themes).map((themeConfig) => (
                  <button
                    key={themeConfig.name}
                    onClick={() => handleThemeChange(themeConfig.name)}
                    className={clsx(
                      "flex items-center gap-2 p-2 rounded-md transition-all theme-switch-button text-sm",
                      currentTheme === themeConfig.name
                        ? "bg-primary/10 border border-primary active"
                        : "bg-card hover:bg-muted border border-transparent"
                    )}
                    title={themeConfig.description}
                  >
                    <span className="text-base">{themeConfig.emoji}</span>
                    <span className="font-medium truncate">
                      {themeConfig.displayName}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
