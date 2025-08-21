"use client";
import { Placeholder } from "@/components/Placeholder";
import { Button } from "@/components/ui/button";
import { homePath } from "@/paths";
import Link from "next/link";

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
