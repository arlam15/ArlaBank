import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const transferTypes = [
  { id: 'internal', icon: 'ti-users', name: 'Brenda bankës', desc: 'E menjëhershme' },
  { id: 'local', icon: 'ti-building-bank', name: 'Banka tjetër', desc: '1–2 ditë pune' },
  { id: 'intl', icon: 'ti-world', name: 'Ndërkombëtare', desc: 'SWIFT / SEPA' },
  { id: 'phone', icon: 'ti-device-mobile', name: 'Nr. telefoni', desc: 'Me kontaktet' },
]

const contacts = [
  { initials: 'NB', name: 'Nensi', bg: '#EBF1FD', color: 'var(--primary)', iban: 'AL47 2121 1009 0000 0002 3569 8741' },
  { initials: 'MA', name: 'Marku', bg: 'var(--success-bg)', color: 'var(--success)', iban: 'AL47 2121 1009 0000 0001 2345 6789' },
  { initials: 'ER', name: 'Erjon', bg: 'var(--warning-bg)', color: 'var(--warning)', iban: 'AL47 2121 1009 0000 0003 9876 5432' },
  { initials: 'SI', name: 'Sindi', bg: 'var(--purple-bg)', color: 'var(--purple)', iban: 'AL47 2121 1009 0000 0004 1111 2222' },
]

export default function Transfer() {
  const navigate = useNavigate()
  const [selectedType, setSelectedType] = useState('internal')
  const [selectedContact, setSelectedContact] = useState(contacts[0])
  const [amount, setAmount] = useState('5,000')
  const [desc, setDesc] = useState('Për drekën e djeshme')

  return (
    <>
      <header className="screen-header" style={{ position: 'sticky', top: 0, zIndex: 10 }}>
        <button className="back-btn" onClick={() => navigate('/dashboard')} aria-label="Kthehu">
          <i className="ti ti-arrow-left" aria-hidden="true" />
        </button>
        <h1 className="screen-title">Dërgo para</h1>
      </header>

      <div className="scroll-area">
        {/* Transfer type grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, padding: '16px 18px 4px' }}>
          {transferTypes.map(t => (
            <div
              key={t.id}
              onClick={() => setSelectedType(t.id)}
              style={{
                background: selectedType === t.id ? 'var(--primary-light)' : 'var(--surface)',
                borderRadius: 'var(--radius)',
                padding: '14px 14px 12px',
                border: selectedType === t.id ? '1.5px solid var(--primary)' : '0.5px solid var(--border)',
                cursor: 'pointer',
                transition: 'border-color 0.15s, background 0.15s',
              }}
            >
              <i className={`ti ${t.icon}`} style={{ fontSize: 20, color: 'var(--primary)', display: 'block', marginBottom: 6 }} aria-hidden="true" />
              <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text1)' }}>{t.name}</p>
              <p style={{ fontSize: 11, color: 'var(--text2)', marginTop: 2 }}>{t.desc}</p>
            </div>
          ))}
        </div>

        {/* Recent contacts */}
        <p className="section-title">Kontaktet e fundit</p>
        <div style={{ display: 'flex', gap: 14, padding: '0 18px 14px', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {contacts.map(c => (
            <div
              className="contact-chip"
              key={c.name}
              onClick={() => setSelectedContact(c)}
            >
              <div
                className="contact-av"
                style={{
                  background: c.bg,
                  color: c.color,
                  outline: selectedContact.name === c.name ? '2px solid var(--primary)' : 'none',
                  outlineOffset: 2,
                }}
              >{c.initials}</div>
              <span>{c.name}</span>
            </div>
          ))}
          <div className="contact-chip">
            <div className="contact-av" style={{ background: 'var(--app-bg)', color: 'var(--text3)', border: '1px dashed var(--border)' }}>
              <i className="ti ti-plus" style={{ fontSize: 17 }} aria-hidden="true" />
            </div>
            <span>Shto</span>
          </div>
        </div>

        {/* Recipient info */}
        <div style={{ padding: '0 18px' }}>
          <label className="form-label">Marrësi</label>
          <div className="form-input has-value">
            <i className="ti ti-user" aria-hidden="true" />
            <span>{selectedContact.name === 'Nensi' ? 'Nensi Berberi' : `${selectedContact.name} (kontakt)`}</span>
          </div>

          <label className="form-label">IBAN</label>
          <div className="form-input has-value">
            <i className="ti ti-hash" aria-hidden="true" />
            <span style={{ fontSize: 12, fontFamily: 'var(--mono)' }}>{selectedContact.iban}</span>
          </div>
        </div>

        {/* Amount */}
        <div className="amount-box">
          <p style={{ fontSize: 11, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Shuma</p>
          <p className="amount-display">{amount} <span style={{ fontSize: 20, color: 'var(--text3)' }}>L</span></p>
          <p className="amount-sub">Gjendja: 184,200 ALL</p>
        </div>

        {/* Numpad quick amounts */}
        <div style={{ display: 'flex', gap: 8, padding: '0 18px 4px' }}>
          {['1,000', '2,000', '5,000', '10,000'].map(a => (
            <div
              key={a}
              onClick={() => setAmount(a)}
              style={{
                flex: 1,
                padding: '8px 0',
                textAlign: 'center',
                borderRadius: 10,
                background: amount === a ? 'var(--primary-light)' : 'var(--surface)',
                border: amount === a ? '1px solid var(--primary)' : '0.5px solid var(--border)',
                fontSize: 12,
                fontWeight: 600,
                color: amount === a ? 'var(--primary)' : 'var(--text2)',
                cursor: 'pointer',
              }}
            >{a}</div>
          ))}
        </div>

        {/* Description */}
        <div style={{ padding: '14px 18px 0' }}>
          <label className="form-label">Përshkrim (opsional)</label>
          <div className="form-input has-value">
            <i className="ti ti-message" aria-hidden="true" />
            <span>{desc}</span>
          </div>
        </div>

        <div style={{ padding: '8px 18px 16px' }}>
          <button className="btn-primary" onClick={() => navigate('/transfer/success')}>
            Konfirmo transfertën
          </button>
          <p style={{ textAlign: 'center', marginTop: 10, fontSize: 12, color: 'var(--text3)' }}>
            <i className="ti ti-shield-check" style={{ fontSize: 14, verticalAlign: -2, marginRight: 4 }} aria-hidden="true" />
            Konfirmim me 2FA do të kërkohet
          </p>
        </div>
      </div>
    </>
  )
}
