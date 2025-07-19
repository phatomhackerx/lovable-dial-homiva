import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface FlowNode {
  id: string
  title: string
  type: "trigger" | "action" | "condition" | "output"
  status: "active" | "inactive" | "error"
  position: { x: number; y: number }
}

interface FlowConnection {
  from: string
  to: string
  label?: string
}

interface FlowChartProps {
  nodes: FlowNode[]
  connections: FlowConnection[]
  className?: string
}

export function FlowChart({ nodes, connections, className }: FlowChartProps) {
  const getNodeColor = (type: FlowNode['type'], status: FlowNode['status']) => {
    if (status === "error") return "bg-destructive/10 border-destructive text-destructive"
    if (status === "inactive") return "bg-muted/20 border-muted text-muted-foreground"
    
    switch (type) {
      case "trigger":
        return "bg-primary/10 border-primary text-primary"
      case "action": 
        return "bg-success/10 border-success text-success"
      case "condition":
        return "bg-warning/10 border-warning text-warning"
      case "output":
        return "bg-info/10 border-info text-info"
      default:
        return "bg-muted/10 border-muted text-muted-foreground"
    }
  }

  const getStatusIcon = (status: FlowNode['status']) => {
    switch (status) {
      case "active":
        return <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
      case "error":
        return <div className="w-2 h-2 rounded-full bg-destructive" />
      default:
        return <div className="w-2 h-2 rounded-full bg-muted" />
    }
  }

  return (
    <Card className={cn(
      "p-6 bg-gradient-card border-border shadow-card",
      className
    )}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Automação de Scripts
          </h3>
          <p className="text-sm text-muted-foreground">
            Fluxo de trabalho configurado
          </p>
        </div>
        <Button size="sm">
          Editar Fluxo
        </Button>
      </div>

      <div className="relative min-h-[400px] bg-muted/5 rounded-lg p-4 overflow-hidden">
        {/* Render connections first */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {connections.map((connection, index) => {
            const fromNode = nodes.find(n => n.id === connection.from)
            const toNode = nodes.find(n => n.id === connection.to)
            
            if (!fromNode || !toNode) return null

            const startX = fromNode.position.x + 100
            const startY = fromNode.position.y + 25
            const endX = toNode.position.x
            const endY = toNode.position.y + 25
            
            const midX = (startX + endX) / 2
            
            return (
              <g key={index}>
                <path
                  d={`M ${startX} ${startY} Q ${midX} ${startY} ${midX} ${(startY + endY) / 2} Q ${midX} ${endY} ${endX} ${endY}`}
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="4 4"
                  className="animate-pulse"
                />
                <circle
                  cx={endX}
                  cy={endY}
                  r="4"
                  fill="hsl(var(--primary))"
                />
              </g>
            )
          })}
        </svg>

        {/* Render nodes */}
        {nodes.map((node) => (
          <div
            key={node.id}
            className={cn(
              "absolute p-4 rounded-lg border-2 min-w-[200px] cursor-pointer hover:shadow-lg transition-all",
              getNodeColor(node.type, node.status)
            )}
            style={{
              left: node.position.x,
              top: node.position.y,
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              {getStatusIcon(node.status)}
              <Badge variant="outline" className="text-xs">
                {node.type}
              </Badge>
            </div>
            <h4 className="font-medium text-sm">{node.title}</h4>
            
            {/* Connection points */}
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-current opacity-50" />
            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-current opacity-50" />
          </div>
        ))}
      </div>

      {/* Flow Statistics */}
      <div className="grid grid-cols-4 gap-4 mt-6 pt-4 border-t border-border">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">5</div>
          <div className="text-xs text-muted-foreground">Nós Ativos</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-success">98.5%</div>
          <div className="text-xs text-muted-foreground">Taxa de Sucesso</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-warning">142</div>
          <div className="text-xs text-muted-foreground">Execuções Hoje</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-info">2.3s</div>
          <div className="text-xs text-muted-foreground">Tempo Médio</div>
        </div>
      </div>
    </Card>
  )
}