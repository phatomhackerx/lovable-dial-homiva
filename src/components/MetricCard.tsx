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
      "p-6 bg-gradient-card border-border shadow-card",
      className
    )}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-2">
            {title}
          </p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-bold text-foreground">
              {value}
            </h3>
            {change && (
              <span className={cn("text-sm font-medium", changeColor)}>
                {change}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
          <div className="text-primary">
            {icon}
          </div>
        </div>
      </div>
    </Card>
  )
}