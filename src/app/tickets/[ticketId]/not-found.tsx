import { Placeholder } from "@/components/Placeholder";
import { Button } from "@/components/ui/button";
import { ticketsPath } from "@/paths";
import Link from "next/link";

export default function TicketNotFound() {
  return (
    <Placeholder
      title="工单不存在"
      button={
        <Button variant="outline" asChild>
          <Link href={ticketsPath()}>返回工单列表</Link>
        </Button>
      }
    />
  );
}
