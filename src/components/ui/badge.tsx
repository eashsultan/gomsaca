import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-[var(--primary-bg)] text-[var(--primary)]",
        outline: "border border-[var(--border)] text-[var(--body-text)]",
        success: "bg-[var(--warm-bg)] text-[var(--warm)]",
        warning: "bg-[var(--accent-bg)] text-[var(--accent)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}
