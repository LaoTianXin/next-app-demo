# Tailwind CSS v4 主题系统使用指南

这个项目使用了Tailwind CSS v4的最新特性，配置了完整的设计系统和主题设置。

## 🎨 颜色系统

### 品牌色系
- `bg-primary` / `text-primary` - 主要品牌色 (蓝色)
- `bg-secondary` / `text-secondary` - 次要品牌色 (灰色)
- `bg-accent` / `text-accent` - 强调色 (紫色)

### 状态色系
- `bg-success` / `text-success` - 成功状态 (绿色)
- `bg-warning` / `text-warning` - 警告状态 (黄色) 
- `bg-error` / `text-error` - 错误状态 (红色)
- `bg-info` / `text-info` - 信息状态 (青色)

### 语义色系
- `bg-background` / `text-foreground` - 主要背景和文字
- `bg-muted` / `text-muted-foreground` - 次要背景和文字
- `bg-card` / `text-card-foreground` - 卡片背景和文字
- `border-border` - 边框颜色
- `bg-input` - 输入框背景

## 🌓 明暗主题

项目支持自动跟随系统的明暗主题切换：
- 所有颜色会根据系统设置自动调整
- 深色模式下颜色饱和度和对比度经过专门优化
- 无需额外配置，开箱即用

## 🎭 动画系统

### 预设动画类
- `animate-fade-in` - 淡入动画
- `animate-fade-out` - 淡出动画  
- `animate-slide-in-bottom` - 从底部滑入
- `animate-slide-in-top` - 从顶部滑入
- `animate-scale-in` - 缩放进入动画
- `animate-spin` - 旋转动画（加载器）

### 交互动画
- `interactive` - 添加悬停和点击效果的通用类
- 自动包含悬停上升、阴影变化等效果

### 过渡效果
- 所有颜色变化自动包含150ms过渡
- 变换动画使用300ms缓动
- 透明度变化使用300ms过渡

## 🧰 实用工具

### 文本截断
- `line-clamp-1` - 单行截断
- `line-clamp-2` - 两行截断  
- `line-clamp-3` - 三行截断

### 阴影系统
- `shadow-sm` - 细微阴影
- `shadow` - 标准阴影
- `shadow-md` - 中等阴影
- `shadow-lg` - 大阴影
- `shadow-xl` - 超大阴影

### 圆角系统
- `rounded-sm` - 4px
- `rounded` - 6px (默认)
- `rounded-md` - 8px
- `rounded-lg` - 12px
- `rounded-xl` - 16px

## 📋 使用示例

### 基础卡片组件
```tsx
<div className="bg-card text-card-foreground p-6 rounded-lg border border-border">
  <h3 className="text-lg font-semibold mb-3">卡片标题</h3>
  <p className="text-muted-foreground">卡片内容</p>
</div>
```

### 按钮组件
```tsx
{/* 主要按钮 */}
<button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
  主要操作
</button>

{/* 次要按钮 */}
<button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
  次要操作
</button>
```

### 状态指示器
```tsx
{/* 成功状态 */}
<span className="bg-success/20 text-success px-3 py-1 rounded-full text-sm border border-success/30">
  已完成
</span>

{/* 警告状态 */}
<span className="bg-warning/20 text-warning px-3 py-1 rounded-full text-sm border border-warning/30">
  待处理
</span>
```

### 交互式元素
```tsx
<div className="bg-card border border-border rounded-lg p-4 interactive">
  <div className="font-medium">可点击卡片</div>
  <div className="text-muted-foreground text-sm">悬停查看效果</div>
</div>
```

### 动画元素
```tsx
{/* 页面进入动画 */}
<div className="animate-fade-in">
  <h1 className="text-3xl font-bold text-foreground">页面标题</h1>
</div>

{/* 列表项动画 */}
<div className="animate-slide-in-bottom">
  <div className="bg-card p-4 rounded-lg">列表项内容</div>
</div>
```

### 文本截断
```tsx
{/* 标题截断 */}
<h3 className="text-xl font-semibold truncate">很长的标题文本</h3>

{/* 描述截断 */}
<p className="text-muted-foreground line-clamp-2">
  很长的描述文本，会被截断为两行显示...
</p>
```

## 🔧 自定义扩展

如需添加新的颜色或调整现有颜色，请编辑 `src/app/globals.css` 文件：

1. 在`:root`部分添加新的CSS变量
2. 在深色主题部分添加对应的深色版本
3. 在`@theme inline`部分注册新的Tailwind颜色类

例如添加新的品牌色：
```css
:root {
  --brand-new: #ff6b6b;
  --brand-new-foreground: #ffffff;
}

@media (prefers-color-scheme: dark) {
  :root {
    --brand-new: #ff8e8e;
    --brand-new-foreground: #2d1515;
  }
}

@theme inline {
  --color-brand-new: var(--brand-new);
  --color-brand-new-foreground: var(--brand-new-foreground);
}
```

然后就可以使用 `bg-brand-new` 和 `text-brand-new-foreground` 类了。

## 🎯 最佳实践

1. **语义化使用颜色** - 优先使用语义色彩（如 `text-foreground`）而不是具体颜色
2. **保持一致性** - 相同类型的元素使用相同的颜色和动画
3. **适度使用动画** - 避免过度使用动画影响性能
4. **测试明暗主题** - 确保两种主题下都有良好的对比度和可读性
5. **渐进增强** - 动画和效果应该是渐进增强，不影响基础功能

## 📖 参考资源

- [Tailwind CSS v4 文档](https://tailwindcss.com/)
- [CSS自定义属性 (CSS变量)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [媒体查询 prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
