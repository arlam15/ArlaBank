import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'

const menuGroups = [
  {
    title: 'Llogaria',
    items: [
      { icon: 'ti-user', label: 'Profili im', sub: 'Të dhënat personale' },
      { icon: 'ti-bell', label: 'Njoftimet', sub: 'Menaxho njoftimet' },
      { icon: 'ti-shield-lock', label: 'Siguria', sub: 'PIN, biometrika, 2FA' },
    ]
  },
  {
    title: 'Shërbime',
    items: [
      { icon: 'ti-receipt', label: 'Faturat e mia', sub: 'Fatura të ruajtura' },
      { icon: 'ti-building-bank', label: 'Degët & ATM', sub: 'Gjej degën më të afërt' },
      { icon: 'ti-currency-euro', label: 'Kursi i këmbimit', sub: 'Normat aktuale' },
    ]
  },
  {
    title: 'Ndihma',
    items: [
      { icon: 'ti-message-circle', label: 'Kontakto bankën', sub: 'Chat, telefon ose email' },
      { icon: 'ti-help-circle', label: 'Pyetjet e shpeshta', sub: 'Gjetja e përgjigjeve' },
      { icon: 'ti-file-text', label: 'Kushtet e shërbimit', sub: 'Politikat dhe rregulloret' },
    ]
  },
]

export default function More() {
  const navigate = useNavigate()

  return (
    <>
      <header style={{ background: 'var(--surface)', padding: '12px 18px 14px', borderBottom: '0.5px solid var(--border)', position: 'sticky', top: 0, zIndex: 10 }}>
        <h1 style={{ fontSize: 17, fontWeight: 600, color: 'var(--text1)', letterSpacing: '-0.3px' }}>Më shumë</h1>
      </header>

      <div className="scroll-area">
        {/* Profile card */}
        <div style={{ margin: '16px 18px', background: 'var(--surface)', borderRadius: 'var(--radius)', padding: '16px', border: '0.5px solid var(--border)', display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 600, color: 'var(--primary)', flexShrink: 0 }}>AM</div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--text1)' }}>Arla Mitrushi</p>
            <p style={{ fontSize: 12, color: 'var(--text3)', marginTop: 2 }}>Klient që nga 2021</p>
          </div>
          <i className="ti ti-chevron-right" style={{ fontSize: 18, color: 'var(--text3)' }} aria-hidden="true" />
        </div>

        {menuGroups.map(group => (
          <div key={group.title}>
            <p className="section-title">{group.title}</p>
            <div style={{ margin: '0 18px', background: 'var(--surface)', borderRadius: 'var(--radius)', border: '0.5px solid var(--border)', overflow: 'hidden' }}>
              {group.items.map((item, idx) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', padding: '13px 16px', gap: 12, borderBottom: idx < group.items.length - 1 ? '0.5px solid var(--border)' : 'none', cursor: 'pointer' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={`ti ${item.icon}`} style={{ fontSize: 17, color: 'var(--primary)' }} aria-hidden="true" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--text1)' }}>{item.label}</p>
                    <p style={{ fontSize: 12, color: 'var(--text3)', marginTop: 1 }}>{item.sub}</p>
                  </div>
                  <i className="ti ti-chevron-right" style={{ fontSize: 16, color: 'var(--text3)' }} aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        ))}

        <div style={{ padding: '20px 18px 8px' }}>
          <button style={{ width: '100%', height: 48, background: 'var(--red-bg)', border: 'none', borderRadius: 'var(--radius)', color: 'var(--red)', fontSize: 15, fontWeight: 600, fontFamily: 'var(--font)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }} onClick={() => navigate('/login')}>
            <i className="ti ti-logout" style={{ fontSize: 18 }} aria-hidden="true" />
            Dilni nga llogaria
          </button>
        </div>
        <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--text3)', padding: '8px 0 16px' }}>Banka Ime v1.0.0</p>
      </div>

      <BottomNav />
    </>
  )
}
