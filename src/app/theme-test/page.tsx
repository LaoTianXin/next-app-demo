"use client";

import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeTestPage() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* 页面标题和主题切换器 */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">shadcn组件主题测试</h1>
            <p className="text-muted-foreground mt-2">
              当前主题: <span className="font-medium">{theme}</span>
            </p>
          </div>
          <ThemeSwitcher />
        </div>

        {/* 按钮组件测试 */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">按钮组件</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">默认按钮</Button>
            <Button variant="secondary">次要按钮</Button>
            <Button variant="destructive">危险按钮</Button>
            <Button variant="outline">轮廓按钮</Button>
            <Button variant="ghost">幽灵按钮</Button>
            <Button variant="link">链接按钮</Button>
          </div>
        </div>

        {/* 卡片组件测试 */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">卡片组件</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-card text-card-foreground p-6 rounded-lg border border-border shadow-sm"
              >
                <h3 className="font-semibold mb-2">卡片标题 {i}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  这是卡片的描述内容，用于测试主题色彩在卡片组件中的表现。
                </p>
                <Button size="sm">操作按钮</Button>
              </div>
            ))}
          </div>
        </div>

        {/* 输入组件测试 */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">输入组件</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">文本输入</label>
              <input
                type="text"
                placeholder="请输入文本..."
                className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">文本区域</label>
              <textarea
                placeholder="请输入多行文本..."
                rows={3}
                className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring resize-none"
              />
            </div>
          </div>
        </div>

        {/* 状态颜色测试 */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">状态颜色</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              className="p-4 rounded-lg"
              style={{
                backgroundColor: "var(--success)",
                color: "var(--success-foreground)",
              }}
            >
              <div className="font-medium">成功</div>
              <div className="text-sm opacity-90">Success</div>
            </div>
            <div
              className="p-4 rounded-lg"
              style={{
                backgroundColor: "var(--warning)",
                color: "var(--warning-foreground)",
              }}
            >
              <div className="font-medium">警告</div>
              <div className="text-sm opacity-90">Warning</div>
            </div>
            <div
              className="p-4 rounded-lg"
              style={{
                backgroundColor: "var(--destructive)",
                color: "var(--destructive-foreground)",
              }}
            >
              <div className="font-medium">错误</div>
              <div className="text-sm opacity-90">Error</div>
            </div>
            <div
              className="p-4 rounded-lg"
              style={{
                backgroundColor: "var(--info)",
                color: "var(--info-foreground)",
              }}
            >
              <div className="font-medium">信息</div>
              <div className="text-sm opacity-90">Info</div>
            </div>
          </div>
        </div>

        {/* 边框和分隔线测试 */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">边框和分隔线</h2>
          <div className="space-y-4">
            <div className="p-4 border border-border rounded-lg">
              <p>这是一个带有边框的容器，用于测试边框颜色。</p>
            </div>
            <hr className="border-border" />
            <div className="p-4 bg-muted text-muted-foreground rounded-lg">
              <p>这是一个柔和背景的容器，用于测试弱化颜色。</p>
            </div>
          </div>
        </div>

        {/* Popover 样式测试 */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">弹出层样式</h2>
          <div className="p-4 bg-popover text-popover-foreground border border-border rounded-lg shadow-md">
            <h3 className="font-medium mb-2">弹出层内容</h3>
            <p className="text-sm">
              这是一个模拟的弹出层，用于测试弹出层的背景和文字颜色。
            </p>
          </div>
        </div>

        {/* 主题信息展示 */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">主题信息</h2>
          <div className="bg-card text-card-foreground p-6 rounded-lg border border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="font-medium text-foreground">主要色</div>
                <div
                  className="mt-1 p-2 rounded border"
                  style={{
                    backgroundColor: "var(--primary)",
                    color: "var(--primary-foreground)",
                  }}
                >
                  Primary
                </div>
              </div>
              <div>
                <div className="font-medium text-foreground">次要色</div>
                <div
                  className="mt-1 p-2 rounded border"
                  style={{
                    backgroundColor: "var(--secondary)",
                    color: "var(--secondary-foreground)",
                  }}
                >
                  Secondary
                </div>
              </div>
              <div>
                <div className="font-medium text-foreground">强调色</div>
                <div
                  className="mt-1 p-2 rounded border"
                  style={{
                    backgroundColor: "var(--accent)",
                    color: "var(--accent-foreground)",
                  }}
                >
                  Accent
                </div>
              </div>
              <div>
                <div className="font-medium text-foreground">柔和色</div>
                <div
                  className="mt-1 p-2 rounded border"
                  style={{
                    backgroundColor: "var(--muted)",
                    color: "var(--muted-foreground)",
                  }}
                >
                  Muted
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
