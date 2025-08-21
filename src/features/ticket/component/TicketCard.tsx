import clsx from "clsx";
import { SquarePen } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ticketPath } from "@/paths";

import {
  getTicketAnimationClass,
  TICKET_STATUS_ICON,
  TICKET_STATUS_STYLE,
  TICKET_STATUS_TEXT,
} from "../constant";
import { Ticket } from "../type";

interface TicketCardProps {
  /** 工单数据 */
  ticket: Ticket;
  /** 工单在列表中的索引，用于动画延迟 */
  index: number;
  isDetail?: boolean;
}

/**
 * 工单卡片组件
 *
 * 功能特性：
 * - 展示工单基本信息（标题、描述、状态、编号）
 * - 状态标签带图标和颜色区分
 * - 鼠标悬停交互效果
 * - 根据索引的动画延迟效果
 * - 已关闭工单的视觉区分（删除线）
 */
export function TicketCard({ ticket, index, isDetail }: TicketCardProps) {
  // 获取状态对应的图标组件
  const StatusIcon = TICKET_STATUS_ICON[ticket.status];

  const DetailButton = () => (
    <Link
      href={ticketPath(ticket.id)}
      className="group block"
      aria-label={`查看工单 #${ticket.id}: ${ticket.title}`}
    >
      <Button
        className="cursor-pointer hover:bg-primary/10 hover:text-primary"
        variant="outline"
        size="icon"
      >
        <SquarePen />
      </Button>
    </Link>
  );

  return (
    <div
      className={`flex max-w-2xl gap-x-1 mx-auto ${getTicketAnimationClass(
        index
      )} ticket-interactive hover:shadow-md transition-all duration-200`}
    >
      <Card className={`flex-1`}>
        <CardHeader className="pb-4">
          {/* 工单状态标签和编号 */}
          <div className="flex items-center gap-3 mb-2">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${
                TICKET_STATUS_STYLE[ticket.status]
              }`}
            >
              <span className="mr-2">
                <StatusIcon className="w-4 h-4" />
              </span>
              {TICKET_STATUS_TEXT[ticket.status]}
            </span>
            <span className="text-muted-foreground text-sm">#{ticket.id}</span>
          </div>

          {/* 工单标题 */}
          <CardTitle className="text-xl group-hover:text-primary transition-colors truncate">
            {ticket.title}
          </CardTitle>

          {/* 工单描述 */}
          <CardDescription
            className={clsx("line-clamp-2", {
              "line-through opacity-60": ticket.status === "CLOSED",
              "line-clamp-none": isDetail,
            })}
          >
            {ticket.description}
          </CardDescription>
        </CardHeader>
      </Card>
      <div className="flex flex-col gap-y-1">
        {isDetail ? null : <DetailButton />}
      </div>
    </div>
  );
}
