import { initialTickets } from "../../../data";

type TicketPageProps = {
  params: {
    ticketId: string;
  };
};

export default function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = params;
  const ticket = initialTickets.find(
    (ticket) => ticket.id === parseInt(ticketId)
  );
  if (!ticket) return <div>Ticket not found</div>;
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{ticket.title}</h1>
      <p className="text-gray-500">{ticket.description}</p>
    </div>
  );
}
