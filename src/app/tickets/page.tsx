import { Heading } from "@/components/Heading";
import { initialTickets } from "@/data";
import { TicketList } from "@/features/ticket/component";

export default function TicketsPage() {
  return (
    <div className="w-full">
      {/* 页面标题 */}
      <Heading title="工单管理" description="管理和查看所有工单" />

      {/* 工单列表 */}
      <TicketList tickets={initialTickets} />
    </div>
  );
}
