import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
import { useTheme } from '../ThemeContext'

const transactions = [
  { id: 1, name: 'Neptun Electronics', date: 'Sot, 10:24', amount: '-8,499 L', type: 'out', icon: 'ti-shopping-cart', iconBg: '#EBF1FD', iconColor: 'var(--primary)' },
  { id: 2, name: 'Pagesa e rrogës', date: 'Dje, 09:00', amount: '+120,000 L', type: 'in', icon: 'ti-arrow-down-circle', iconBg: 'var(--success-bg)', iconColor: 'var(--success)' },
  { id: 3, name: 'Fatura e dritave (OSHEE)', date: '4 Qershor', amount: '-4,200 L', type: 'out', icon: 'ti-bolt', iconBg: 'var(--warning-bg)', iconColor: 'var(--warning)' },
  { id: 4, name: 'Transfertë tek Nensi', date: '3 Qershor', amount: '-5,000 L', type: 'out', icon: 'ti-send', iconBg: '#EBF1FD', iconColor: 'var(--primary)' },
  { id: 5, name: 'Rimbushje celulari Vodafone', date: '2 Qershor', amount: '-500 L', type: 'out', icon: 'ti-device-mobile', iconBg: 'var(--purple-bg)', iconColor: 'var(--purple)' },
  { id: 6, name: 'Supermarket Conad', date: '1 Qershor', amount: '-2,850 L', type: 'out', icon: 'ti-shopping-bag', iconBg: 'var(--warning-bg)', iconColor: 'var(--warning)' },
]

const notifications = [
  { id: 1, icon: 'ti-arrow-down-circle', iconBg: 'var(--success-bg)', iconColor: 'var(--success)', title: 'Llogaria juaj u kreditua me 120,000 ALL', desc: 'Pagesa e rrogës u pranua me sukses', time: 'Dje, 09:00' },
  { id: 2, icon: 'ti-bolt', iconBg: 'var(--warning-bg)', iconColor: 'var(--warning)', title: 'Fatura e dritave OSHEE paguar', desc: '-4,200 ALL u pagua automatikisht', time: '4 Qershor' },
  { id: 3, icon: 'ti-send', iconBg: '#EBF1FD', iconColor: 'var(--primary)', title: 'Transfertë e kryer me sukses', desc: '-5,000 ALL tek Nensi Berberi', time: '3 Qershor' },
  { id: 4, icon: 'ti-shield-check', iconBg: 'var(--success-bg)', iconColor: 'var(--success)', title: 'Hyrje e re e verifikuar', desc: 'iPhone 14 Pro — Tiranë, AL', time: '5 Qershor' },
  { id: 5, icon: 'ti-building-bank', iconBg: '#EBF1FD', iconColor: 'var(--primary)', title: 'Ofertë e re nga ArlaBank', desc: 'Kredi me interes 3.5% — Shiko tani', time: '6 Qershor' },
]

