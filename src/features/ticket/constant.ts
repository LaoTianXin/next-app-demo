import { CheckCircle, CircleDot, Clock } from "lucide-react";

// 工单状态图标映射
export const TICKET_STATUS_ICON = {
  OPEN: CircleDot,
  IN_PROGRESS: Clock,
  CLOSED: CheckCircle,
} as const;

// 工单状态文本映射
export const TICKET_STATUS_TEXT = {
  OPEN: "待处理",
  IN_PROGRESS: "进行中",
  CLOSED: "已关闭",
} as const;

// 工单状态样式映射
export const TICKET_STATUS_STYLE = {
  OPEN: "bg-success/20 text-success border-success/30",
  IN_PROGRESS: "bg-warning/20 text-warning border-warning/30",
  CLOSED: "bg-error/20 text-error border-error/30",
} as const;

// 动画方向配置 - 创建视觉上的动态效果
export const ANIMATION_DIRECTIONS = ["up", "down", "left", "right"] as const;

// 获取动画类名的工具函数
export const getTicketAnimationClass = (index: number) => {
  const direction = ANIMATION_DIRECTIONS[index % ANIMATION_DIRECTIONS.length];
  const delay = Math.min(index, 5); // 最多5个延迟级别
  return `ticket-animate-fade-in-${direction} ticket-delay-${delay}`;
};
