import { prisma } from "@/lib/prisma";

export const tickets = [
  {
    title: "系统登录异常处理",
    description:
      "用户反馈登录时偶尔出现超时错误，需要排查数据库连接池配置和网络延迟问题。",
    status: "OPEN" as const,
  },
  {
    title: "数据导出功能优化",
    description:
      "当前数据导出速度较慢，需要优化SQL查询性能并增加进度提示功能。",
    status: "CLOSED" as const,
  },
  {
    title: "新用户权限管理",
    description: "实现基于角色的权限控制系统，支持多级权限继承和动态权限配置。",
    status: "IN_PROGRESS" as const,
  },
  {
    title: "邮件通知系统",
    description:
      "集成企业邮箱，实现重要事件的自动邮件通知功能，包括任务分配、状态变更等。",
    status: "OPEN" as const,
  },
  {
    title: "移动端适配",
    description:
      "优化移动端界面响应式设计，确保在不同设备尺寸下的良好用户体验。",
    status: "IN_PROGRESS" as const,
  },
  {
    title: "API文档更新",
    description: "更新所有接口文档，添加详细的请求参数说明和响应示例。",
    status: "CLOSED" as const,
  },
];

const seed = async () => {
  const t0 = performance.now();
  console.log("Seeding tickets...");
  await prisma.ticket.deleteMany();

  await prisma.ticket.createMany({
    data: tickets,
  });
  const t1 = performance.now();
  console.log(`Seeded ${tickets.length} tickets in ${t1 - t0}ms`);
};

seed();
