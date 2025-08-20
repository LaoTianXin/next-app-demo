// 工单状态类型定义
export type TicketStatus = "OPEN" | "IN_PROGRESS" | "CLOSED";

// 工单数据类型定义
export interface Ticket {
  id: number;
  title: string;
  description: string;
  status: TicketStatus;
}
