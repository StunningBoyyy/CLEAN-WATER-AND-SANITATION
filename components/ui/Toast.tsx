"use client";

import React, { useEffect } from "react";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
}

export function Toast({
  message,
  type = "success",
  isOpen,
  onClose,
  duration = 4000,
}: ToastProps) {
  useEffect(() => {
    if (isOpen && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-sdggreen flex-shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />,
    info: <Info className="w-5 h-5 text-water flex-shrink-0" />,
  };

  const bgStyles = {
    success: "bg-white dark:bg-navy-800 border-sdggreen/40 text-navy dark:text-white",
    error: "bg-white dark:bg-navy-800 border-red-500/40 text-navy dark:text-white",
    info: "bg-white dark:bg-navy-800 border-water/40 text-navy dark:text-white",
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl border shadow-lg max-w-sm transition-all duration-300",
        bgStyles[type]
      )}
    >
      {icons[type]}
      <p className="text-sm font-medium pr-2">{message}</p>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close notification"
        className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 ml-auto"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
