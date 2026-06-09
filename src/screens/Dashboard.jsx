import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'

const transactions = [
  { id: 1, name: 'Neptun Electronics', date: 'Sot, 10:24', amount: '-8,499 L', type: 'out', icon: 'ti-shopping-cart', iconBg: '#EBF1FD', iconColor: 'var(--primary)' },
  { id: 2, name: 'Pagesa e rrogës', date: 'Dje, 09:00', amount: '+120,000 L', type: 'in', icon: 'ti-arrow-down-circle', iconBg: 'var(--success-bg)', iconColor: 'var(--success)' },
  { id: 3, name: 'Fatura e dritave (OSHEE)', date: '4 Qershor', amount: '-4,200 L', type: 'out', icon: 'ti-bolt', iconBg: 'var(--warning-bg)', iconColor: 'var(--warning)' },
  { id: 4, name: 'Transfertë tek Nensi', date: '3 Qershor', amount: '-5,000 L', type: 'out', icon: 'ti-send', iconBg: '#EBF1FD', iconColor: 'var(--primary)' },
  { id: 5, name: 'Rimbushje celulari Vodafone', date: '2 Qershor', amount: '-500 L', type: 'out', icon: 'ti-device-mobile', iconBg: 'var(--purple-bg)', iconColor: 'var(--purple)' },
  { id: 6, name: 'Supermarket Conad', date: '1 Qershor', amount: '-2,850 L', type: 'out', icon: 'ti-shopping-bag', iconBg: 'var(--warning-bg)', iconColor: 'var(--warning)' },
]

const notifications = [
  { id: 1, icon: 'ti-arrow-down-circle', iconBg: 'var(--success-bg)', iconColor: 'var(--success)', title: 'Pagesa e rrogës u pranua', desc: '+120,000 ALL nga Punëdhënësi', time: 'Dje, 09:00' },
  { id: 2, icon: 'ti-send', iconBg: '#EBF1FD', iconColor: 'var(--primary)', title: 'Transfertë e kryer', desc: '-5,000 ALL tek Nensi Berberi', time: '3 Qershor' },
  { id: 3, icon: 'ti-bolt', iconBg: 'var(--warning-bg)', iconColor: 'var(--warning)', title: 'Fatura e OSHEE-s paguar', desc: '-4,200 ALL automatikisht', time: '4 Qershor' },
  { id: 4, icon: 'ti-shield-check', iconBg: 'var(--success-bg)', iconColor: 'var(--success)', title: 'Hyrje e re e verifikuar', desc: 'iPhone 14 Pro — Tiranë, AL', time: '5 Qershor' },
  { id: 5, icon: 'ti-building-bank', iconBg: '#EBF1FD', iconColor: 'var(--primary)', title: 'Ofertë e re nga ArlaBank', desc: 'Kredi me interes 3.5% — Shiko tani', time: '6 Qershor' },
]

