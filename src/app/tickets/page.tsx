import Link from "next/link";

import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";

export default function TicketsPage() {
  return (
    <div className="flex flex-col gap-4">
      {initialTickets.map((ticket) => (
        <Link
          className="text-white hover:text-blue-700"
          href={ticketPath(ticket.id)}
          key={ticket.id}
        >
          {ticket.title}
        </Link>
      ))}
    </div>
  );
}
