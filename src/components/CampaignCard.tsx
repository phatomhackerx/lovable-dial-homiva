import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

interface CampaignCardProps {
  title: string
  subtitle: string
  progress: number
  itemsInStock: number
  demand: number
  status: "active" | "awaiting" | "completed"
  color: "primary" | "secondary" | "purple" | "orange"
  className?: string
}

export function CampaignCard({ 
  title, 
  subtitle, 
  progress, 
  itemsInStock, 
  demand, 
  status,
  color,
  className 
}: CampaignCardProps) {
  const colorClasses = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground", 
    purple: "bg-gradient-to-r from-purple-500 to-purple-600 text-white",
    orange: "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
  }

  const statusColors = {
    active: "bg-success text-success-foreground",
    awaiting: "bg-warning text-warning-foreground",
    completed: "bg-muted text-muted-foreground"
  }

  return (
    <Card className={cn(
      "p-6 bg-gradient-card border-border shadow-card relative overflow-hidden",
      className
    )}>
      <div className={cn(
        "absolute top-0 left-0 w-full h-2",
        colorClasses[color]
      )} />
      
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg font-semibold text-foreground">{title}</span>
            <Badge variant="outline" className={statusColors[status]}>
              {status === "active" && "Ativa"}
              {status === "awaiting" && "Aguardando"}  
              {status === "completed" && "Concluída"}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Progresso</span>
          <span className="font-medium text-foreground">{progress}%</span>
        </div>
        
        <Progress value={progress} className="h-2" />

        <div className="grid grid-cols-2 gap-4 pt-2">
          <div>
            <p className="text-2xl font-bold text-foreground">{itemsInStock}</p>
            <p className="text-xs text-muted-foreground">Leads ativos</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">{demand}</p>
            <p className="text-xs text-muted-foreground">Demanda</p>
          </div>
        </div>
      </div>
    </Card>
  )
}