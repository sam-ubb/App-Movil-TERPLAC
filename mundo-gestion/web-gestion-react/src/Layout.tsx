
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './Layout.css'; // Assuming you have a CSS file for layout styles

export default function Layout() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
