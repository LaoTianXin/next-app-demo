export const initialTickets = [
  {
    id: 1,
    title: "系统登录异常处理",
    description:
      "用户反馈登录时偶尔出现超时错误，需要排查数据库连接池配置和网络延迟问题。",
    status: "OPEN" as const,
  },
  {
    id: 2,
    title: "数据导出功能优化",
    description:
      "当前数据导出速度较慢，需要优化SQL查询性能并增加进度提示功能。",
    status: "CLOSED" as const,
  },
  {
    id: 3,
    title: "新用户权限管理",
    description: "实现基于角色的权限控制系统，支持多级权限继承和动态权限配置。",
    status: "IN_PROGRESS" as const,
  },
  {
    id: 4,
    title: "邮件通知系统",
    description:
      "集成企业邮箱，实现重要事件的自动邮件通知功能，包括任务分配、状态变更等。",
    status: "OPEN" as const,
  },
  {
    id: 5,
    title: "移动端适配",
    description:
      "优化移动端界面响应式设计，确保在不同设备尺寸下的良好用户体验。",
    status: "IN_PROGRESS" as const,
  },
  {
    id: 6,
    title: "API文档更新",
    description: "更新所有接口文档，添加详细的请求参数说明和响应示例。",
    status: "CLOSED" as const,
  },
];
