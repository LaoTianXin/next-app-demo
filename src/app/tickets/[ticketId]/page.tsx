import Link from "next/link";

import { Placeholder } from "@/components/Placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import { TicketCard } from "@/features/ticket/component";
import { ticketsPath } from "@/paths";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

export default async function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = await params;
  const ticket = initialTickets.find(
    (ticket) => ticket.id === parseInt(ticketId)
  );
  const NotFound = (
    <Placeholder
      title="工单不存在"
      button={
        <Button variant="outline" asChild>
          <Link href={ticketsPath()}>返回工单列表</Link>
        </Button>
      }
    />
  );
  if (!ticket) return NotFound;
  return (
    <div className="">
      <TicketCard ticket={ticket} index={0} isDetail />
    </div>
  );
}
