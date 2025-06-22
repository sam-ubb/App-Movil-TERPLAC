import './Dashboard.css'
import DespachosTable from '../components/DespachosTable';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <div className="titulo-y-stats">
          <h1>Panel de Control de Despacho</h1>
          <section className="stats">
            <div className="card green">
              <p className="label">Productos en tránsito</p>
              <p className="value">24</p>
              <p className="delta">↑ 7.5% desde ayer</p>
            </div>
            <div className="card red">
              <p className="label">Despachos pendientes</p>
              <p className="value">7</p>
              <p className="delta">↓ 2% desde ayer</p>
            </div>
            <div className="card green">
              <p className="label">Recibidos hoy</p>
              <p className="value">12</p>
              <p className="delta">↑ 1.10% desde ayer</p>
            </div>
            <div className="card orange">
              <p className="label">Alertas</p>
              <p className="value">2</p>
              <p className="delta">⚠️ Requiere atención</p>
            </div>
          </section>
        </div>

        <DespachosTable />
      </div>
    </div>
  );
}
