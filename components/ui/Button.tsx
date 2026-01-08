import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    // Separate motion-specific props if needed, but here we just need to ensure the spread is safe.
    // The error is caused by a conflict between standard button props and motion button props (like onAnimationStart).
    const { onAnimationStart, onDragStart, onDragEnd, onDrag, ...safeProps } = props as any;

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "inline-flex items-center justify-center rounded-2xl font-semibold transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-rich)] disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-gradient-to-br from-[var(--gold-rich)] via-[#c99c2e] to-[var(--gold-deep)] text-black shadow-[0_10px_30px_rgba(212,175,55,0.35),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(212,175,55,0.45)]":
              variant === "primary",
            "border border-white/25 bg-black/30 text-[var(--white-soft)] backdrop-blur-md hover:-translate-y-0.5 hover:bg-white/10":
              variant === "secondary",
            "border border-[var(--gold-rich)] text-[var(--gold-rich)] hover:bg-[var(--gold-rich)] hover:text-black":
              variant === "outline",
            "text-[var(--gold-champagne)] hover:text-[var(--gold-rich)] hover:bg-white/5":
              variant === "ghost",
            "px-4 py-2 text-sm": size === "sm",
            "px-8 py-4 text-base": size === "md",
            "px-10 py-5 text-lg": size === "lg",
          },
          className
        )}
        {...safeProps}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
