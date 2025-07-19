import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MetricsFlow } from "@/components/MetricsFlow"
import { 
  Activity, 
  Phone, 
  Users, 
  AlertTriangle, 
  CheckCircle,
  Clock,
  TrendingUp,
  Eye
} from "lucide-react"

export function RealTimeMonitoring() {
  return (
    <div className="min-h-screen bg-background p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Monitoramento em Tempo Real</h1>
          <p className="text-muted-foreground">Acompanhe todas as atividades do sistema</p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-success/10 text-success border-success">
            <Activity className="w-3 h-3 mr-1" />
            Sistema Online
          </Badge>
          <Button variant="outline">
            <Eye className="w-4 h-4 mr-2" />
            Visualização
          </Button>
        </div>
      </div>

      {/* Real-time Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 bg-gradient-card border-border shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Chamadas Ativas</p>
              <p className="text-2xl font-bold text-primary">23</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary" />
            </div>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-xs text-success">+5 na última hora</span>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-card border-border shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Agentes Online</p>
              <p className="text-2xl font-bold text-success">47</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-success" />
            </div>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
            <span className="text-xs text-success">98.5% disponibilidade</span>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-card border-border shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Alertas Ativos</p>
              <p className="text-2xl font-bold text-warning">3</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-warning" />
            </div>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-warning animate-pulse"></div>
            <span className="text-xs text-warning">Requer atenção</span>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-card border-border shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Taxa de Sucesso</p>
              <p className="text-2xl font-bold text-info">87.2%</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-info/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-info" />
            </div>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-info animate-pulse"></div>
            <span className="text-xs text-info">+2.1% vs ontem</span>
          </div>
        </Card>
      </div>

      {/* Main Flow Visualization */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <MetricsFlow />
        </div>

        <div className="space-y-6">
          {/* Live Activity Feed */}
          <Card className="p-6 bg-gradient-card border-border shadow-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">Atividade em Tempo Real</h3>
            
            <div className="space-y-4 max-h-80 overflow-y-auto">
              {[
                { time: "14:23:45", agent: "Ana Silva", action: "Ligação iniciada", status: "active" },
                { time: "14:23:12", agent: "João Santos", action: "Lead qualificado", status: "success" },
                { time: "14:22:58", agent: "Maria Costa", action: "Venda fechada - R$ 12.500", status: "success" },
                { time: "14:22:33", agent: "Pedro Lima", action: "Tentativa falhou", status: "error" },
                { time: "14:22:15", agent: "Sistema", action: "Nova campanha iniciada", status: "info" },
                { time: "14:21:47", agent: "Carla Freitas", action: "Callback agendado", status: "warning" },
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/10">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.status === "active" ? "bg-primary animate-pulse" :
                    activity.status === "success" ? "bg-success" :
                    activity.status === "error" ? "bg-destructive" :
                    activity.status === "warning" ? "bg-warning" :
                    "bg-info"
                  }`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground font-mono">{activity.time}</span>
                      <span className="text-xs text-primary font-medium">{activity.agent}</span>
                    </div>
                    <p className="text-sm text-foreground">{activity.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* System Health */}
          <Card className="p-6 bg-gradient-card border-border shadow-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">Saúde do Sistema</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">CPU</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-muted/20 rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-primary rounded-full"></div>
                  </div>
                  <span className="text-xs text-muted-foreground">67%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Memória</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-muted/20 rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-success rounded-full"></div>
                  </div>
                  <span className="text-xs text-muted-foreground">54%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Rede</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-muted/20 rounded-full overflow-hidden">
                    <div className="w-1/4 h-full bg-info rounded-full"></div>
                  </div>
                  <span className="text-xs text-muted-foreground">23%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Banco de Dados</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-xs text-success">Online</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}