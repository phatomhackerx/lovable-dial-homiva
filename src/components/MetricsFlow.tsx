import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface MetricsFlowProps {
  className?: string
}

export function MetricsFlow({ className }: MetricsFlowProps) {
  return (
    <Card className={cn(
      "p-6 bg-gradient-card border-border shadow-card",
      className
    )}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">
          Fluxo de Processamento
        </h3>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
          <span className="text-sm text-muted-foreground">Em tempo real</span>
        </div>
      </div>

      <div className="relative">
        {/* Main Flow */}
        <div className="grid grid-cols-5 gap-4 items-center">
          {/* Source Nodes */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/20 border border-border">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-foreground">Website</span>
              <span className="text-xs text-primary ml-auto">41.7k</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/20 border border-border">
              <div className="w-2 h-2 rounded-full bg-warning"></div>
              <span className="text-sm font-medium text-foreground">Email</span>
              <span className="text-xs text-warning ml-auto">23.2k</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/20 border border-border">
              <div className="w-2 h-2 rounded-full bg-info"></div>
              <span className="text-sm font-medium text-foreground">Telefone</span>
              <span className="text-xs text-info ml-auto">18.1k</span>
            </div>
          </div>

          {/* Flow Lines */}
          <div className="flex items-center justify-center">
            <div className="w-full h-px bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
          </div>

          {/* Central Processing */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary/30 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">2,422</span>
                </div>
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <span className="text-xs text-muted-foreground">ALERTAS</span>
              </div>
            </div>
          </div>

          {/* Flow Lines */}
          <div className="flex items-center justify-center">
            <div className="w-full h-px bg-gradient-to-r from-primary/20 via-success to-success/20"></div>
          </div>

          {/* Output Metrics */}
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-success/10 border border-success/20">
              <div className="text-2xl font-bold text-success">77</div>
              <div className="text-xs text-muted-foreground">AUTOMATIZADO</div>
            </div>
            <div className="p-3 rounded-lg bg-info/10 border border-info/20">
              <div className="text-2xl font-bold text-info">93</div>
              <div className="text-xs text-muted-foreground">RESOLVIDOS</div>
            </div>
            <div className="p-3 rounded-lg bg-warning/10 border border-warning/20">
              <div className="text-2xl font-bold text-warning">16</div>
              <div className="text-xs text-muted-foreground">MANUAL</div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">40</div>
            <div className="text-xs text-muted-foreground">Events Ingestion</div>
            <div className="text-xs text-primary">GB/24H</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">65</div>
            <div className="text-xs text-muted-foreground">Data Ingestion</div>
            <div className="text-xs text-info">TB/24H</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">286.1K</div>
            <div className="text-xs text-muted-foreground">Prevented Events</div>
          </div>
        </div>
      </div>
    </Card>
  )
}