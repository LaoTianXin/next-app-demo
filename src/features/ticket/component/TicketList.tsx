import { Ticket } from "../type";
import { TicketCard } from "./TicketCard";

interface TicketListProps {
  /** 工单数据列表 */
  tickets: Ticket[];
}

/**
 * 工单列表组件
 *
 * 功能特性：
 * - 渲染工单卡片列表
 * - 空状态展示
 * - 响应式布局（最大宽度限制和居中）
 * - 统一的间距和动画
 */
export function TicketList({ tickets }: TicketListProps) {
  return (
    <div className="flex justify-center mt-10">
      <div className="w-full px-4">
        {/* 工单列表 */}
        {tickets.length > 0 ? (
          <div className="space-y-4">
            {tickets.map((ticket, index) => (
              <TicketCard key={ticket.id} ticket={ticket} index={index} />
            ))}
          </div>
        ) : (
          /* 空状态提示 */
          <div className="text-center py-12 animate-fade-in">
            <div className="text-muted-foreground text-6xl mb-4">📋</div>
            <h3 className="text-xl font-medium text-foreground mb-2">
              暂无工单
            </h3>
            <p className="text-muted-foreground">还没有创建任何工单</p>
          </div>
        )}
      </div>
    </div>
  );
}
