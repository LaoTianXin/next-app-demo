import Link from "next/link";
import { initialTickets } from "../../data";

export default function TicketsPage() {
  return (
    <div className="flex flex-col gap-4">
      {initialTickets.map((ticket) => (
        <Link
          className="text-blue-500 hover:text-blue-700"
          href={`/tickets/${ticket.id}`}
          key={ticket.id}
        >
          {ticket.title}
        </Link>
      ))}
    </div>
  );
}
