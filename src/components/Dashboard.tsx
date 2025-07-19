import { Phone, Users, Target, Trophy, TrendingUp, Calendar } from "lucide-react"
import { MetricCard } from "./MetricCard"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Visão geral do seu desempenho
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                Hoje
              </Button>
              <Button size="sm">
                <Phone className="w-4 h-4 mr-2" />
                Nova Chamada
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total de Chamadas"
            value="1,446"
            change="+4.63%"
            changeType="positive"
            icon={<Phone className="w-6 h-6" />}
          />
          
          <MetricCard
            title="Leads Qualificados"
            value="352"
            change="+8.2%"
            changeType="positive"
            icon={<Users className="w-6 h-6" />}
          />
          
          <MetricCard
            title="Taxa de Conversão"
            value="24.3%"
            change="+2.1%"
            changeType="positive"
            icon={<Target className="w-6 h-6" />}
          />
          
          <MetricCard
            title="Vendas Fechadas"
            value="$928,627"
            change="+12.5%"
            changeType="positive"
            icon={<TrendingUp className="w-6 h-6" />}
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Chart Area */}
          <div className="lg:col-span-2">
            <Card className="p-6 bg-gradient-card border-border shadow-card h-96">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Performance de Chamadas
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Últimos 30 dias
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground">Chamadas</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 rounded-full bg-success"></div>
                    <span className="text-muted-foreground">Conversões</span>
                  </div>
                </div>
              </div>

              {/* Chart placeholder - aqui seria implementado um gráfico real */}
              <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Gráfico de Performance</p>
              </div>
            </Card>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* Leads Source */}
            <Card className="p-6 bg-gradient-card border-border shadow-card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Fonte de Leads</h3>
                <span className="text-sm text-primary">+90 clientes</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-foreground">Website</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">152</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-warning"></div>
                    <span className="text-sm text-foreground">Email</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">89</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-info"></div>
                    <span className="text-sm text-foreground">Telefone</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">67</span>
                </div>
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6 bg-gradient-card border-border shadow-card">
              <h3 className="font-semibold text-foreground mb-4">Atividades Recentes</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">
                      Nova chamada com <span className="font-medium">Maria Silva</span>
                    </p>
                    <p className="text-xs text-muted-foreground">há 5 minutos</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-4 h-4 text-success" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">
                      Venda fechada - <span className="font-medium">R$ 15.000</span>
                    </p>
                    <p className="text-xs text-muted-foreground">há 12 minutos</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-info/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-info" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">
                      Novo lead adicionado à campanha
                    </p>
                    <p className="text-xs text-muted-foreground">há 25 minutos</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}