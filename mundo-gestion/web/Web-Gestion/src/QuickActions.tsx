"use client"

import { useState } from "react"

const QuickActions = () => {
  const [showFilterModal, setShowFilterModal] = useState(false)
  const [showSearchModal, setShowSearchModal] = useState(false)

  const handleFilter = () => {
    setShowFilterModal(true)
    // Aquí iría la lógica para filtrar despachos
  }

  const handleSearch = () => {
    setShowSearchModal(true)
    // Aquí iría la lógica para buscar productos o despachos
  }

  const handleGenerateReport = () => {
    // Aquí iría la lógica para generar reportes
    alert("Generando reporte...")
  }

  return (
    <div className="quick-actions-section">
      <h2>Acciones rápidas</h2>
      <div className="quick-actions-container">
        <div className="action-card" onClick={handleFilter}>
          <h3>Filtrar despachos</h3>
          <p>Filtra despachos por fecha, estado o destino para un análisis detallado.</p>
          <div className="action-icon">🔍</div>
        </div>

        <div className="action-card" onClick={handleSearch}>
          <h3>Buscar despacho</h3>
          <p>Busca despachos por ID, fecha o estado para ver detalles completos.</p>
          <div className="action-icon">📋</div>
        </div>

        <div className="action-card" onClick={handleGenerateReport}>
          <h3>Generar reporte</h3>
          <p>Crea un reporte detallado de movimientos e inventario.</p>
          <button className="generate-report-button">↓ Generar reporte</button>
        </div>
      </div>

      {showFilterModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Filtrar despachos</h3>
            <div className="filter-form">
              <div className="filter-group">
                <label>Fecha desde:</label>
                <input type="date" />
              </div>
              <div className="filter-group">
                <label>Fecha hasta:</label>
                <input type="date" />
              </div>
              <div className="filter-group">
                <label>Estado:</label>
                <select>
                  <option value="">Todos</option>
                  <option value="recibido">Recibido</option>
                  <option value="en-transito">En tránsito</option>
                  <option value="alerta">Alerta</option>
                </select>
              </div>
              <div className="filter-group">
                <label>Destino:</label>
                <select>
                  <option value="">Todos</option>
                  <option value="tienda">Tienda</option>
                  <option value="almacen">Almacén</option>
                  <option value="cliente">Cliente</option>
                </select>
              </div>
            </div>
            <div className="modal-actions">
              <button className="secondary-button" onClick={() => setShowFilterModal(false)}>
                Cancelar
              </button>
              <button className="primary-button">Aplicar filtros</button>
            </div>
          </div>
        </div>
      )}

      {showSearchModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Buscar despacho</h3>
            <input type="text" placeholder="ID, fecha o estado..." />
            <div className="search-results">
              <p>Resultados aparecerán aquí...</p>
            </div>
            <button onClick={() => setShowSearchModal(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default QuickActions
