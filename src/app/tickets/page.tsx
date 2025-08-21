import { Suspense } from "react";

import { Heading } from "@/components/Heading";
import { TicketList } from "@/features/ticket/component";
import { Spinner } from "@/components/Spinner";

export default function TicketsPage() {
  return (
    <div className="w-full flex-1 flex flex-col">
      {/* 页面标题 */}
      <Heading title="工单管理" description="管理和查看所有工单" />
      {/* 工单列表 */}
      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
}
