import { Kanban } from "lucide-react";
import Link from "next/link";

import { homePath, ticketsPath } from "@/paths";

import { ThemeSwitcher } from "./theme/theme-switcher";
import { buttonVariants } from "./ui/button";

export const Header = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-20 backdrop-blur bg-background/80 w-full flex justify-between items-center px-8 py-4 text-xl font-bold border-b border-border">
      <div className="w-full flex items-center justify-between ">
        <Link
          className={buttonVariants({ variant: "ghost", size: "lg" })}
          href={homePath()}
        >
          <Kanban className="size-8" />
          <h1 className="text-xl font-semibold hidden sm:block">主页</h1>
        </Link>

        <div className="flex items-center gap-6">
          {/* 主题切换器 */}
          <ThemeSwitcher />
          <Link
            className={buttonVariants({ variant: "outline", size: "lg" })}
            href={ticketsPath()}
          >
            <h1 className="text-lg hidden sm:block">工单</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
};
