import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [focused, setFocused] = useState(null)
  const [showCode, setShowCode] = useState(false)
  const [isNewClient, setIsNewClient] = useState(null)

  return (
    <div style={{ background: '#fff', height: '100dvh', display: 'flex', flexDirection: 'column', padding: '32px 24px 32px', overflowY: 'auto' }}>
      {/* Brand */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 48 }}>
        <div style={{ width: 38, height: 38, background: 'var(--primary)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <i className="ti ti-building-bank" style={{ fontSize: 20, color: '#fff' }} aria-hidden="true" />
        </div>
        <span style={{ fontSize: 18, fontWeight: 600, color: 'var(--text1)', letterSpacing: '-0.3px' }}>ArlaBank</span>
      </div>

      <h1 style={{ fontSize: 26, fontWeight: 600, color: 'var(--text1)', letterSpacing: '-0.6px', marginBottom: 6 }}>Mirë se vini</h1>
      <p style={{ fontSize: 14, color: 'var(--text2)', marginBottom: 32, lineHeight: 1.5 }}>Hyni në llogarinë tuaj bankare</p>
      {isNewClient === null && (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
    <div
      onClick={() => setIsNewClient(false)}
      style={{ height: 52, background: 'var(--primary)', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}
    >
      Hyni në llogarinë tuaj
    </div>
    <div
      onClick={() => setIsNewClient(true)}
      style={{ height: 52, background: 'var(--app-bg)', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontWeight: 600, fontSize: 15, cursor: 'pointer', border: '1.5px solid var(--primary)' }}
    >
      Jeni klient i ri? Hapni llogari
    </div>
  </div>
)}

{isNewClient === true && (
  <div style={{ background: 'var(--primary-light)', borderRadius: 'var(--radius)', padding: '20px 16px', textAlign: 'center', marginBottom: 28 }}>
    <i className="ti ti-phone" style={{ fontSize: 32, color: 'var(--primary)', marginBottom: 10, display: 'block' }} aria-hidden="true" />
    <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--text1)', marginBottom: 6 }}>Na kontaktoni</p>
    <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.5 }}>Për të hapur llogari të re, vizitoni degën më të afërt ose telefononi <strong>+355 4 123 4567</strong></p>
    <p style={{ marginTop: 14, fontSize: 13, color: 'var(--primary)', cursor: 'pointer' }} onClick={() => setIsNewClient(null)}>← Kthehuni</p>
  </div>
)}

{isNewClient === false && (
  <label className="form-label">Numri i klientit</label>
      <div className={`form-input ${focused === 'id' ? 'focused' : ''} has-value`} onClick={() => setFocused('id')}>
        <i className="ti ti-user" aria-hidden="true" />
        <span>1234 5678</span>
      </div>

      {/* Fjalëkalimi */}
      <label className="form-label">Fjalëkalimi</label>
      <div className={`form-input ${focused === 'pw' ? 'focused' : ''} has-value`} onClick={() => setFocused('pw')}>
        <i className="ti ti-lock" aria-hidden="true" />
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {[1,2,3,4,5,6].map(d => (
            <div key={d} style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--text1)' }} />
          ))}
        </div>
      </div>

      {/* Biometrika */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '8px 0 28px', cursor: 'pointer' }}>
        <div style={{ width: 46, height: 46, background: 'var(--app-bg)', borderRadius: 13, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <i className="ti ti-face-id" style={{ fontSize: 24, color: 'var(--primary)' }} aria-hidden="true" />
        </div>
        <span style={{ fontSize: 13, color: 'var(--text2)' }}>Hyni me Face ID</span>
      </div>

      <button className="btn-primary" onClick={() => navigate('/dashboard')}>
        Hyr në llogari
      </button>

      const [showCode, setShowCode] = useState(false)

...

<p style={{ textAlign: 'center', marginTop: 18, fontSize: 13, color: 'var(--primary)', cursor: 'pointer' }} onClick={() => setShowCode(true)}>
  Keni harruar fjalëkalimin?
</p>

{showCode && (
  <div style={{ marginTop: 16, background: 'var(--success-bg)', borderRadius: 'var(--radius-sm)', padding: '12px 16px', textAlign: 'center' }}>
    <i className="ti ti-check" style={{ fontSize: 16, color: 'var(--success)', marginRight: 6 }} aria-hidden="true" />
    <span style={{ fontSize: 13, color: 'var(--success)', fontWeight: 500 }}>Kodi u dërgua në numrin tuaj!</span>
  </div>
)}

      {/* Footer note */}
      <p style={{ textAlign: 'center', marginTop: 'auto', paddingTop: 32, fontSize: 12, color: 'var(--text3)', lineHeight: 1.6 }}>
        <i className="ti ti-shield-check" style={{ fontSize: 14, verticalAlign: -2, marginRight: 4 }} aria-hidden="true" />
        Aktivizoni mobile
      </p>
)}
      

      {/* Numri */}
      <label className="form-label">Numri i klientit</label>
      <div className={`form-input ${focused === 'id' ? 'focused' : ''} has-value`} onClick={() => setFocused('id')}>
        <i className="ti ti-user" aria-hidden="true" />
        <span>1234 5678</span>
      </div>

      {/* Fjalëkalimi */}
      <label className="form-label">Fjalëkalimi</label>
      <div className={`form-input ${focused === 'pw' ? 'focused' : ''} has-value`} onClick={() => setFocused('pw')}>
        <i className="ti ti-lock" aria-hidden="true" />
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {[1,2,3,4,5,6].map(d => (
            <div key={d} style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--text1)' }} />
          ))}
        </div>
      </div>

      {/* Biometrika */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '8px 0 28px', cursor: 'pointer' }}>
        <div style={{ width: 46, height: 46, background: 'var(--app-bg)', borderRadius: 13, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <i className="ti ti-face-id" style={{ fontSize: 24, color: 'var(--primary)' }} aria-hidden="true" />
        </div>
        <span style={{ fontSize: 13, color: 'var(--text2)' }}>Hyni me Face ID</span>
      </div>

      <button className="btn-primary" onClick={() => navigate('/dashboard')}>
        Hyr në llogari
      </button>

      const [showCode, setShowCode] = useState(false)

...

<p style={{ textAlign: 'center', marginTop: 18, fontSize: 13, color: 'var(--primary)', cursor: 'pointer' }} onClick={() => setShowCode(true)}>
  Keni harruar fjalëkalimin?
</p>

{showCode && (
  <div style={{ marginTop: 16, background: 'var(--success-bg)', borderRadius: 'var(--radius-sm)', padding: '12px 16px', textAlign: 'center' }}>
    <i className="ti ti-check" style={{ fontSize: 16, color: 'var(--success)', marginRight: 6 }} aria-hidden="true" />
    <span style={{ fontSize: 13, color: 'var(--success)', fontWeight: 500 }}>Kodi u dërgua në numrin tuaj!</span>
  </div>
)}

      {/* Footer note */}
      <p style={{ textAlign: 'center', marginTop: 'auto', paddingTop: 32, fontSize: 12, color: 'var(--text3)', lineHeight: 1.6 }}>
        <i className="ti ti-shield-check" style={{ fontSize: 14, verticalAlign: -2, marginRight: 4 }} aria-hidden="true" />
        Aktivizoni mobile
      </p>
    </div>
  )
}
