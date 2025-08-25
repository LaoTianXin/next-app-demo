import { Suspense } from "react";

import { Dialog } from "@/components/Dialog";
import { Heading } from "@/components/Heading";
import { Spinner } from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { TicketList } from "@/features/ticket/component";
import { TicketUpsertForm } from "@/features/ticket/component/ticket-upsert-form";

export default function TicketsPage() {
  return (
    <div className="w-full flex-1 flex flex-col">
      {/* 页面标题 */}

      <Heading
        title="工单管理"
        description="管理和查看所有工单"
        rightSlot={
          <Dialog
            title="创建工单"
            description="创建一个新的工单"
            trigger={
              <Button variant="outline" size="lg">
                创建工单
              </Button>
            }
          >
            <TicketUpsertForm />
          </Dialog>
        }
      />
      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
}
