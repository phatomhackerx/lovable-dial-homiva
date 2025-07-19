import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AdvancedChartProps {
  title: string
  subtitle?: string
  data: number[]
  color?: "primary" | "success" | "warning" | "info"
  showGrid?: boolean
  height?: number
  className?: string
}

export function AdvancedChart({ 
  title, 
  subtitle, 
  data, 
  color = "primary",
  showGrid = true,
  height = 200,
  className 
}: AdvancedChartProps) {
  const colorClasses = {
    primary: "stroke-primary fill-primary/20",
    success: "stroke-success fill-success/20", 
    warning: "stroke-warning fill-warning/20",
    info: "stroke-info fill-info/20"
  }

  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1

  // Generate SVG path for the line
  const pathData = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100
    const y = 100 - ((value - min) / range) * 80 - 10
    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`
  }).join(' ')

  // Generate area path
  const areaData = `${pathData} L 100 90 L 0 90 Z`

  return (
    <Card className={cn(
      "p-6 bg-gradient-card border-border shadow-card",
      className
    )}>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>

      <div className="relative" style={{ height }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          className="overflow-visible"
        >
          {/* Grid lines */}
          {showGrid && (
            <g className="opacity-20">
              {[...Array(5)].map((_, i) => (
                <line
                  key={`h-${i}`}
                  x1="0"
                  y1={10 + i * 20}
                  x2="100"
                  y2={10 + i * 20}
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              ))}
              {[...Array(5)].map((_, i) => (
                <line
                  key={`v-${i}`}
                  x1={i * 25}
                  y1="10"
                  x2={i * 25}
                  y2="90"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              ))}
            </g>
          )}

          {/* Area fill */}
          <path
            d={areaData}
            className={colorClasses[color].split(' ')[1]}
            strokeWidth="0"
          />

          {/* Main line */}
          <path
            d={pathData}
            fill="none"
            className={colorClasses[color].split(' ')[0]}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data points */}
          {data.map((value, index) => {
            const x = (index / (data.length - 1)) * 100
            const y = 100 - ((value - min) / range) * 80 - 10
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="2"
                className={colorClasses[color].split(' ')[0]}
                fill="currentColor"
              />
            )
          })}
        </svg>

        {/* Value indicators */}
        <div className="absolute top-0 right-0 text-right">
          <div className="text-sm font-medium text-foreground">{max}</div>
        </div>
        <div className="absolute bottom-0 right-0 text-right">
          <div className="text-sm font-medium text-foreground">{min}</div>
        </div>
      </div>

      {/* Current value */}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Valor atual</span>
        <span className="text-lg font-bold text-foreground">
          {data[data.length - 1]?.toLocaleString()}
        </span>
      </div>
    </Card>
  )
}