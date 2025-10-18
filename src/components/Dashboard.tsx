import { Phone, Users, Target, Trophy, TrendingUp, Calendar } from "lucide-react"
import { MetricCard } from "./MetricCard"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-background border-b border-border/50">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground tracking-tight">Dashboard</h1>
              <p className="text-base text-muted-foreground mt-2">
                Visão geral do seu desempenho
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="lg">
                <Calendar className="w-4 h-4" />
                Hoje
              </Button>
              <Button size="lg">
                <Phone className="w-4 h-4" />
                Nova Chamada
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart Area */}
          <div className="lg:col-span-2">
            <Card className="p-8 h-96">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Performance de Chamadas
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Últimos 30 dias
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 rounded-full bg-foreground"></div>
                    <span className="text-muted-foreground">Chamadas</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 rounded-full bg-success"></div>
                    <span className="text-muted-foreground">Conversões</span>
                  </div>
                </div>
              </div>

              {/* Chart placeholder - aqui seria implementado um gráfico real */}
              <div className="h-64 bg-muted/30 rounded-2xl flex items-center justify-center">
                <p className="text-muted-foreground">Gráfico de Performance</p>
              </div>
            </Card>
          </div>

          {/* Side Panel */}
          <div className="space-y-8">
            {/* Leads Source */}
            <Card className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">Fonte de Leads</h3>
                <span className="text-sm font-medium text-foreground">+90 clientes</span>
              </div>
              
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-foreground"></div>
                    <span className="text-sm text-foreground">Website</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground">152</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-warning"></div>
                    <span className="text-sm text-foreground">Email</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground">89</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-info"></div>
                    <span className="text-sm text-foreground">Telefone</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground">67</span>
                </div>
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-8">
              <h3 className="text-lg font-semibold text-foreground mb-6">Atividades Recentes</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">
                      Nova chamada com <span className="font-semibold">Maria Silva</span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">há 5 minutos</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-5 h-5 text-success" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">
                      Venda fechada - <span className="font-semibold">R$ 15.000</span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">há 12 minutos</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-info" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">
                      Novo lead adicionado à campanha
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">há 25 minutos</p>
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