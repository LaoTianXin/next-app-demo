export const homePath = () => "/";
export const ticketsPath = () => "/tickets";
export const ticketPath = (ticketId: string | number) =>
  `${ticketsPath()}/${ticketId}`;
export const themeTestPath = () => "/theme-test";

export const ticketEditPath = (ticketId: string | number) =>
  `${ticketPath(ticketId)}/edit`;
