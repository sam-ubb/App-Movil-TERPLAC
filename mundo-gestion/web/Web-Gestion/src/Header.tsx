"use client"

import { useState } from "react"
import logo from "./assets/terplac-logo.png.png"

const Header = () => {
  const [activeTab, setActiveTab] = useState("Dashboard")

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo || "/placeholder.svg"} alt="TERPLAC" className="logo" />
        <span className="logo-text">TERPLAC</span>
        <span className="logo-subtitle">TECHEGOS & PUERTAS PLACAS</span>
      </div>
      <nav className="main-nav">
        <ul>
          <li className={activeTab === "Dashboard" ? "active" : ""} onClick={() => setActiveTab("Dashboard")}>
            Dashboard
          </li>
          <li className={activeTab === "Despachos" ? "active" : ""} onClick={() => setActiveTab("Despachos")}>
            Despachos
          </li>
          <li className={activeTab === "Productos" ? "active" : ""} onClick={() => setActiveTab("Productos")}>
            Productos
          </li>
          <li className={activeTab === "Reportes" ? "active" : ""} onClick={() => setActiveTab("Reportes")}>
            Reportes
          </li>
        </ul>
      </nav>
      <button className="admin-button">▾ Admin</button>
    </header>
  )
}

export default Header
