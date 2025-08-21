"use client";

import { LucideMoon,LucideSun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "../ui/button";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      variant="outline"
      size="icon"
      className="relative overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95 bg-background/80 backdrop-blur-sm border-border/50 hover:border-border dark:hover:border-primary/50 cursor-pointer"
    >
      <LucideSun className="h-4 w-4 absolute transition-all duration-500 ease-in-out rotate-0 scale-100 opacity-100 dark:rotate-90 dark:scale-0 dark:opacity-0" />
      <LucideMoon className="h-4 w-4 absolute transition-all duration-500 ease-in-out -rotate-90 scale-0 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100" />
    </Button>
  );
};

export { ThemeSwitcher };
