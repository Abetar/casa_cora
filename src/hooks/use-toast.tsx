"use client";
import * as React from "react";

/** Variantes disponibles */
type Variant = "success" | "destructive" | "info";

type ToastProps = {
  title?: string;
  description?: string;
  variant?: Variant;
  durationMs?: number; // por defecto 2500
};

type ToastContextType = { toast: (t: ToastProps) => void };

const ToastContext = React.createContext<ToastContextType>({ toast: () => {} });
export const useToast = () => React.useContext(ToastContext);

// Colores fijos (sin dark/light)
const BRAND = "#1B3D2F"; // verde botánico
const COLORS: Record<Variant, { bg: string; fg: string; border: string }> = {
  success: { bg: "#1B3D2F", fg: "#FFFFFF", border: "rgba(255,255,255,0.22)" },
  destructive: { bg: "#9B1C1C", fg: "#FFFFFF", border: "rgba(255,255,255,0.2)" },
  info: { bg: "#2F4858", fg: "#FFFFFF", border: "rgba(255,255,255,0.18)" },
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<
    Array<ToastProps & { id: string }>
  >([]);

  const toast = (t: ToastProps) => {
    const id = crypto.randomUUID();
    const item: ToastProps & { id: string } = {
      variant: "info",
      durationMs: 2500,
      ...t,
      id,
    };
    setToasts((prev) => [...prev, item]);
    // autocierre
    setTimeout(() => {
      setToasts((prev) => prev.filter((x) => x.id !== id));
    }, item.durationMs);
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {/* contenedor de toasts */}
      <div
        className="pointer-events-none fixed bottom-5 right-5 z-50 flex flex-col gap-3"
        aria-live="polite"
        aria-atomic="true"
      >
        {toasts.map((t) => {
          const c = COLORS[t.variant || "info"];
          return (
            <div
              key={t.id}
              className="pointer-events-auto w-[300px] rounded-xl px-4 py-3 shadow-xl"
              style={{
                background: c.bg,
                color: c.fg,
                border: `1px solid ${c.border}`,
              }}
              role="status"
            >
              {t.title && (
                <strong className="block text-sm tracking-tight">
                  {t.title}
                </strong>
              )}
              {t.description && (
                <p className="mt-1 text-[13px] leading-snug opacity-95">
                  {t.description}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}
