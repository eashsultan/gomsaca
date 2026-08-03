import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  glow?: boolean
}

export function Card({ className, hover, glow, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "card rounded-2xl bg-white border border-[var(--border)] p-6 transition-all duration-300",
        hover && "card-hover cursor-default",
        glow && "hover:shadow-[var(--shadow-glow)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
