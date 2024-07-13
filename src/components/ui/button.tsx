import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-md hover:shadow-lg",
  {
    variants: {
      variant: {
        default: "bg-primary-gradient text-black hover:text-blue-600 hover:bg-primary-100 hover:shadow-blue-300/50",
        destructive: "bg-danger-gradient text-black hover:bg-destructive/90 hover:shadow-destructive/50",
        warn: "bg-warning-gradient text-black hover:bg-warning/90 hover:shadow-amber-200/50",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:shadow-accent/50",
        secondary: "bg-secondary-gradient text-secondary-foreground hover:bg-secondary/90 hover:shadow-secondary/50",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:shadow-accent/50",
        link: "text-blue-500 underline-offset-4 hover:underline hover:text-blue-600",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
         responsive: "h-8 px-3 py-1 sm:h-9 sm:px-4 sm:py-2 lg:h-10 lg:px-6 lg:py-3",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