function AiChat() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Përshëndetje! Jam asistenti virtual i ArlaBank. Si mund t\'ju ndihmoj sot?' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return
    const userMsg = { role: 'user', content: input }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    const q = input.toLowerCase()
    let answer = 'Për këtë pyetje ju lutemi kontaktoni bankën në +355 4 123 4567.'
    if (q.includes('transfert') || q.includes('dërgoj') || q.includes('dergoj')) {
      answer = 'Për të bërë një transfertë, shkoni te butoni "Dërgo" në faqen kryesore. Transfertat brenda ArlaBank janë të menjëhershme dhe falas. Transfertat jashtë bankës kushtojnë 150 ALL dhe zgjasin 1-2 ditë pune.'
    } else if (q.includes('bllok') || q.includes('kartë') || q.includes('karte')) {
      answer = 'Për të bllokuar kartën tuaj, shkoni te faqja "Karta" → butoni "Blloko". Karta bllokohet menjëherë. Mund ta zhbllokoni në çdo moment nga e njëjta faqe.'
    } else if (q.includes('pin')) {
      answer = 'PIN-in tuaj mund ta shikoni te faqja "Karta" → butoni "PIN-i". Për siguri, PIN-i shfaqet vetëm pas konfirmimit. Nëse dëshironi të ndryshoni PIN-in, vizitoni degën më të afërt.'
    } else if (q.includes('orar') || q.includes('deg')) {
      answer = 'Degët e ArlaBank janë të hapura nga e hëna deri në të premten, nga ora 08:00 deri 16:00. ATM-të janë të disponueshme 24 orë.'
    } else if (q.includes('kurs') || q.includes('valut') || q.includes('euro') || q.includes('dollar')) {
      answer = 'Kurset aktuale: EUR/ALL = 108.40, USD/ALL = 99.10, GBP/ALL = 125.80. Mund t\'i gjeni gjithmonë në faqen kryesore.'
    } else if (q.includes('llogari') || q.includes('hap')) {
      answer = 'Për të hapur llogari të re, vizitoni degën më të afërt me kartën tuaj të identitetit. Na kontaktoni në +355 4 123 4567.'
    } else if (q.includes('tarif') || q.includes('komision')) {
      answer = 'Tarifat: Transferta brenda ArlaBank — falas. Jashtë bankës — 150 ALL. ATM ArlaBank — falas. ATM tjetër — 200 ALL.'
    } else if (q.includes('fjalëkalim') || q.includes('fjalekalim') || q.includes('password')) {
      answer = 'Nëse keni harruar fjalëkalimin, klikoni "Keni harruar fjalëkalimin?" në faqen e Login-it dhe do t'ju dërgohet kod verifikimi.'
    } else if (q.includes('fatur')) {
      answer = 'Pagesat e faturave (OSHEE, UKT, Vodafone) mund t'i bëni nga faqja "Dërgo". Faturat e regjistruara paguhen automatikisht çdo muaj.'
    } else if (q.includes('ndihm') || q.includes('problem')) {
      answer = 'Për ndihmë kontaktoni: +355 4 123 4567 (E Hënë–E Premte 08:00–20:00) ose info@arlabank.al.'
    }
    setMessages(prev => [...prev, { role: 'assistant', content: answer }])
    setLoading(false)
  }

  return (
    <div style={{ background: 'var(--surface)', borderRadius: 'var(--radius)', border: '0.5px solid var(--border)', overflow: 'hidden' }}>
      <div style={{ padding: '12px 14px', borderBottom: '0.5px solid var(--border)', display: 'flex', alignItems: 'center', gap: 8, background: 'var(--primary)' }}>
        <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <i className="ti ti-building-bank" style={{ fontSize: 13, color: '#fff' }} aria-hidden="true" />
        </div>
        <p style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>Asistenti virtual ArlaBank</p>
        <div style={{ marginLeft: 'auto', width: 8, height: 8, borderRadius: '50%', background: '#4ADE80' }} />
      </div>

      <div style={{ height: 220, overflowY: 'auto', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start', gap: 8 }}>
            {m.role === 'assistant' && (
              <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                <i className="ti ti-building-bank" style={{ fontSize: 12, color: 'var(--primary)' }} aria-hidden="true" />
              </div>
            )}
            <div style={{
              maxWidth: '78%',
              padding: '8px 12px',
              borderRadius: m.role === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
              background: m.role === 'user' ? 'var(--primary)' : 'var(--app-bg)',
              color: m.role === 'user' ? '#fff' : 'var(--text1)',
              fontSize: 13,
              lineHeight: 1.5,
            }}>
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <i className="ti ti-building-bank" style={{ fontSize: 12, color: 'var(--primary)' }} aria-hidden="true" />
            </div>
            <div style={{ background: 'var(--app-bg)', borderRadius: '14px 14px 14px 4px', padding: '8px 12px', fontSize: 13, color: 'var(--text3)' }}>
              Duke shkruar...
            </div>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', gap: 8, padding: '10px 12px', borderTop: '0.5px solid var(--border)' }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          placeholder="Shkruaj një pyetje..."
          style={{ flex: 1, height: 38, borderRadius: 10, border: '1px solid var(--border)', background: 'var(--app-bg)', padding: '0 12px', fontSize: 13, fontFamily: 'var(--font)', color: 'var(--text1)', outline: 'none' }}
        />
        <div onClick={sendMessage} style={{ width: 38, height: 38, borderRadius: 10, background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
          <i className="ti ti-send" style={{ fontSize: 16, color: '#fff' }} aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}

export default function Dashboard() {
  const navigate = useNavigate()
  const [showNotifications, setShowNotifications] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [activeSettingsItem, setActiveSettingsItem] = useState(null)
  const { darkMode, setDarkMode } = useTheme()

  const settingsItems = [
    { icon: 'ti-user', label: 'Profili im', sub: 'Të dhënat personale', info: [
      { label: 'Emri', val: 'Arla Mitrushi' },
      { label: 'Email', val: 'arla.mitrushi@email.com' },
      { label: 'Telefon', val: '+355 69 123 4567' },
      { label: 'Nr. Klienti', val: '1234 5678' },
    ]},
    { icon: 'ti-shield-lock', label: 'Siguria', sub: 'PIN, biometrika, 2FA', info: [
      { label: 'PIN', val: '••••' },
      { label: 'Face ID', val: 'Aktivizuar' },
      { label: '2FA', val: 'Aktivizuar' },
      { label: 'Ndryshimi i fundit', val: '1 Qershor 2026' },
    ]},
    { icon: 'ti-bell', label: 'Njoftimet', sub: 'Menaxho njoftimet', info: [
      { label: 'Transaksionet', val: 'Aktivizuar' },
      { label: 'Ofertat', val: 'Aktivizuar' },
      { label: 'Siguria', val: 'Aktivizuar' },
      { label: 'Email', val: 'Çaktivizuar' },
    ]},
    { icon: 'ti-language', label: 'Gjuha', sub: 'Shqip', info: [
      { label: 'Gjuha aktuale', val: 'Shqip' },
      { label: 'Të disponueshme', val: 'Shqip, English, Italiano' },
    ]},
    { icon: 'ti-help-circle', label: 'Ndihmë', sub: 'FAQ dhe kontakt', info: [
      { label: 'Telefon', val: '+355 4 123 4567' },
      { label: 'Email', val: 'info@arlabank.al' },
      { label: 'Orari', val: 'E Hënë–E Premte 08:00–20:00' },
    ]},
  ]

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
                    <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text1)', lineHeight: 1.4 }}>{n.title}</p>
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
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', borderBottom: '0.5px solid var(--border)' }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 600, color: 'var(--primary)' }}>AM</div>
                <div>
                  <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--text1)' }}>Arla Mitrushi</p>
                  <p style={{ fontSize: 12, color: 'var(--text3)' }}>Klient që nga 2021</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 18px', borderBottom: '0.5px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <i className={`ti ${darkMode ? 'ti-moon' : 'ti-sun'}`} style={{ fontSize: 20, color: 'var(--text2)' }} aria-hidden="true" />
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--text1)' }}>{darkMode ? 'Night Mode' : 'Day Mode'}</p>
                    <p style={{ fontSize: 12, color: 'var(--text3)' }}>Aktiv</p>
                  </div>
                </div>
                <div className={`toggle-pill ${darkMode ? 'on' : 'off'}`} onClick={() => setDarkMode(!darkMode)} />
              </div>

              {settingsItems.map(item => (
                <div key={item.label} onClick={() => setActiveSettingsItem(activeSettingsItem === item.label ? null : item.label)} style={{ borderBottom: '0.5px solid var(--border)', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', padding: '14px 18px', gap: 12 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className={`ti ${item.icon}`} style={{ fontSize: 17, color: 'var(--primary)' }} aria-hidden="true" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--text1)' }}>{item.label}</p>
                      <p style={{ fontSize: 12, color: 'var(--text3)' }}>{item.sub}</p>
                    </div>
                    <i className={`ti ${activeSettingsItem === item.label ? 'ti-chevron-up' : 'ti-chevron-right'}`} style={{ fontSize: 16, color: 'var(--text3)' }} aria-hidden="true" />
                  </div>
                  {activeSettingsItem === item.label && (
                    <div style={{ background: 'var(--app-bg)', padding: '8px 18px 12px' }}>
                      {item.info.map(r => (
                        <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '0.5px solid var(--border)' }}>
                          <span style={{ fontSize: 12, color: 'var(--text3)' }}>{r.label}</span>
                          <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--text1)' }}>{r.val}</span>
                        </div>
                      ))}
                    </div>
                  )}
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
              <div style={{ position: 'absolute', top: -1, right: -2, width: 8, height: 8, borderRadius: '50%', background: 'var(--red)', border: '1.5px solid var(--surface)' }} />
            </div>
            <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 600, color: 'var(--primary)', cursor: 'pointer' }} onClick={() => { setShowSettings(true); setShowNotifications(false) }}>AM</div>
          </div>
        </div>

        <div style={{ background: 'var(--primary)', borderRadius: 'var(--radius)', padding: 18, color: '#fff', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -20, top: -30, width: 130, height: 130, borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />
          <p style={{ fontSize: 12, opacity: 0.75, marginBottom: 10 }}>AL47 2121 1009 0000 0002 3569 8741</p>
          <p style={{ fontSize: 11, opacity: 0.7, marginBottom: 4 }}>Gjendja</p>
          <p style={{ fontSize: 30, fontWeight: 600, letterSpacing: '-1.2px' }}>248,350 <span style={{ fontSize: 17, opacity: 0.75 }}>ALL</span></p>
        </div>
      </header>

      <div className="scroll-area">
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

        <p className="section-title">Kursi i këmbimit</p>
        <div style={{ display: 'flex', gap: 8, padding: '0 18px', marginBottom: 4 }}>
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

        <p className="section-title">Asistenti virtual</p>
        <div style={{ margin: '0 18px 16px' }}>
          <AiChat />
        </div>
      </div>

      <BottomNav />
    </>
  )
}
