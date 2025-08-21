import { getTickets } from "../queries/get-tickets";
import { TicketCard } from "./ticket-card";

export async function TicketList() {
  const tickets = await getTickets();

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
