import { ReactNode } from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface MetricCardProps {
  title: string
  value: string | number
  change?: string
  changeType?: "positive" | "negative" | "neutral"
  icon: ReactNode
  className?: string
}

export function MetricCard({ 
  title, 
  value, 
  change, 
  changeType = "neutral", 
  icon, 
  className 
}: MetricCardProps) {
  const changeColor = {
    positive: "text-success",
    negative: "text-destructive", 
    neutral: "text-muted-foreground"
  }[changeType]

  return (
    <Card className={cn(
      "p-8",
      className
    )}>
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
          <div className="text-foreground">
            {icon}
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">
          {title}
        </p>
        <div className="flex items-baseline gap-3">
          <h3 className="text-3xl font-bold text-foreground tracking-tight">
            {value}
          </h3>
          {change && (
            <span className={cn("text-sm font-semibold", changeColor)}>
              {change}
            </span>
          )}
        </div>
      </div>
    </Card>
  )
}