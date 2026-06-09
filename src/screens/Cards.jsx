import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'

export default function Cards() {
  const navigate = useNavigate()
  const [toggles, setToggles] = useState({ international: true, contactless: true, online: false })
  const [showBlock, setShowBlock] = useState(false)
  const [showPin, setShowPin] = useState(false)
  const [showReplace, setShowReplace] = useState(false)
  const [isBlocked, setIsBlocked] = useState(false)
  const [pinRevealed, setPinRevealed] = useState(false)

  const flip = (key) => setToggles(t => ({ ...t, [key]: !t[key] }))

  return (
    <>
      {/* BLLOKO MODAL */}
      {showBlock && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 200, display: 'flex', alignItems: 'flex-end' }} onClick={() => setShowBlock(false)}>
          <div style={{ background: 'var(--surface)', borderRadius: '20px 20px 0 0', padding: '24px 24px 40px', width: '100%' }} onClick={e => e.stopPropagation()}>
            <div style={{ width: 40, height: 4, borderRadius: 2, background: 'var(--border)', margin: '0 auto 20px' }} />
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: isBlocked ? 'var(--success-bg)' : 'var(--red-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                <i className={`ti ${isBlocked ? 'ti-lock-open' : 'ti-lock'}`} style={{ fontSize: 28, color: isBlocked ? 'var(--success)' : 'var(--red)' }} aria-hidden="true" />
              </div>
              <p style={{ fontSize: 18, fontWeight: 600, color: 'var(--text1)', marginBottom: 6 }}>
                {isBlocked ? 'Zhblloko kartën' : 'Blloko kartën'}
              </p>
              <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.5 }}>
                {isBlocked ? 'Karta juaj është e bllokuar. Dëshironi ta zhbllokoni?' : 'Karta juaj do të bllokohet menjëherë. Asnjë pagesë nuk do të pranohet.'}
              </p>
            </div>
            <button
              className="btn-primary"
              style={{ background: isBlocked ? 'var(--success)' : 'var(--red)', marginBottom: 12 }}
              onClick={() => { setIsBlocked(!isBlocked); setShowBlock(false) }}
            >
              {isBlocked ? 'Zhblloko kartën' : 'Blloko kartën'}
            </button>
            <button className="btn-secondary" style={{ width: '100%' }} onClick={() => setShowBlock(false)}>Anulo</button>
          </div>
        </div>
      )}

      {/* PIN MODAL */}
      {showPin && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 200, display: 'flex', alignItems: 'flex-end' }} onClick={() => { setShowPin(false); setPinRevealed(false) }}>
          <div style={{ background: 'var(--surface)', borderRadius: '20px 20px 0 0', padding: '24px 24px 40px', width: '100%' }} onClick={e => e.stopPropagation()}>
            <div style={{ width: 40, height: 4, borderRadius: 2, background: 'var(--border)', margin: '0 auto 20px' }} />
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                <i className="ti ti-eye" style={{ fontSize: 28, color: 'var(--primary)' }} aria-hidden="true" />
              </div>
              <p style={{ fontSize: 18, fontWeight: 600, color: 'var(--text1)', marginBottom: 6 }}>PIN-i juaj</p>
              <p style={{ fontSize: 14, color: 'var(--text2)', marginBottom: 20 }}>Shtypni butonin për të parë PIN-in</p>
              <div style={{ background: 'var(--app-bg)', borderRadius: 'var(--radius)', padding: '20px', letterSpacing: 8, fontSize: pinRevealed ? 32 : 20, fontWeight: 600, color: 'var(--text1)', fontFamily: 'var(--mono)' }}>
                {pinRevealed ? '4 8 2 1' : '• • • •'}
              </div>
            </div>
            <button
              className="btn-primary"
              style={{ marginBottom: 12 }}
              onClick={() => setPinRevealed(!pinRevealed)}
            >
              {pinRevealed ? 'Fshih PIN-in' : 'Shfaq PIN-in'}
            </button>
            <button className="btn-secondary" style={{ width: '100%' }} onClick={() => { setShowPin(false); setPinRevealed(false) }}>Mbyll</button>
          </div>
        </div>
      )}

      {/* ZËVENDËSO MODAL */}
      {showReplace && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 200, display: 'flex', alignItems: 'flex-end' }} onClick={() => setShowReplace(false)}>
          <div style={{ background: 'var(--surface)', borderRadius: '20px 20px 0 0', padding: '24px 24px 40px', width: '100%' }} onClick={e => e.stopPropagation()}>
            <div style={{ width: 40, height: 4, borderRadius: 2, background: 'var(--border)', margin: '0 auto 20px' }} />
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--warning-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                <i className="ti ti-replace" style={{ fontSize: 28, color: 'var(--warning)' }} aria-hidden="true" />
              </div>
              <p style={{ fontSize: 18, fontWeight: 600, color: 'var(--text1)', marginBottom: 6 }}>Zëvendëso kartën</p>
              <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.5, marginBottom: 20 }}>Karta e re do të dërgohet në adresën tuaj brenda 5-7 ditëve pune. Karta aktuale do të mbetet aktive deri në aktivizimin e kartës së re.</p>
              <div style={{ background: 'var(--app-bg)', borderRadius: 'var(--radius-sm)', padding: '12px 16px', textAlign: 'left' }}>
                {[
                  { label: 'Adresa', val: 'Rruga Myslym Shyri, Tiranë' },
                  { label: 'Kohëzgjatja', val: '5–7 ditë pune' },
                  { label: 'Tarifa', val: 'Falas' },
                ].map(r => (
                  <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '0.5px solid var(--border)' }}>
                    <span style={{ fontSize: 13, color: 'var(--text3)' }}>{r.label}</span>
                    <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--text1)' }}>{r.val}</span>
                  </div>
                ))}
              </div>
            </div>
            <button className="btn-primary" style={{ marginBottom: 12 }} onClick={() => setShowReplace(false)}>
              Konfirmo kërkesën
            </button>
            <button className="btn-secondary" style={{ width: '100%' }} onClick={() => setShowReplace(false)}>Anulo</button>
          </div>
        </div>
      )}

      <header className="screen-header" style={{ position: 'sticky', top: 0, zIndex: 10 }}>
        <button className="back-btn" onClick={() => navigate('/dashboard')} aria-label="Kthehu">
          <i className="ti ti-arrow-left" aria-hidden="true" />
        </button>
        <h1 className="screen-title">Karta ime</h1>
      </header>

      <div className="scroll-area">
        <div style={{ height: 12 }} />

        {/* Card Visual */}
        <div style={{ margin: '0 18px 14px', height: 148, borderRadius: 'var(--radius)', background: 'linear-gradient(135deg, #1A4CAF 0%, #2D6BE4 60%, #4F8AEA 100%)', padding: 20, color: '#fff', position: 'relative', overflow: 'hidden' }}>
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
          {isBlocked && (
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              <i className="ti ti-lock" style={{ fontSize: 20, color: '#fff' }} aria-hidden="true" />
              <span style={{ color: '#fff', fontWeight: 600, fontSize: 15 }}>Karta e bllokuar</span>
            </div>
          )}
          <i className="ti ti-brand-mastercard" style={{ position: 'absolute', bottom: 16, right: 16, fontSize: 22, opacity: 0.8 }} aria-hidden="true" />
        </div>

        {/* Card actions */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, padding: '0 18px', marginBottom: 16 }}>
          {[
            { icon: isBlocked ? 'ti-lock-open' : 'ti-lock', label: isBlocked ? 'Zhblloko' : 'Blloko', action: () => setShowBlock(true), color: isBlocked ? 'var(--success)' : 'var(--red)', bg: isBlocked ? 'var(--success-bg)' : 'var(--red-bg)' },
            { icon: 'ti-eye', label: 'PIN-i', action: () => setShowPin(true), color: 'var(--primary)', bg: 'var(--primary-light)' },
            { icon: 'ti-replace', label: 'Zëvendëso', action: () => setShowReplace(true), color: 'var(--warning)', bg: 'var(--warning-bg)' },
          ].map(a => (
            <div key={a.label} onClick={a.action} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, background: a.bg, borderRadius: 'var(--radius-sm)', padding: '12px 8px 10px', cursor: 'pointer', border: '0.5px solid var(--border)' }}>
              <i className={`ti ${a.icon}`} style={{ fontSize: 20, color: a.color }} aria-hidden="true" />
              <span style={{ fontSize: 11, color: a.color, fontWeight: 600 }}>{a.label}</span>
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

        {/* Buxheti */}
        <p className="section-title">Buxheti sot</p>
        <div style={{ padding: '0 18px', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 12 }}>
          {[
            { label: 'Buxhet ditor i blerjes', used: 50000, total: 100000, color: 'var(--primary)' },
            { label: 'Buxhet ditor i ATM', used: 0, total: 30000, color: 'var(--success)' },
            { label: 'Buxhet javor i transfertave', used: 15000, total: 50000, color: 'var(--warning)' },
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
