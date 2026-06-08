import { useNavigate } from 'react-router-dom'

export default function TransferSuccess() {
  const navigate = useNavigate()

  return (
    <div style={{ background: 'var(--surface)', height: '100dvh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 24px 32px', overflowY: 'auto' }}>
      {/* Icon */}
      <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--success-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
        <i className="ti ti-check" style={{ fontSize: 32, color: 'var(--success)' }} aria-hidden="true" />
      </div>

      <h1 style={{ fontSize: 22, fontWeight: 600, color: 'var(--text1)', letterSpacing: '-0.5px', marginBottom: 8, textAlign: 'center' }}>Transfertë e kryer!</h1>
      <p style={{ fontSize: 14, color: 'var(--text2)', marginBottom: 28, textAlign: 'center', lineHeight: 1.5 }}>
        Paratë u dërguan me sukses<br />te Nensi Berberi
      </p>

      {/* Details */}
      <div className="confirm-detail" style={{ width: '100%', marginBottom: 28 }}>
        {[
          { key: 'Marrësi', val: 'Nensi Berberi', valStyle: {} },
          { key: 'Shuma', val: '5,000 ALL', valStyle: { color: 'var(--primary)', fontSize: 16 } },
          { key: 'Data', val: '8 Qershor 2026', valStyle: {} },
          { key: 'Lloji', val: 'Brenda bankës', valStyle: {} },
          { key: 'Referenca', val: 'TRF-2026-0008421', valStyle: { fontFamily: 'var(--mono)', fontSize: 12 } },
          { key: 'Statusi', val: null, valStyle: {} },
        ].map(row => (
          <div className="confirm-row" key={row.key}>
            <span className="confirm-key">{row.key}</span>
            {row.val ? (
              <span className="confirm-val" style={row.valStyle}>{row.val}</span>
            ) : (
              <span className="pill-success"><i className="ti ti-check" aria-hidden="true" /> Kryer</span>
            )}
          </div>
        ))}
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: 10, width: '100%', marginTop: 'auto' }}>
        <button className="btn-secondary">
          <i className="ti ti-download" style={{ fontSize: 16 }} aria-hidden="true" />
          Shkarko
        </button>
        <button className="btn-primary" style={{ flex: 1 }} onClick={() => navigate('/dashboard')}>
          Kreu
        </button>
      </div>
    </div>
  )
}
