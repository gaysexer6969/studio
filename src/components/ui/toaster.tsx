"use client"; // Ensure this runs on the client

import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import React, { useEffect, useState } from 'react'; // Import useEffect and useState

export function Toaster() {
  const { toasts } = useToast();
  const [mounted, setMounted] = useState(false); // State to track mounting

  // Ensure this runs only on the client after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
     // Render nothing or a placeholder on the server/during hydration
    return null;
  }


  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
