import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const glassButtonVariants = cva(
    "relative isolate cursor-pointer rounded-full transition-all",
    {
        variants: {
            size: {
                default: "text-base font-medium",
                sm: "text-sm font-medium",
                lg: "text-lg font-medium",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            size: "default",
        },
    }
);

const glassButtonTextVariants = cva(
    "glass-button-text relative block select-none tracking-tighter",
    {
        variants: {
            size: {
                default: "px-6 py-3.5",
                sm: "px-5 py-2.5",
                lg: "px-8 py-4",
                icon: "flex h-10 w-10 items-center justify-center",
            },
        },
        defaultVariants: {
            size: "default",
        },
    }
);

export interface GlassButtonProps
    extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof glassButtonVariants> {
    contentClassName?: string;
}

const GlassButton = React.forwardRef<HTMLSpanElement, GlassButtonProps>(
    ({ className, children, size, contentClassName, ...props }, ref) => {
        return (
            <div
                className={cn(
                    "glass-button-wrap group cursor-pointer rounded-full",
                    className
                )}
            >
                <span
                    className={cn("glass-button", glassButtonVariants({ size }))}
                    ref={ref}
                    {...props}
                >
                    <span
                        className={cn(
                            glassButtonTextVariants({ size }),
                            contentClassName
                        )}
                    >
                        {children}
                    </span>
                </span>
                <div className="glass-button-shadow rounded-full"></div>
            </div>
        );
    }
);
GlassButton.displayName = "GlassButton";

export { GlassButton, glassButtonVariants };
