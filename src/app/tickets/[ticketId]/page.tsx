import { initialTickets } from "@/data";

type TicketPageProps = {
  params: {
    ticketId: string;
  };
};

const TICKET_STATUS_ICON = {
  OPEN: "🟢",
  IN_PROGRESS: "🟡",
  CLOSED: "🔴",
};

export default function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = params;
  const ticket = initialTickets.find(
    (ticket) => ticket.id === parseInt(ticketId)
  );
  if (!ticket) return <div>Ticket not found</div>;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold">
          {TICKET_STATUS_ICON[ticket.status]}
        </span>
        <span className="text-2xl font-bold">{ticket.status}</span>
      </div>
      <h1 className="text-2xl font-bold">{ticket.title}</h1>
      <p className="text-gray-500">{ticket.description}</p>
    </div>
  );
}
