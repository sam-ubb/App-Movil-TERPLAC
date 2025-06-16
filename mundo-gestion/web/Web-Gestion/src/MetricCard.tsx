interface MetricCardProps {
  title: string
  value: number
  change: number
  isPositive: boolean
  isAlert?: boolean
}

const MetricCard = ({ title, value, change, isPositive, isAlert }: MetricCardProps) => {
  return (
    <div className="metric-card">
      <h3>{title}</h3>
      <div className="metric-value">{value}</div>
      <div className={`metric-change ${isPositive ? "positive" : "negative"}`}>
        {isPositive ? "↗" : "↘"} {change}% desde ayer
        {isAlert && <span className="alert-text"> Requiere atención</span>}
      </div>
    </div>
  )
}

export default MetricCard
