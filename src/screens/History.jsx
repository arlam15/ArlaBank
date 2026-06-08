import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'

const allTx = [
  { id: 1, name: 'Neptun Electronics', date: 'Sot, 10:24', amount: '-8,499 L', type: 'out', icon: 'ti-shopping-cart', iconBg: '#EBF1FD', iconColor: 'var(--primary)', cat: 'Blerje' },
  { id: 2, name: 'Pagesa e rrogës', date: 'Dje, 09:00', amount: '+120,000 L', type: 'in', icon: 'ti-arrow-down-circle', iconBg: 'var(--success-bg)', iconColor: 'var(--success)', cat: 'Të ardhura' },
  { id: 3, name: 'Fatura e dritave (OSHEE)', date: '4 Qershor', amount: '-4,200 L', type: 'out', icon: 'ti-bolt', iconBg: 'var(--warning-bg)', iconColor: 'var(--warning)', cat: 'Fatura' },
  { id: 4, name: 'Transfertë tek Nensi', date: '3 Qershor', amount: '-5,000 L', type: 'out', icon: 'ti-send', iconBg: '#EBF1FD', iconColor: 'var(--primary)', cat: 'Transferta' },
  { id: 5, name: 'Rimbushje celulari Vodafone', date: '2 Qershor', amount: '-500 L', type: 'out', icon: 'ti-device-mobile', iconBg: 'var(--purple-bg)', iconColor: 'var(--purple)', cat: 'Shërbime' },
  { id: 6, name: 'Supermarket Conad', date: '1 Qershor', amount: '-2,850 L', type: 'out', icon: 'ti-shopping-bag', iconBg: 'var(--warning-bg)', iconColor: 'var(--warning)', cat: 'Blerje' },
  { id: 7, name: 'Fatura e ujit (UKT)', date: '31 Maj', amount: '-1,800 L', type: 'out', icon: 'ti-droplet', iconBg: '#EBF1FD', iconColor: 'var(--primary)', cat: 'Fatura' },
  { id: 8, name: 'Transfertë tek Marku', date: '29 Maj', amount: '-3,000 L', type: 'out', icon: 'ti-send', iconBg: '#EBF1FD', iconColor: 'var(--primary)', cat: 'Transferta' },
  { id: 9, name: 'Kafeja Urban', date: '28 Maj', amount: '-350 L', type: 'out', icon: 'ti-coffee', iconBg: 'var(--warning-bg)', iconColor: 'var(--warning)', cat: 'Blerje' },
  { id: 10, name: 'Pagesa për qira', date: '27 Maj', amount: '-35,000 L', type: 'out', icon: 'ti-home', iconBg: 'var(--purple-bg)', iconColor: 'var(--purple)', cat: 'Shpenzime' },
]

export default function History() {
  const navigate = useNavigate()

  return (
    <>
      <header style={{ background: 'var(--surface)', padding: '12px 18px 14px', borderBottom: '0.5px solid var(--border)', position: 'sticky', top: 0, zIndex: 10 }}>
        <h1 style={{ fontSize: 17, fontWeight: 600, color: 'var(--text1)', letterSpacing: '-0.3px', marginBottom: 12 }}>Historiku</h1>

        {/* Search bar */}
        <div style={{ height: 40, background: 'var(--app-bg)', borderRadius: 10, display: 'flex', alignItems: 'center', padding: '0 12px', gap: 8 }}>
          <i className="ti ti-search" style={{ fontSize: 16, color: 'var(--text3)' }} aria-hidden="true" />
          <span style={{ fontSize: 14, color: 'var(--text3)' }}>Kërko transaksionet…</span>
        </div>
      </header>

      <div className="scroll-area">
        {/* Filter chips */}
        <div style={{ display: 'flex', gap: 8, padding: '12px 18px', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {['Të gjitha', 'Blerje', 'Transferta', 'Fatura', 'Të ardhura'].map((f, i) => (
            <div key={f} style={{
              padding: '6px 14px',
              borderRadius: 20,
              background: i === 0 ? 'var(--primary)' : 'var(--surface)',
              color: i === 0 ? '#fff' : 'var(--text2)',
              border: i === 0 ? 'none' : '0.5px solid var(--border)',
              fontSize: 13, fontWeight: 500, cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0
            }}>{f}</div>
          ))}
        </div>

        {/* Month header */}
        <div style={{ padding: '4px 18px 4px', fontSize: 12, color: 'var(--text3)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Qershori 2026</div>

        <div style={{ background: 'var(--surface)', borderRadius: 'var(--radius)', margin: '4px 18px', overflow: 'hidden', border: '0.5px solid var(--border)' }}>
          {allTx.map(tx => (
            <div className="tx-item" key={tx.id}>
              <div className="tx-icon" style={{ background: tx.iconBg }}>
                <i className={`ti ${tx.icon}`} style={{ color: tx.iconColor }} aria-hidden="true" />
              </div>
              <div className="tx-info">
                <p className="tx-name">{tx.name}</p>
                <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginTop: 2 }}>
                  <span style={{ fontSize: 11, color: 'var(--text3)' }}>{tx.date}</span>
                  <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--text3)', display: 'inline-block' }} />
                  <span style={{ fontSize: 11, color: 'var(--text3)' }}>{tx.cat}</span>
                </div>
              </div>
              <p className={`tx-amount ${tx.type}`}>{tx.amount}</p>
            </div>
          ))}
        </div>
        <div style={{ height: 8 }} />
      </div>
      <BottomNav />
    </>
  )
}
