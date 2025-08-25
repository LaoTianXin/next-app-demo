"use client";

import React, { createContext, useContext, useState } from "react";

import {
  Dialog as DialogPrimitive,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Dialog Context 类型定义
interface DialogContextType {
  closeDialog: () => void;
}

// 创建 Dialog Context
const DialogContext = createContext<DialogContextType | null>(null);

// useDialogContext hook - 安全版本
export const useDialogContext = () => {
  const context = useContext(DialogContext);
  return context; // 返回 null 如果不在 Dialog 内部，不抛出错误
};

// 严格版本的 hook - 必须在 Dialog 内部使用
export const useDialogContextStrict = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialogContextStrict 必须在 Dialog 组件内部使用");
  }
  return context;
};

// Dialog 组件参数类型
interface DialogProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
}

export const Dialog = ({
  title,
  description,
  children,
  footer,
  trigger,
  open: controlledOpen,
  onOpenChange,
  defaultOpen = false,
}: DialogProps) => {
  // 内部状态管理
  const [internalOpen, setInternalOpen] = useState(defaultOpen);

  // 受控 vs 非受控模式
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  // 处理状态变化
  const handleOpenChange = (newOpen: boolean) => {
    if (!isControlled) {
      setInternalOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  // 关闭弹窗方法
  const closeDialog = () => {
    handleOpenChange(false);
  };

  // Context 值
  const contextValue: DialogContextType = {
    closeDialog,
  };

  return (
    <DialogPrimitive open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogContext.Provider value={contextValue}>
          <DialogHeader>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
          {children}
          {footer && (
            <DialogFooter className="flex gap-3 sm:justify-end">
              {footer}
            </DialogFooter>
          )}
        </DialogContext.Provider>
      </DialogContent>
    </DialogPrimitive>
  );
};
