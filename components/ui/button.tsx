import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-bold uppercase tracking-widest ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cmh-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-cmh-mahogany text-cmh-cream hover:bg-cmh-midnight shadow-lg",
        gold: "bg-cmh-gold text-cmh-mahogany hover:bg-white hover:scale-105 shadow-md",
        outline:
          "border border-cmh-mahogany/30 bg-transparent text-cmh-mahogany hover:border-cmh-gold hover:text-cmh-gold",
        ghost: "hover:bg-cmh-mahogany/5 hover:text-cmh-gold",
        link: "text-cmh-mahogany underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-sm px-3",
        lg: "h-14 rounded-sm px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }