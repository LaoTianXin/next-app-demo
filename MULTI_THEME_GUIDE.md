# 多主题切换系统使用指南

这个项目实现了一个完整的多主题切换系统，支持5套不同风格的主题，具备动画过渡和本地存储功能。

## 🎨 可用主题

### 1. 经典蓝 (classic) 💼
- **风格**: 专业商务风格
- **主色调**: 蓝色系 (#2563eb)
- **适用场景**: 企业应用、商务平台、专业工具
- **特点**: 经典稳重，适合长时间使用

### 2. 现代绿 (modern) 🌿
- **风格**: 清新自然风格
- **主色调**: 绿色系 (#16a34a)
- **适用场景**: 环保应用、健康平台、自然主题
- **特点**: 清新舒适，护眼友好

### 3. 温馨橙 (warm) 🔥
- **风格**: 温暖活力风格
- **主色调**: 橙色系 (#ea580c)
- **适用场景**: 社交应用、创意平台、活动网站
- **特点**: 温暖友好，充满活力

### 4. 冷酷紫 (cool) 🌌
- **风格**: 科技未来风格
- **主色调**: 紫色系 (#8b5cf6)
- **适用场景**: 科技产品、游戏平台、创新工具
- **特点**: 神秘科技，富有未来感

### 5. 彩虹色 (rainbow) 🌈
- **风格**: 活泼多彩风格
- **主色调**: 渐变多彩
- **适用场景**: 儿童应用、创意工具、娱乐平台
- **特点**: 色彩丰富，充满创意

## 🚀 快速开始

### 基础使用

```tsx
import { useTheme } from '@/hooks/useTheme';

function MyComponent() {
  const { theme, setTheme, themes } = useTheme();
  
  return (
    <div>
      <p>当前主题: {themes[theme].displayName}</p>
      <button onClick={() => setTheme('modern')}>
        切换到现代绿
      </button>
    </div>
  );
}
```

### 添加主题切换器

```tsx
import { ThemeSwitcher, CompactThemeSwitcher } from '@/components/ThemeSwitcher';

// 完整版主题切换器
<ThemeSwitcher />

// 紧凑版主题切换器（仅图标）
<CompactThemeSwitcher />
```

## 📁 文件结构

```
src/
├── hooks/
│   └── useTheme.tsx         # 主题管理Hook
├── components/
│   └── ThemeSwitcher.tsx    # 主题切换器组件
├── app/
│   ├── globals.css          # 主题CSS变量定义
│   └── layout.tsx           # 主题Provider集成
└── types/
    └── theme.ts             # 主题类型定义
```

## 🔧 技术实现

### 主题管理系统
- **React Context**: 全局主题状态管理
- **localStorage**: 主题选择持久化存储
- **CSS Variables**: 动态颜色切换
- **TypeScript**: 完整的类型安全

### CSS变量系统
每个主题都定义了完整的颜色变量：

```css
[data-theme="modern"] {
  --background: #f0fdf4;
  --foreground: #14532d;
  --primary: #16a34a;
  --primary-foreground: #ffffff;
  /* ... 更多变量 */
}
```

### 动画过渡
- 主题切换时的平滑过渡动画
- 500ms缓动动画效果
- 防抖处理避免频繁切换

## 🎨 主题配置

### 颜色变量
每个主题包含以下颜色变量：

| 变量名 | 用途 | Tailwind类 |
|--------|------|------------|
| `--background` | 页面背景 | `bg-background` |
| `--foreground` | 主要文字 | `text-foreground` |
| `--primary` | 主要品牌色 | `bg-primary` |
| `--secondary` | 次要品牌色 | `bg-secondary` |
| `--accent` | 强调色 | `bg-accent` |
| `--success` | 成功状态 | `bg-success` |
| `--warning` | 警告状态 | `bg-warning` |
| `--error` | 错误状态 | `bg-error` |
| `--info` | 信息状态 | `bg-info` |
| `--muted` | 静音背景 | `bg-muted` |
| `--border` | 边框颜色 | `border-border` |
| `--card` | 卡片背景 | `bg-card` |

### 语义化使用
```tsx
// ✅ 推荐：语义化使用
<div className="bg-card text-card-foreground">卡片内容</div>
<button className="bg-primary text-primary-foreground">主要按钮</button>
<span className="text-success">成功状态</span>

// ❌ 不推荐：硬编码颜色
<div className="bg-white text-black">内容</div>
<button className="bg-blue-500 text-white">按钮</button>
```

## 🎯 最佳实践

### 1. 组件设计
- 使用语义化颜色变量而不是硬编码颜色
- 为每个主题测试组件的可读性和可用性
- 确保足够的对比度

### 2. 主题测试
```tsx
// 在开发时测试所有主题
const allThemes = ['classic', 'modern', 'warm', 'cool', 'rainbow'];

allThemes.forEach(theme => {
  // 测试每个主题下的组件表现
  setTheme(theme);
  // 进行UI测试
});
```

### 3. 性能优化
- 主题切换使用CSS变量，避免重新渲染
- 本地存储避免页面刷新时的主题丢失
- 防抖处理避免频繁的主题切换

### 4. 无障碍访问
- 确保所有主题都有足够的颜色对比度
- 提供键盘导航支持
- 添加适当的ARIA标签

## 🔧 自定义主题

### 添加新主题
1. 在 `globals.css` 中添加主题CSS变量：

```css
[data-theme="custom"] {
  --background: #your-bg-color;
  --foreground: #your-text-color;
  --primary: #your-primary-color;
  /* ... 定义所有必需的变量 */
}
```

2. 在 `useTheme.tsx` 中注册主题：

```tsx
export const themes: Record<Theme, ThemeConfig> = {
  // ... 现有主题
  custom: {
    name: 'custom',
    displayName: '自定义主题',
    description: '你的自定义风格',
    emoji: '🎨',
    colors: {
      primary: '#your-primary',
      background: '#your-bg',
      preview: ['#color1', '#color2', '#color3', '#color4'],
    },
  },
};
```

3. 更新TypeScript类型：

```tsx
export type Theme = 'classic' | 'modern' | 'warm' | 'cool' | 'rainbow' | 'custom';
```

### 主题变量映射
确保每个新主题都定义了所有必需的CSS变量，参考现有主题的完整变量列表。

## 🎮 交互功能

### 主题切换器特性
- **完整版**: 显示主题名称、描述和颜色预览
- **紧凑版**: 仅显示主题图标，节省空间
- **响应式**: 自适应不同屏幕尺寸
- **键盘支持**: 完整的键盘导航
- **平滑动画**: 打开/关闭动画效果

### 持久化存储
- 主题选择自动保存到 localStorage
- 页面刷新后保持选择的主题
- 支持跨标签页同步（可扩展）

## 🐛 常见问题

### Q: 主题切换后页面闪烁？
A: 确保在 `layout.tsx` 中正确包装了 `ThemeProvider`，并且CSS变量定义正确。

### Q: 新添加的颜色不生效？
A: 检查是否在 `@theme inline` 部分注册了对应的Tailwind颜色类。

### Q: 主题选择不持久化？
A: 确保在客户端环境中使用，检查localStorage权限。

### Q: 某些颜色在特定主题下不可见？
A: 检查颜色对比度，确保前景色和背景色有足够的对比。

## 📈 扩展建议

1. **动态主题**: 支持用户自定义颜色
2. **主题商店**: 在线下载和分享主题
3. **自动主题**: 根据时间或内容自动切换
4. **主题预览**: 实时预览主题效果
5. **导入导出**: 支持主题配置的导入导出

## 📚 相关资源

- [Tailwind CSS 文档](https://tailwindcss.com/)
- [CSS 自定义属性](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [React Context 指南](https://react.dev/reference/react/createContext)
- [无障碍设计指南](https://www.w3.org/WAI/WCAG21/quickref/)
