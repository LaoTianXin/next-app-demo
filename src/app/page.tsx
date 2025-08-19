import Link from "next/link";

import { ticketsPath } from "@/paths";

const HomePage = () => {
  return (
    <div className="text-3xl font-bold underline">
      <Link className="text-white hover:text-blue-700" href={ticketsPath()}>
        Tickets
      </Link>
    </div>
  );
};

export default HomePage;
