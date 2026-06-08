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

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <>
      {/* Header */}
      <header style={{ background: 'var(--surface)', padding: '12px 18px 14px', borderBottom: '0.5px solid var(--border)', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <div>
            <p style={{ fontSize: 13, color: 'var(--text2)' }}>Mirëmëngjes,</p>
            <p style={{ fontSize: 17, fontWeight: 600, color: 'var(--text1)', letterSpacing: '-0.3px' }}>Arla</p>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{ position: 'relative', cursor: 'pointer' }}>
              <i className="ti ti-bell" style={{ fontSize: 22, color: 'var(--text2)' }} aria-hidden="true" />
              <div style={{ position: 'absolute', top: -1, right: -2, width: 8, height: 8, borderRadius: '50%', background: 'var(--red)', border: '1.5px solid #fff' }} />
            </div>
            <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 600, color: 'var(--primary)' }}>AM</div>
          </div>
        </div>

        {/* Balance Card */}
        <div style={{ background: 'var(--primary)', borderRadius: 'var(--radius)', padding: 18, color: '#fff', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -20, top: -30, width: 130, height: 130, borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />
          <p style={{ fontSize: 12, opacity: 0.75, marginBottom: 10 }}>AL47 2121 1009 0000 0002 3569 8741</p>
          <p style={{ fontSize: 11, opacity: 0.7, marginBottom: 4 }}>Gjendja</p>
          <p style={{ fontSize: 30, fontWeight: 600, letterSpacing: '-1.2px' }}>248,350 <span style={{ fontSize: 17, opacity: 0.75 }}>ALL</span></p></div>
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
        <div style={{ display: 'flex', gap: 8, padding: '0 18px' }}>
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