export default function Dashboard() {
  const navigate = useNavigate()
  const [showNotifications, setShowNotifications] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
      {/* NOTIFICATIONS PANEL */}
      {showNotifications && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.4)', zIndex: 200 }} onClick={() => setShowNotifications(false)}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '85%', maxWidth: 360, height: '100%', background: 'var(--surface)', display: 'flex', flexDirection: 'column' }} onClick={e => e.stopPropagation()}>
            <div style={{ padding: '52px 18px 16px', borderBottom: '0.5px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: 'var(--text1)' }}>Njoftimet</h2>
              <i className="ti ti-x" style={{ fontSize: 20, color: 'var(--text2)', cursor: 'pointer' }} onClick={() => setShowNotifications(false)} aria-hidden="true" />
            </div>
            <div style={{ flex: 1, overflowY: 'auto' }}>
              {notifications.map(n => (
                <div key={n.id} style={{ display: 'flex', gap: 12, padding: '14px 18px', borderBottom: '0.5px solid var(--border)', cursor: 'pointer' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: n.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={`ti ${n.icon}`} style={{ fontSize: 17, color: n.iconColor }} aria-hidden="true" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--text1)' }}>{n.title}</p>
                    <p style={{ fontSize: 12, color: 'var(--text2)', marginTop: 2 }}>{n.desc}</p>
                    <p style={{ fontSize: 11, color: 'var(--text3)', marginTop: 3 }}>{n.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SETTINGS PANEL */}
      {showSettings && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.4)', zIndex: 200 }} onClick={() => setShowSettings(false)}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '85%', maxWidth: 360, height: '100%', background: 'var(--surface)', display: 'flex', flexDirection: 'column' }} onClick={e => e.stopPropagation()}>
            <div style={{ padding: '52px 18px 16px', borderBottom: '0.5px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: 'var(--text1)' }}>Cilësimet</h2>
              <i className="ti ti-x" style={{ fontSize: 20, color: 'var(--text2)', cursor: 'pointer' }} onClick={() => setShowSettings(false)} aria-hidden="true" />
            </div>
            <div style={{ flex: 1, overflowY: 'auto' }}>

              {/* Profile */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', borderBottom: '0.5px solid var(--border)' }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 600, color: 'var(--primary)' }}>AM</div>
                <div>
                  <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--text1)' }}>Arla Mitrushi</p>
                  <p style={{ fontSize: 12, color: 'var(--text3)' }}>Klient që nga 2021</p>
                </div>
              </div>

              {/* Dark mode toggle */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 18px', borderBottom: '0.5px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <i className={`ti ${darkMode ? 'ti-moon' : 'ti-sun'}`} style={{ fontSize: 20, color: 'var(--text2)' }} aria-hidden="true" />
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--text1)' }}>{darkMode ? 'Night Mode' : 'Day Mode'}</p>
                    <p style={{ fontSize: 12, color: 'var(--text3)' }}>{darkMode ? 'Aktiv' : 'Aktiv'}</p>
                  </div>
                </div>
                <div className={`toggle-pill ${darkMode ? 'on' : 'off'}`} onClick={() => setDarkMode(!darkMode)} />
              </div>

              {[
                { icon: 'ti-user', label: 'Profili im', sub: 'Të dhënat personale' },
                { icon: 'ti-shield-lock', label: 'Siguria', sub: 'PIN, biometrika, 2FA' },
                { icon: 'ti-bell', label: 'Njoftimet', sub: 'Menaxho njoftimet' },
                { icon: 'ti-language', label: 'Gjuha', sub: 'Shqip' },
                { icon: 'ti-help-circle', label: 'Ndihmë', sub: 'FAQ dhe kontakt' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', padding: '14px 18px', gap: 12, borderBottom: '0.5px solid var(--border)', cursor: 'pointer' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={`ti ${item.icon}`} style={{ fontSize: 17, color: 'var(--primary)' }} aria-hidden="true" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--text1)' }}>{item.label}</p>
                    <p style={{ fontSize: 12, color: 'var(--text3)' }}>{item.sub}</p>
                  </div>
                  <i className="ti ti-chevron-right" style={{ fontSize: 16, color: 'var(--text3)' }} aria-hidden="true" />
                </div>
              ))}

              <div style={{ padding: '20px 18px' }}>
                <button style={{ width: '100%', height: 48, background: 'var(--red-bg)', border: 'none', borderRadius: 'var(--radius)', color: 'var(--red)', fontSize: 15, fontWeight: 600, fontFamily: 'var(--font)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }} onClick={() => navigate('/login')}>
                  <i className="ti ti-logout" style={{ fontSize: 18 }} aria-hidden="true" />
                  Dilni nga llogaria
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HEADER */}
      <header style={{ background: 'var(--surface)', padding: '12px 18px 14px', borderBottom: '0.5px solid var(--border)', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <div>
            <p style={{ fontSize: 13, color: 'var(--text2)' }}>Mirëmëngjes,</p>
            <p style={{ fontSize: 17, fontWeight: 600, color: 'var(--text1)', letterSpacing: '-0.3px' }}>Arla</p>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => { setShowNotifications(true); setShowSettings(false) }}>
              <i className="ti ti-bell" style={{ fontSize: 22, color: 'var(--text2)' }} aria-hidden="true" />
              <div style={{ position: 'absolute', top: -1, right: -2, width: 8, height: 8, borderRadius: '50%', background: 'var(--red)', border: '1.5px solid #fff' }} />
            </div>
            <div
              style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 600, color: 'var(--primary)', cursor: 'pointer' }}
              onClick={() => { setShowSettings(true); setShowNotifications(false) }}
            >AM</div>
          </div>
        </div>

        {/* Balance Card */}
        <div style={{ background: 'var(--primary)', borderRadius: 'var(--radius)', padding: 18, color: '#fff', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -20, top: -30, width: 130, height: 130, borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />
          <p style={{ fontSize: 12, opacity: 0.75, marginBottom: 10 }}>AL47 2121 1009 0000 0002 3569 8741</p>
          <p style={{ fontSize: 11, opacity: 0.7, marginBottom: 4 }}>Gjendja</p>
          <p style={{ fontSize: 30, fontWeight: 600, letterSpacing: '-1.2px' }}>248,350 <span style={{ fontSize: 17, opacity: 0.75 }}>ALL</span></p>
        </div>
      </header>

      <div className="scroll-area">
        {/* Transactions */}
        <p className="section-title">Transaksionet e fundit</p>
        <div style={{ background: 'var(--surface)', borderRadius: 'var(--radius)', margin: '0 18px', overflow: 'hidden', border: '0.5px solid var(--border)' }}>
          {transactions.map(tx => (
            <div className="tx-item" key={tx.id}>
              <div className="tx-icon" style={{ background: tx.iconBg }}>
                <i className={`ti ${tx.icon}`} style={{ color: tx.iconColor }} aria-hidden="true" />
              </div>
              <div className="tx-info">
                <p className="tx-name">{tx.name}</p>
                <p className="tx-date">{tx.date}</p>
              </div>
              <p className={`tx-amount ${tx.type}`}>{tx.amount}</p>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', padding: '16px 0 8px', fontSize: 13, color: 'var(--primary)', cursor: 'pointer' }} onClick={() => navigate('/history')}>
          Shiko të gjitha →
        </p>

        {/* Exchange Rates */}
        <p className="section-title">Kursi i këmbimit</p>
        <div style={{ display: 'flex', gap: 8, padding: '0 18px', marginBottom: 16 }}>
          {[
            { pair: 'EUR / ALL', rate: '108.40', change: '+0.2%' },
            { pair: 'USD / ALL', rate: '99.10', change: '+0.1%' },
            { pair: 'GBP / ALL', rate: '125.80', change: '+0.3%' },
          ].map(fx => (
            <div className="fx-chip" key={fx.pair}>
              <p className="fx-pair">{fx.pair}</p>
              <p className="fx-rate">{fx.rate}</p>
              <p className="fx-change">{fx.change} sot</p>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </>
  )
}
