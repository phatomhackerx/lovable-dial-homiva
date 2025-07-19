import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CampaignCard } from "@/components/CampaignCard"
import { AdvancedChart } from "@/components/AdvancedChart"
import { 
  Plus, 
  Filter, 
  Search, 
  Calendar,
  TrendingUp,
  Target,
  Users
} from "lucide-react"

export function Campaigns() {
  // Sample data for charts
  const performanceData = [165, 180, 155, 168, 175, 162, 170, 158, 172, 165, 169, 174]
  const conversionData = [24, 28, 22, 31, 35, 29, 33, 27, 36, 32, 38, 34]

  return (
    <div className="min-h-screen bg-background p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Gestão de Campanhas</h1>
          <p className="text-muted-foreground">Controle e monitore suas campanhas ativas</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
          <Button variant="outline" size="sm">
            <Search className="w-4 h-4 mr-2" />
            Buscar
          </Button>
          <Button size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Nova Campanha
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-card border border-border rounded-lg p-6 shadow-card">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">12</p>
              <p className="text-sm text-muted-foreground">Campanhas Ativas</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-card border border-border rounded-lg p-6 shadow-card">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-success" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">1,847</p>
              <p className="text-sm text-muted-foreground">Leads Ativos</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-card border border-border rounded-lg p-6 shadow-card">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-warning" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">28.4%</p>
              <p className="text-sm text-muted-foreground">Taxa Conversão</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-card border border-border rounded-lg p-6 shadow-card">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-info/10 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-info" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">7</p>
              <p className="text-sm text-muted-foreground">Agendadas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Campaigns List */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">Campanhas Ativas</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CampaignCard
                title="Seguro Residencial Premium"
                subtitle="Campanha Q1 2024"
                progress={67}
                itemsInStock={389}
                demand={100}
                status="active"
                color="purple"
              />

              <CampaignCard
                title="Plano de Saúde Família"
                subtitle="Promoção Especial"
                progress={45}
                itemsInStock={156}
                demand={89}
                status="active"
                color="primary"
              />

              <CampaignCard
                title="Cartão de Crédito Gold"
                subtitle="Aprovação Facilitada"
                progress={89}
                itemsInStock={298}
                demand={67}
                status="awaiting"
                color="orange"
              />

              <CampaignCard
                title="Investimentos Renda Fixa"
                subtitle="Taxa Especial"
                progress={23}
                itemsInStock={124}
                demand={156}
                status="active"
                color="secondary"
              />
            </div>
          </div>

          {/* Performance Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AdvancedChart
              title="Performance Mensal"
              subtitle="Chamadas por dia"
              data={performanceData}
              color="primary"
              height={200}
            />

            <AdvancedChart
              title="Taxa de Conversão"
              subtitle="Percentual de sucesso"
              data={conversionData}
              color="success"
              height={200}
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Campaign Timeline */}
          <div className="bg-gradient-card border border-border rounded-lg p-6 shadow-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">Timeline de Campanhas</h3>
            
            <div className="space-y-4">
              {[
                { title: "Seguro Auto", date: "Hoje, 14:30", status: "success", type: "Finalizada" },
                { title: "Plano Dental", date: "Amanhã, 09:00", status: "pending", type: "Início" },
                { title: "Empréstimo Pessoal", date: "15 Mai, 16:00", status: "active", type: "Em Andamento" },
                { title: "Previdência Privada", date: "20 Mai, 10:00", status: "scheduled", type: "Agendada" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`w-3 h-3 rounded-full mt-1 ${
                    item.status === "success" ? "bg-success" :
                    item.status === "active" ? "bg-primary" :
                    item.status === "pending" ? "bg-warning" :
                    "bg-muted"
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-foreground">{item.title}</p>
                      <Badge variant="outline" className="text-xs">
                        {item.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Performers */}
          <div className="bg-gradient-card border border-border rounded-lg p-6 shadow-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">Top Performers</h3>
            
            <div className="space-y-3">
              {[
                { name: "Ana Silva", campaigns: 5, conversions: "34.2%", revenue: "R$ 45.6K" },
                { name: "João Santos", campaigns: 3, conversions: "29.8%", revenue: "R$ 38.2K" },
                { name: "Maria Costa", campaigns: 4, conversions: "31.5%", revenue: "R$ 42.1K" }
              ].map((performer, index) => (
                <div key={index} className="p-3 rounded-lg bg-muted/10">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-foreground">{performer.name}</p>
                    <Badge variant="outline" className="bg-primary/10 text-primary">
                      #{index + 1}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                    <div>
                      <p>{performer.campaigns} campanhas</p>
                    </div>
                    <div>
                      <p>{performer.conversions} conv.</p>
                    </div>
                    <div>
                      <p className="text-success">{performer.revenue}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-card border border-border rounded-lg p-6 shadow-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">Ações Rápidas</h3>
            
            <div className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Criar Nova Campanha
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Target className="w-4 h-4 mr-2" />
                Definir Metas
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Users className="w-4 h-4 mr-2" />
                Gerenciar Agentes
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <TrendingUp className="w-4 h-4 mr-2" />
                Relatório Detalhado
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}