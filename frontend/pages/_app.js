import '@/styles/globals.css'
import { FaHome, FaUsers, FaCog } from 'react-icons/fa'

export default function App({ Component, pageProps }) {
  
  return (
    <div className="wrapper">
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Navbar content */}
      </nav>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Sidebar content */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="https://adminlte.io/themes/v3/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <a className="d-block">Nombre del usuario</a>
            </div>
          </div>

          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              {/* Home */}
              <li className="nav-item">
                <a>
                  <a className="nav-link">
                    <FaHome className="nav-icon" />
                    <p>Inicio</p>
                  </a>
                </a>
              </li>

              {/* Users */}
              <li className="nav-item">
                <a>
                  <a className="nav-link">
                    <FaUsers className="nav-icon" />
                    <p>Usuarios</p>
                  </a>
                </a>
              </li>

              {/* Settings */}
              <li className="nav-item">
                <a>
                  <a className="nav-link">
                    <FaCog className="nav-icon" />
                    <p>Configuración</p>
                  </a>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <div className="content-wrapper">
        <Component {...pageProps} />
      </div>
      <footer className="main-footer">
        {/* Footer content */}
      </footer>
    </div>
  )
}
