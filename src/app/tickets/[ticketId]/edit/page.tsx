import { notFound } from "next/navigation";

import { Card } from "@/components/Card";
import { TicketUpsertForm } from "@/features/ticket/component/ticket-upsert-form";
import { getTicket } from "@/features/ticket/queries/get-ticket";

export default async function TicketEditPage({
  params,
}: {
  params: Promise<{ ticketId: string }>;
}) {
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);
  if (!ticket) return notFound();
  return (
    <Card
      className="max-w-2xl mx-auto w-full"
      title="编辑工单"
      description="编辑工单的详细信息"
    >
      <TicketUpsertForm ticket={ticket} />
    </Card>
  );
}
