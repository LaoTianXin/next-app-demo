"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { ticketPath, ticketsPath } from "@/paths";

export const upsertTicket = async (id: string = "", formData: FormData) => {
  // 获取表单数据
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  // 服务器端验证
  if (!title || title.trim().length === 0) {
    throw new Error("工单标题不能为空");
  }

  if (title.trim().length > 100) {
    throw new Error("工单标题不能超过100个字符");
  }

  if (!description || description.trim().length === 0) {
    throw new Error("工单描述不能为空");
  }

  if (description.trim().length > 1024) {
    throw new Error("工单描述不能超过1024个字符");
  }

  try {
    // 创建工单
    await prisma.ticket.upsert({
      where: {
        id,
      },
      update: {
        title: title.trim(),
        description: description.trim(),
      },
      create: {
        title: title.trim(),
        description: description.trim(),
      },
    });

    // 重新验证工单页面缓存
    revalidatePath(ticketsPath());
  } catch (error) {
    let errorMsg = "创建工单失败，请稍后重试";
    console.error("创建工单失败:", error);
    if (id) {
      errorMsg = "更新工单失败，请稍后重试";
    }
    throw new Error(errorMsg);
  }

  // 更新工单时跳转到详情页
  if (id) {
    redirect(ticketPath(id));
  }
  // 创建工单时不跳转，由前端组件控制关闭弹窗
};
