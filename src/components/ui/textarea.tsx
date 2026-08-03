import { forwardRef } from "react"
import { cn } from "@/lib/utils"

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--dark-text)] placeholder:text-[var(--muted)] focus-visible:outline-2 focus-visible:outline-[var(--primary)] focus-visible:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-50 transition-colors resize-y",
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Textarea.displayName = "Textarea"

export { Textarea }
