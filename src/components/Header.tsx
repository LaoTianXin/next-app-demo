import { FileHeart,Kanban } from "lucide-react";
import Link from "next/link";

import { homePath, ticketsPath } from "@/paths";

import { CompactThemeSwitcher } from "./ThemeSwitcher";
import { buttonVariants } from "./ui/button";

export const Header = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-20 backdrop-blur bg-background/80 w-full flex justify-between items-center px-8 py-4 text-xl font-bold border-b border-border">
      <div className="flex gap-6">
        <Link
          className={buttonVariants({ variant: "ghost", size: "lg" })}
          href={homePath()}
        >
          <Kanban className="size-8" />
          <h1 className="text-xl font-semibold hidden sm:block">主页</h1>
        </Link>

        <Link
          className={buttonVariants({ variant: "ghost", size: "lg" })}
          href={ticketsPath()}
        >
          <FileHeart className="size-6" />
          <h1 className="text-lg hidden sm:block">工单</h1>
        </Link>
      </div>

      {/* 主题切换器 */}
      <CompactThemeSwitcher />
    </nav>
  );
};
