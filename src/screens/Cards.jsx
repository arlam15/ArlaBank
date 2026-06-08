import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'

export default function Cards() {
  const navigate = useNavigate()
  const [toggles, setToggles] = useState({ international: true, contactless: true, online: false })

  const flip = (key) => setToggles(t => ({ ...t, [key]: !t[key] }))

  return (
    <>
      <header className="screen-header" style={{ position: 'sticky', top: 0, zIndex: 10 }}>
        <button className="back-btn" onClick={() => navigate('/dashboard')} aria-label="Kthehu">
          <i className="ti ti-arrow-left" aria-hidden="true" />
        </button>
        <h1 className="screen-title">Karta ime</h1>
      </header>

      <div className="scroll-area">
        {/* Card Visual */}
        <div style={{ margin: '16px 18px 14px', height: 148, borderRadius: 'var(--radius)', background: 'linear-gradient(135deg, #1A4CAF 0%, #2D6BE4 60%, #4F8AEA 100%)', padding: 20, color: '#fff', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -20, top: -30, width: 130, height: 130, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
          <div style={{ position: 'absolute', right: 24, bottom: -44, width: 110, height: 110, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
          <div style={{ width: 28, height: 20, background: 'rgba(255,255,255,0.3)', borderRadius: 4, marginBottom: 18 }} />
          <p style={{ fontSize: 13, letterSpacing: 2, opacity: 0.9, marginBottom: 12, fontFamily: 'var(--mono)' }}>•••• •••• •••• 4821</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <p style={{ fontSize: 13, fontWeight: 600 }}>Arla Mitrushi</p>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: 9, opacity: 0.65 }}>SKADON</p>
              <p style={{ fontSize: 13, fontWeight: 600 }}>09/28</p>
            </div>
          </div>
          <i className="ti ti-brand-mastercard" style={{ position: 'absolute', bottom: 16, right: 16, fontSize: 22, opacity: 0.8 }} aria-hidden="true" />
        </div>

        {/* Card quick actions */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8, padding: '0 18px', marginBottom: 16 }}>
          {[
            { icon: 'ti-lock', label: 'Blloko' },
            { icon: 'ti-eye', label: 'PIN-i' },
            { icon: 'ti-replace', label: 'Zëvendëso' },
            { icon: 'ti-settings', label: 'Cilësimet' },
          ].map(a => (
            <div key={a.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, background: 'var(--surface)', borderRadius: 'var(--radius-sm)', padding: '12px 8px 10px', cursor: 'pointer', border: '0.5px solid var(--border)' }}>
              <i className={`ti ${a.icon}`} style={{ fontSize: 20, color: 'var(--primary)' }} aria-hidden="true" />
              <span style={{ fontSize: 11, color: 'var(--text2)', fontWeight: 500 }}>{a.label}</span>
            </div>
          ))}
        </div>

        {/* Toggles */}
        <p className="section-title">Kontrollet e kartës</p>
        <div style={{ margin: '0 18px 16px', background: 'var(--surface)', borderRadius: 'var(--radius)', border: '0.5px solid var(--border)', overflow: 'hidden' }}>
          {[
            { key: 'international', icon: 'ti-world', label: 'Pagesat jashtë vendit', sub: 'Aktivizon pagesat ndërkombëtare' },
            { key: 'contactless', icon: 'ti-device-mobile', label: 'Pagesat kontaktuese', sub: 'NFC dhe Apple/Google Pay' },
            { key: 'online', icon: 'ti-shopping-cart', label: 'Blerjet online', sub: 'Pagesat në internet' },
          ].map(t => (
            <div className="toggle-row" key={t.key} onClick={() => flip(t.key)}>
              <div className="toggle-left">
                <i className={`ti ${t.icon}`} aria-hidden="true" />
                <div>
                  <p className="toggle-text">{t.label}</p>
                  <p className="toggle-sub">{t.sub}</p>
                </div>
              </div>
              <div className={`toggle-pill ${toggles[t.key] ? 'on' : 'off'}`} role="switch" aria-checked={toggles[t.key]} />
            </div>
          ))}
        </div>

        {/* Limits */}
        <p className="section-title">Limiti sot</p>
        <div style={{ padding: '0 18px', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 12 }}>
          {[
            { label: 'Buxheti ditor i blerjes', used: 50000, total: 100000, color: 'var(--primary)' },
            { label: 'Limiti ditor i ATM', used: 0, total: 30000, color: 'var(--success)' },
            { label: 'Limiti javor i transfertave', used: 15000, total: 50000, color: 'var(--warning)' },
          ].map(l => (
            <div key={l.label} style={{ background: 'var(--surface)', borderRadius: 'var(--radius-sm)', padding: '13px 15px', border: '0.5px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 7 }}>
                <span style={{ fontSize: 13, color: 'var(--text2)', fontWeight: 500 }}>{l.label}</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text1)' }}>{l.used.toLocaleString()} / {l.total.toLocaleString()} L</span>
              </div>
              <div className="progress-wrap">
                <div className="progress-bar" style={{ width: `${(l.used / l.total) * 100}%`, background: l.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </>
  )
}
