"use client";

import Link from "next/link";

import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useTheme } from "@/hooks/useTheme";
import { homePath } from "@/paths";

export default function ThemeDemoPage() {
  const { theme: currentTheme, themes } = useTheme();
  const currentThemeConfig = themes[currentTheme];

  return (
    <div className="w-full space-y-8">
      {/* 页面标题和主题信息 */}
      <div className="mb-8 animate-fade-in">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">主题演示页面</h1>
            <p className="text-muted-foreground mt-2">
              展示所有主题设置和组件样式
            </p>
          </div>
          <ThemeSwitcher />
        </div>

        {/* 当前主题信息 */}
        <div className="bg-card text-card-foreground p-6 rounded-lg border border-border">
          <div className="flex items-center gap-4">
            <div className="text-4xl">{currentThemeConfig.emoji}</div>
            <div>
              <h2 className="text-xl font-semibold">
                {currentThemeConfig.displayName}
              </h2>
              <p className="text-muted-foreground">
                {currentThemeConfig.description}
              </p>
            </div>
            <div className="ml-auto flex gap-2">
              {currentThemeConfig.colors.preview.map((color, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full border-2 border-border"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 颜色系统演示 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">颜色系统</h2>

        {/* 品牌色系 */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-foreground">品牌色系</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-primary text-primary-foreground p-4 rounded-lg">
              <div className="font-medium">Primary</div>
              <div className="text-sm opacity-90">主要品牌色</div>
            </div>
            <div className="bg-secondary text-secondary-foreground p-4 rounded-lg">
              <div className="font-medium">Secondary</div>
              <div className="text-sm opacity-90">次要品牌色</div>
            </div>
            <div className="bg-accent text-accent-foreground p-4 rounded-lg">
              <div className="font-medium">Accent</div>
              <div className="text-sm opacity-90">强调色</div>
            </div>
          </div>
        </div>

        {/* 状态色系 */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-foreground">状态色系</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-success text-success-foreground p-4 rounded-lg">
              <div className="font-medium">Success</div>
              <div className="text-sm opacity-90">成功</div>
            </div>
            <div className="bg-warning text-warning-foreground p-4 rounded-lg">
              <div className="font-medium">Warning</div>
              <div className="text-sm opacity-90">警告</div>
            </div>
            <div className="bg-error text-error-foreground p-4 rounded-lg">
              <div className="font-medium">Error</div>
              <div className="text-sm opacity-90">错误</div>
            </div>
            <div className="bg-info text-info-foreground p-4 rounded-lg">
              <div className="font-medium">Info</div>
              <div className="text-sm opacity-90">信息</div>
            </div>
          </div>
        </div>
      </section>

      {/* 动画演示 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">动画效果</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <button className="bg-card text-card-foreground p-4 rounded-lg border border-border interactive">
            <div className="font-medium">Interactive</div>
            <div className="text-sm text-muted-foreground">悬停查看效果</div>
          </button>

          <div className="bg-card text-card-foreground p-4 rounded-lg border border-border animate-fade-in">
            <div className="font-medium">Fade In</div>
            <div className="text-sm text-muted-foreground">淡入动画</div>
          </div>

          <div className="bg-card text-card-foreground p-4 rounded-lg border border-border animate-slide-in-bottom">
            <div className="font-medium">Slide In</div>
            <div className="text-sm text-muted-foreground">滑入动画</div>
          </div>

          <div className="bg-card text-card-foreground p-4 rounded-lg border border-border animate-scale-in">
            <div className="font-medium">Scale In</div>
            <div className="text-sm text-muted-foreground">缩放动画</div>
          </div>

          <div className="bg-card text-card-foreground p-4 rounded-lg border border-border">
            <div className="font-medium">Loading</div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
              加载中
            </div>
          </div>
        </div>
      </section>

      {/* 组件演示 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">组件演示</h2>

        {/* 卡片组件 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card text-card-foreground p-6 rounded-lg border border-border">
            <h3 className="text-lg font-semibold mb-3">基础卡片</h3>
            <p className="text-muted-foreground mb-4">
              这是一个使用新主题系统的卡片组件，支持明暗主题自动切换。
            </p>
            <div className="flex gap-2">
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                主要按钮
              </button>
              <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                次要按钮
              </button>
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              信息卡片
            </h3>
            <p className="text-muted-foreground mb-4">
              使用静音色背景的信息展示卡片。
            </p>
            <div className="space-y-2">
              <div className="text-sm">
                <span className="text-muted-foreground">状态:</span>
                <span className="ml-2 bg-success text-success-foreground px-2 py-1 rounded text-xs">
                  活跃
                </span>
              </div>
              <div className="text-sm">
                <span className="text-muted-foreground">类型:</span>
                <span className="ml-2 text-foreground">演示组件</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 文本截断演示 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">文本工具</h2>

        <div className="bg-card text-card-foreground p-6 rounded-lg border border-border space-y-4">
          <div>
            <h4 className="font-medium mb-2">单行截断 (.line-clamp-1)</h4>
            <p className="line-clamp-1 text-muted-foreground">
              这是一段很长的文本，用来演示单行截断效果。这段文本会被截断，只显示第一行的内容，超出的部分会用省略号表示。
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-2">两行截断 (.line-clamp-2)</h4>
            <p className="line-clamp-2 text-muted-foreground">
              这是一段很长的文本，用来演示两行截断效果。这段文本会被截断，只显示前两行的内容，超出的部分会用省略号表示。这样可以在保持布局整洁的同时显示更多信息。
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-2">三行截断 (.line-clamp-3)</h4>
            <p className="line-clamp-3 text-muted-foreground">
              这是一段很长的文本，用来演示三行截断效果。这段文本会被截断，只显示前三行的内容，超出的部分会用省略号表示。这样可以在保持布局整洁的同时显示更多信息。对于内容预览来说，三行通常是一个比较好的平衡点。
            </p>
          </div>
        </div>
      </section>

      {/* 返回链接 */}
      <div className="pt-8">
        <Link
          href={homePath()}
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
        >
          ← 返回首页
        </Link>
      </div>
    </div>
  );
}
