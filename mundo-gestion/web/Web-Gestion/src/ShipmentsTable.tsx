interface Shipment {
  id: number
  products: number
  origin: string
  destination: string
  date: string
  status: string
}

interface ShipmentsTableProps {
  shipments: Shipment[]
}

const ShipmentsTable = ({ shipments }: ShipmentsTableProps) => {
  return (
    <div className="shipments-section">
      <div className="section-header">
        <h2>Despachos recientes</h2>
        <a href="#" className="view-all">
          Ver todos →
        </a>
      </div>
      <table className="shipments-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Productos</th>
            <th>Origen</th>
            <th>Destino</th>
            <th>Fecha envío</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((shipment) => (
            <tr key={shipment.id}>
              <td>{shipment.id}</td>
              <td>{shipment.products}</td>
              <td>{shipment.origin}</td>
              <td>{shipment.destination}</td>
              <td>{shipment.date}</td>
              <td>
                <span className={`status-badge ${shipment.status.toLowerCase().replace(" ", "-")}`}>
                  {shipment.status}
                </span>
              </td>
              <td>
                <button className="action-button">
                  <span className="eye-icon">⊙</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ShipmentsTable
