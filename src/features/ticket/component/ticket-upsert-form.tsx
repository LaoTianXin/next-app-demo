"use client";

import { Ticket } from "@prisma/client";
import { Loader2 } from "lucide-react";
import { useTransition } from "react";

import { useDialogContext } from "@/components/Dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { upsertTicket } from "../actions/upsert-ticket";

/**
 * 工单表单字段组件
 * 包含标题和描述两个字段，用于创建和编辑工单表单的复用
 */
export function TicketUpsertForm({
  ticket,
  onSuccess,
}: {
  ticket?: Ticket;
  onSuccess?: () => void; // 可选的成功回调
}) {
  const { id = "", title = "", description = "" } = ticket || {};
  const [isPending, startTransition] = useTransition();
  const dialogContext = useDialogContext(); // 可能为 null

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      try {
        await upsertTicket(id, formData);
        // 提交成功后的处理
        if (onSuccess) {
          // 优先使用外部传入的成功回调
          onSuccess();
        } else if (dialogContext?.closeDialog) {
          // 如果在 Dialog 内部且没有传入回调，则关闭弹窗
          dialogContext.closeDialog();
        }
        // 如果既不在 Dialog 内部也没有回调，则不做任何操作
      } catch (error) {
        // 提交失败时不关闭弹窗，让用户可以重试
        console.error("工单提交失败:", error);
        // 可以在这里添加错误提示 toast
      }
    });
  };

  return (
    <form className="flex flex-col gap-y-6" action={handleSubmit}>
      {/* 标题字段 */}
      <div className="space-y-2">
        <Label htmlFor="title">工单标题 *</Label>
        <Input
          id="title"
          name="title"
          defaultValue={title}
          type="text"
          placeholder="请输入工单标题"
          required
          maxLength={100}
          className="w-full"
        />
      </div>

      {/* 描述字段 */}
      <div className="space-y-2">
        <Label htmlFor="description">工单描述 *</Label>
        <Textarea
          defaultValue={description}
          id="description"
          name="description"
          placeholder="请详细描述工单内容..."
          required
          maxLength={1024}
          rows={4}
          className="w-full resize-none"
        />
      </div>
      <Button
        className="mx-auto flex items-center gap-2"
        type="submit"
        disabled={isPending}
      >
        {isPending ? <Loader2 size={12} className="animate-spin" /> : null}
        {id ? "更新工单" : "创建工单"}
      </Button>
    </form>
  );
}
