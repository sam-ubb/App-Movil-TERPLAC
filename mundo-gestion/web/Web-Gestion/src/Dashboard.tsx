import MetricCard from "./MetricCard"
import ShipmentsTable from "./ShipmentsTable"
import QuickActions from "./QuickActions"

const Dashboard = () => {
  const metrics = [
    { title: "Productos en tránsito", value: 24, change: 5, isPositive: true },
    { title: "Despachos pendientes", value: 7, change: 2, isPositive: false },
    { title: "Recibidos hoy", value: 12, change: 10, isPositive: true },
    { title: "Alertas", value: 2, change: 2, isPositive: false, isAlert: true },
  ]

  const recentShipments = [
    { id: 1, products: 5, origin: "Fábrica", destination: "Tienda", date: "21-05-2025", status: "Recibido" },
    { id: 2, products: 30, origin: "Fábrica", destination: "Tienda", date: "21-05-2025", status: "Alerta" },
    { id: 3, products: 40, origin: "Fábrica", destination: "Tienda", date: "21-05-2025", status: "En tránsito" },
  ]

  return (
    <main className="dashboard">
      <div className="dashboard-header">
        <h1>Sistema de control de despacho</h1>
        <p>Gestiona el inventario y previene pérdidas con nuestro sistema de escaneo</p>
      </div>

      <div className="metrics-container">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            isPositive={metric.isPositive}
            isAlert={metric.isAlert}
          />
        ))}
      </div>

      <ShipmentsTable shipments={recentShipments} />
      <QuickActions />
    </main>
  )
}

export default Dashboard
