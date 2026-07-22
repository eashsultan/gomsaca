import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export function Card({ className, hover, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white border border-[var(--border)] p-6 transition-all duration-200",
        hover && "hover:shadow-lg hover:-translate-y-0.5",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
