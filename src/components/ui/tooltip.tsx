import * as React from "react";
import { cn } from "@/lib/utils";

interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  position?: "top" | "right" | "bottom" | "left";
  delay?: number;
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ className, children, content, position = "top", delay = 300, ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const [timeoutId, setTimeoutId] = React.useState<NodeJS.Timeout | null>(null);

    const showTooltip = () => {
      const id = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      setTimeoutId(id);
    };

    const hideTooltip = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        setTimeoutId(null);
      }
      setIsVisible(false);
    };

    const positionClasses = {
      top: "bottom-full left-1/2 -translate-x-1/2 -translate-y-2 mb-2",
      right: "left-full top-1/2 translate-x-2 -translate-y-1/2 ml-2",
      bottom: "top-full left-1/2 -translate-x-1/2 translate-y-2 mt-2",
      left: "right-full top-1/2 -translate-x-2 -translate-y-1/2 mr-2",
    };

    return (
      <div
        ref={ref}
        className={cn("relative inline-block", className)}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        {...props}
      >
        {children}
        {isVisible && (
          <div
            className={cn(
              "absolute z-50 px-2 py-1 text-xs font-medium text-white bg-black/80 rounded pointer-events-none whitespace-nowrap",
              positionClasses[position]
            )}
          >
            {content}
            <div
              className={cn(
                "absolute w-2 h-2 bg-black/80 rotate-45",
                position === "top" && "bottom-0 left-1/2 -translate-x-1/2 translate-y-1",
                position === "right" && "left-0 top-1/2 -translate-y-1/2 -translate-x-1",
                position === "bottom" && "top-0 left-1/2 -translate-x-1/2 -translate-y-1",
                position === "left" && "right-0 top-1/2 -translate-y-1/2 translate-x-1"
              )}
            />
          </div>
        )}
      </div>
    );
  }
);
Tooltip.displayName = "Tooltip";

export { Tooltip };