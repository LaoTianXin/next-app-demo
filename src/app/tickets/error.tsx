"use client";
import Link from "next/link";

import { Placeholder } from "@/components/Placeholder";
import { Button } from "@/components/ui/button";
import { homePath } from "@/paths";

export default function TicketsError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <Placeholder
      title={error.message || "加载工单失败"}
      button={
        <Button variant="outline" asChild>
          <Link href={homePath()}>返回首页</Link>
        </Button>
      }
    />
  );
}
