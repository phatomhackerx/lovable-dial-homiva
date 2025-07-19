import { AdvancedChart } from "@/components/AdvancedChart"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Download, 
  Filter, 
  Calendar,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Target
} from "lucide-react"

export function Reports() {
  // Sample data for different charts
  const revenueData = [45600, 52300, 48900, 56700, 61200, 58400, 64800, 59300, 67100, 62800, 69500, 72300]
  const callsData = [234, 267, 198, 289, 312, 276, 298, 245, 321, 287, 334, 298]
  const conversionData = [24.5, 28.3, 22.1, 31.2, 35.6, 29.8, 33.4, 27.9, 36.1, 32.5, 38.2, 34.7]
  const leadsData = [156, 189, 134, 198, 223, 187, 212, 175, 234, 201, 245, 218]

  return (
    <div className="min-h-screen bg-background p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Relatórios Avançados</h1>
          <p className="text-muted-foreground">Análise detalhada de performance e resultados</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Calendar className="w-4 h-4 mr-2" />
            Período
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
          <Button size="sm">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Key Metrics Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 bg-gradient-card border-border shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-success" />
            </div>
            <Badge variant="outline" className="bg-success/10 text-success">
              +12.5%
            </Badge>
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">R$ 928.6K</p>
            <p className="text-sm text-muted-foreground">Receita Total</p>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-card border-border shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <Badge variant="outline" className="bg-primary/10 text-primary">
              +8.2%
            </Badge>
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">3,247</p>
            <p className="text-sm text-muted-foreground">Total de Chamadas</p>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-card border-border shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-warning" />
            </div>
            <Badge variant="outline" className="bg-warning/10 text-warning">
              +2.1%
            </Badge>
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">31.4%</p>
            <p className="text-sm text-muted-foreground">Taxa de Conversão</p>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-card border-border shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-info/10 flex items-center justify-center">
              <PieChart className="w-6 h-6 text-info" />
            </div>
            <Badge variant="outline" className="bg-destructive/10 text-destructive">
              -1.2%
            </Badge>
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">2,389</p>
            <p className="text-sm text-muted-foreground">Leads Gerados</p>
          </div>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <AdvancedChart
          title="Receita Mensal"
          subtitle="Evolução dos últimos 12 meses"
          data={revenueData}
          color="success"
          height={300}
        />

        <AdvancedChart
          title="Volume de Chamadas"
          subtitle="Chamadas realizadas por mês"
          data={callsData}
          color="primary"
          height={300}
        />

        <AdvancedChart
          title="Taxa de Conversão"
          subtitle="Percentual de conversão mensal"
          data={conversionData}
          color="warning"
          height={300}
        />

        <AdvancedChart
          title="Leads Qualificados"
          subtitle="Geração de leads por mês"
          data={leadsData}
          color="info"
          height={300}
        />
      </div>

      {/* Detailed Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance by Agent */}
        <Card className="p-6 bg-gradient-card border-border shadow-card">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Performance por Agente
          </h3>
          
          <div className="space-y-4">
            {[
              { name: "Ana Silva", calls: 234, conversions: 89, revenue: "R$ 156.8K", rate: "38.1%" },
              { name: "João Santos", calls: 198, conversions: 67, revenue: "R$ 124.3K", rate: "33.8%" },
              { name: "Maria Costa", calls: 256, conversions: 78, revenue: "R$ 142.7K", rate: "30.5%" },
              { name: "Pedro Lima", calls: 189, conversions: 54, revenue: "R$ 98.2K", rate: "28.6%" },
              { name: "Carla Freitas", calls: 212, conversions: 71, revenue: "R$ 134.5K", rate: "33.5%" }
            ].map((agent, index) => (
              <div key={index} className="p-4 rounded-lg bg-muted/10 hover:bg-muted/20 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-foreground">{agent.name}</p>
                  <Badge variant="outline" className={
                    parseFloat(agent.rate) > 35 ? "bg-success/10 text-success" :
                    parseFloat(agent.rate) > 30 ? "bg-warning/10 text-warning" :
                    "bg-muted/10 text-muted-foreground"
                  }>
                    {agent.rate}
                  </Badge>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                  <div>
                    <p className="text-foreground font-medium">{agent.calls}</p>
                    <p>Chamadas</p>
                  </div>
                  <div>
                    <p className="text-success font-medium">{agent.conversions}</p>
                    <p>Conversões</p>
                  </div>
                  <div>
                    <p className="text-primary font-medium">{agent.revenue}</p>
                    <p>Receita</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Campaign Performance */}
        <Card className="p-6 bg-gradient-card border-border shadow-card">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Performance por Campanha
          </h3>
          
          <div className="space-y-4">
            {[
              { name: "Seguro Auto Premium", leads: 456, conversions: 178, roi: "342%" },
              { name: "Plano Saúde Família", leads: 389, conversions: 134, roi: "298%" },
              { name: "Cartão de Crédito", leads: 523, conversions: 156, roi: "267%" },
              { name: "Investimento Renda Fixa", leads: 298, conversions: 89, roi: "234%" },
              { name: "Empréstimo Pessoal", leads: 234, conversions: 67, roi: "198%" }
            ].map((campaign, index) => (
              <div key={index} className="p-4 rounded-lg bg-muted/10">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-foreground text-sm">{campaign.name}</p>
                  <Badge variant="outline" className="bg-primary/10 text-primary">
                    ROI {campaign.roi}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-muted-foreground">Leads</p>
                      <p className="text-foreground font-medium">{campaign.leads}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Conversões</p>
                      <p className="text-success font-medium">{campaign.conversions}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground">Taxa</p>
                    <p className="text-warning font-medium">
                      {((campaign.conversions / campaign.leads) * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Time Analysis */}
        <Card className="p-6 bg-gradient-card border-border shadow-card">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Análise por Horário
          </h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 rounded-lg bg-primary/10">
                <p className="text-2xl font-bold text-primary">14:00</p>
                <p className="text-xs text-muted-foreground">Melhor horário</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-success/10">
                <p className="text-2xl font-bold text-success">45.2%</p>
                <p className="text-xs text-muted-foreground">Taxa de pico</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {[
                { period: "09:00 - 12:00", calls: 234, rate: "32.4%" },
                { period: "12:00 - 14:00", calls: 189, rate: "28.7%" },
                { period: "14:00 - 17:00", calls: 298, rate: "45.2%" },
                { period: "17:00 - 19:00", calls: 156, rate: "24.1%" }
              ].map((time, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/10">
                  <div>
                    <p className="text-sm font-medium text-foreground">{time.period}</p>
                    <p className="text-xs text-muted-foreground">{time.calls} chamadas</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-foreground">{time.rate}</p>
                    <div className="w-16 h-1 bg-muted/20 rounded-full overflow-hidden mt-1">
                      <div 
                        className="h-full bg-primary rounded-full"
                        style={{ width: time.rate }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}