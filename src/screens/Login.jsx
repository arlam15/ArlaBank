import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [focused, setFocused] = useState(null)

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
          <i className="ti ti-fingerprint" style={{ fontSize: 24, color: 'var(--primary)' }} aria-hidden="true" />
        </div>
        <span style={{ fontSize: 13, color: 'var(--text2)' }}>Hyni me Face ID</span>
      </div>

      <button className="btn-primary" onClick={() => navigate('/dashboard')}>
        Hyr në llogari
      </button>

      <p style={{ textAlign: 'center', marginTop: 18, fontSize: 13, color: 'var(--primary)', cursor: 'pointer' }}>
        Keni harruar fjalëkalimin?
      </p>

      {/* Footer note */}
      <p style={{ textAlign: 'center', marginTop: 'auto', paddingTop: 32, fontSize: 12, color: 'var(--text3)', lineHeight: 1.6 }}>
        <i className="ti ti-shield-check" style={{ fontSize: 14, verticalAlign: -2, marginRight: 4 }} aria-hidden="true" />
        Aktivizoni mobile
      </p>
    </div>
  )
}
