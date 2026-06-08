import { useNavigate, useLocation } from 'react-router-dom'

export default function BottomNav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const isActive = (path) => pathname === path

  return (
    <nav className="bottom-nav" role="navigation" aria-label="Navigimi kryesor">
      <div
        className={`nav-item ${isActive('/dashboard') ? 'active' : ''}`}
        onClick={() => navigate('/dashboard')}
        role="button"
        tabIndex={0}
        aria-label="Kreu"
      >
        <i className="ti ti-home" aria-hidden="true" />
        <span>Kreu</span>
      </div>

      <div
        className={`nav-item ${isActive('/history') ? 'active' : ''}`}
        onClick={() => navigate('/history')}
        role="button"
        tabIndex={0}
        aria-label="Historiku"
      >
        <i className="ti ti-clock" aria-hidden="true" />
        <span>Historiku</span>
      </div>

      <div
        className="nav-center"
        onClick={() => navigate('/transfer')}
        role="button"
        tabIndex={0}
        aria-label="Dërgo para"
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
          <i className="ti ti-send" aria-hidden="true" />
          <span>Dërgo</span>
        </div>
      </div>

      <div
        className={`nav-item ${isActive('/cards') ? 'active' : ''}`}
        onClick={() => navigate('/cards')}
        role="button"
        tabIndex={0}
        aria-label="Karta"
      >
        <i className="ti ti-credit-card" aria-hidden="true" />
        <span>Karta</span>
      </div>

      <div
        className={`nav-item ${isActive('/more') ? 'active' : ''}`}
        onClick={() => navigate('/more')}
        role="button"
        tabIndex={0}
        aria-label="Më shumë"
      >
        <i className="ti ti-dots" aria-hidden="true" />
        <span>Më shumë</span>
      </div>
    </nav>
  )
}
