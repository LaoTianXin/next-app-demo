import { initialTickets } from "@/data";

import { Ticket } from "../type";

export const getTicket = async (id: number): Promise<Ticket | null> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const ticket = initialTickets.find((ticket) => ticket.id === id);
  return Promise.resolve(ticket ?? null);
};
