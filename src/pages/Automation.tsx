import { FlowChart } from "@/components/FlowChart"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Bot, 
  Play, 
  Pause, 
  Settings, 
  Plus,
  Zap,
  MessageSquare,
  Clock
} from "lucide-react"

export function Automation() {
  const flowNodes = [
    {
      id: "trigger",
      title: "Novo Lead Recebido",
      type: "trigger" as const,
      status: "active" as const,
      position: { x: 50, y: 50 }
    },
    {
      id: "condition1", 
      title: "Verificar Horário",
      type: "condition" as const,
      status: "active" as const,
      position: { x: 300, y: 50 }
    },
    {
      id: "action1",
      title: "Enviar WhatsApp",
      type: "action" as const,
      status: "active" as const,
      position: { x: 550, y: 20 }
    },
    {
      id: "action2",
      title: "Agendar Callback",
      type: "action" as const,
      status: "active" as const,
      position: { x: 550, y: 100 }
    },
    {
      id: "output",
      title: "Atualizar CRM",
      type: "output" as const,
      status: "active" as const,
      position: { x: 800, y: 60 }
    }
  ]

  const flowConnections = [
    { from: "trigger", to: "condition1" },
    { from: "condition1", to: "action1", label: "Horário comercial" },
    { from: "condition1", to: "action2", label: "Fora do horário" },
    { from: "action1", to: "output" },
    { from: "action2", to: "output" }
  ]

  return (
    <div className="min-h-screen bg-background p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Automação e Scripts</h1>
          <p className="text-muted-foreground">Configure fluxos automáticos e scripts inteligentes</p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-success/10 text-success">
            <Bot className="w-3 h-3 mr-1" />
            IA Ativa
          </Badge>
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4 mr-2" />
            Configurações
          </Button>
          <Button size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Novo Fluxo
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 bg-gradient-card border-border shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Fluxos Ativos</p>
              <p className="text-2xl font-bold text-primary">8</p>
            </div>
            <Zap className="w-8 h-8 text-primary" />
          </div>
          <p className="text-xs text-success mt-2">+2 esta semana</p>
        </Card>

        <Card className="p-6 bg-gradient-card border-border shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Execuções Hoje</p>
              <p className="text-2xl font-bold text-success">342</p>
            </div>
            <Play className="w-8 h-8 text-success" />
          </div>
          <p className="text-xs text-success mt-2">+15% vs ontem</p>
        </Card>

        <Card className="p-6 bg-gradient-card border-border shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Taxa de Sucesso</p>
              <p className="text-2xl font-bold text-info">94.7%</p>
            </div>
            <MessageSquare className="w-8 h-8 text-info" />
          </div>
          <p className="text-xs text-info mt-2">Excelente performance</p>
        </Card>

        <Card className="p-6 bg-gradient-card border-border shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Tempo Médio</p>
              <p className="text-2xl font-bold text-warning">2.3s</p>
            </div>
            <Clock className="w-8 h-8 text-warning" />
          </div>
          <p className="text-xs text-warning mt-2">Resposta rápida</p>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Flow Visualization */}
        <div className="lg:col-span-2">
          <FlowChart 
            nodes={flowNodes}
            connections={flowConnections}
          />
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          {/* Active Scripts */}
          <Card className="p-6 bg-gradient-card border-border shadow-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">Scripts Ativos</h3>
            
            <div className="space-y-3">
              {[
                { name: "Abertura Seguro Auto", status: "active", usage: "89%" },
                { name: "Follow-up Vendas", status: "active", usage: "76%" },
                { name: "Objeções Comuns", status: "paused", usage: "45%" },
                { name: "Encerramento Premium", status: "active", usage: "92%" }
              ].map((script, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/10">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      script.status === "active" ? "bg-success animate-pulse" : "bg-muted"
                    }`} />
                    <div>
                      <p className="text-sm font-medium text-foreground">{script.name}</p>
                      <p className="text-xs text-muted-foreground">Uso: {script.usage}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">
                    {script.status === "active" ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          {/* AI Suggestions */}
          <Card className="p-6 bg-gradient-card border-border shadow-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Sugestões da IA
            </h3>
            
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <div className="flex items-start gap-2">
                  <Bot className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground font-medium">
                      Otimização de Script
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Adicionar pergunta sobre orçamento no script de abertura pode aumentar conversão em 12%
                    </p>
                  </div>
                </div>
                <Button size="sm" className="mt-2 w-full">
                  Aplicar Sugestão
                </Button>
              </div>

              <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                <div className="flex items-start gap-2">
                  <Bot className="w-4 h-4 text-success mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground font-medium">
                      Novo Fluxo Automático
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Criar fluxo para leads que não respondem após 3 tentativas
                    </p>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="mt-2 w-full">
                  Ver Detalhes
                </Button>
              </div>
            </div>
          </Card>

          {/* Recent Activities */}
          <Card className="p-6 bg-gradient-card border-border shadow-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">Atividades Recentes</h3>
            
            <div className="space-y-3">
              {[
                { time: "14:23", action: "Script 'Abertura Premium' executado", agent: "Ana Silva" },
                { time: "14:15", action: "Fluxo 'Follow-up' ativado automaticamente", agent: "Sistema" },
                { time: "14:08", action: "IA sugeriu melhoria no script", agent: "IA Assistant" },
                { time: "13:55", action: "Novo template criado", agent: "João Santos" }
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm text-foreground">{activity.action}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                      <span className="text-xs text-primary">•</span>
                      <span className="text-xs text-primary">{activity.agent}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}