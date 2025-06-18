import * as React from "react";
import { cn } from "@/lib/utils";

export interface ToggleProps extends React.HTMLAttributes<HTMLDivElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  variant?: "default" | "cosmic";
}

const Toggle = React.forwardRef<HTMLDivElement, ToggleProps>(
  (
    {
      className,
      checked = false,
      onCheckedChange,
      disabled = false,
      variant = "default",
      ...props
    },
    ref
  ) => {
    const handleClick = () => {
      if (!disabled && onCheckedChange) {
        onCheckedChange(!checked);
      }
    };

    return (
      <div
        ref={ref}
        role="switch"
        aria-checked={checked}
        data-state={checked ? "checked" : "unchecked"}
        onClick={handleClick}
        className={cn(
          "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          checked
            ? variant === "cosmic"
              ? "cosmic-gradient"
              : "bg-primary"
            : "bg-muted",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        {...props}
      >
        <span
          className={cn(
            "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
            checked ? "translate-x-6" : "translate-x-1"
          )}
        />
      </div>
    );
  }
);
Toggle.displayName = "Toggle";

export { Toggle };
