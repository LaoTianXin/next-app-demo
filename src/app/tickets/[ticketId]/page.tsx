import { notFound } from "next/navigation";

import { TicketCard } from "@/features/ticket/component";
import { getTicket } from "@/features/ticket/queries/get-ticket";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

export default async function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);

  if (!ticket) return notFound();
  return (
    <div className="">
      <TicketCard ticket={ticket} index={0} isDetail />
    </div>
  );
}
