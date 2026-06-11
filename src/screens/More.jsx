import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'

function KontaktContent() {
  const [showChat, setShowChat] = useState(false)
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
      answer = 'Për të bërë një transfertë, shkoni te butoni "Dërgo" në faqen kryesore. Transfertat brenda ArlaBank janë të menjëhershme dhe falas. Transfertat jashtë bankës kostojnë 150 ALL dhe zgjasin 1-2 ditë pune.'
    } else if (q.includes('bllok') || q.includes('kartë') || q.includes('karte')) {
      answer = 'Për të bllokuar kartën tuaj, shkoni te faqja "Karta" → butoni "Blloko". Karta bllokohet menjëherë. Mund ta zhbllokoni në çdo moment nga e njëjta faqe.'
    } else if (q.includes('pin')) {
      answer = 'PIN-in tuaj mund ta shikoni te faqja "Karta" → butoni "PIN-i". Për siguri, PIN-i shfaqet vetëm pas konfirmimit. Nëse dëshironi të ndryshoni PIN-in, vizitoni degën më të afërt.'
    } else if (q.includes('orar') || q.includes('deg')) {
      answer = 'Degët e ArlaBank janë të hapura E Hënë deri E Premte, nga ora 08:00 deri 16:00. ATM-të janë të disponueshme 24 orë. Për të gjetur degën më të afërt, shkoni te "Më shumë" → "Degët & ATM".'
    } else if (q.includes('kurs') || q.includes('valut') || q.includes('euro') || q.includes('dollar')) {
      answer = 'Kurset aktuale të këmbimit: EUR/ALL = 108.40, USD/ALL = 99.10, GBP/ALL = 125.80. Kurset përditësohen çdo ditë pune. Mund t\'i gjeni gjithmonë në faqen kryesore të app-it.'
    } else if (q.includes('llogari') || q.includes('hap')) {
      answer = 'Për të hapur një llogari të re në ArlaBank, duhet të vizitoni degën më të afërt me kartën tuaj të identitetit. Procesi zgjat rreth 30 minuta. Mund të na kontaktoni në +355 4 123 4567 për informacion shtesë.'
    } else if (q.includes('tarif') || q.includes('komision') || q.includes('pagese') || q.includes('pagesë')) {
      answer = 'Tarifat kryesore: Transferta brenda ArlaBank — falas. Transferta jashtë bankës — 150 ALL. Tërheqje ATM ArlaBank — falas. Tërheqje ATM tjetër — 200 ALL. Pagesa faturash — falas.'
    } else if (q.includes('fjalëkalim') || q.includes('fjalekalim') || q.includes('password')) {
      answer = 'Nëse keni harruar fjalëkalimin, në faqen e Login-it klikoni "Keni harruar fjalëkalimin?" dhe do t\'ju dërgohet një kod verifikimi në numrin tuaj të telefonit.'
    } else if (q.includes('fatur')) {
      answer = 'Pagesat e faturave (OSHEE, UKT, Vodafone etj.) mund t\'i bëni nga faqja "Dërgo" → zgjidhni operatorin. Faturat e regjistruara paguhen automatikisht çdo muaj.'
    } else if (q.includes('ndihm') || q.includes('problem') || q.includes('gabim')) {
      answer = 'Për çdo problem teknik ose ndihmë, mund të na kontaktoni: Telefon: +355 4 123 4567 (E Hënë–E Premte 08:00–20:00) ose Email: info@arlabank.al. Përgjigemi brenda 24 orëve.'
    }

    setMessages(prev => [...prev, { role: 'assistant', content: answer }])
    setLoading(false)
  }

  if (showChat) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '60vh' }}>
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 12, paddingBottom: 8 }}>
          {messages.map((m, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
              {m.role === 'assistant' && (
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 8, flexShrink: 0 }}>
                  <i className="ti ti-building-bank" style={{ fontSize: 13, color: 'var(--primary)' }} aria-hidden="true" />
                </div>
              )}
              <div style={{
                maxWidth: '75%',
                padding: '10px 14px',
                borderRadius: m.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
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
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="ti ti-building-bank" style={{ fontSize: 13, color: 'var(--primary)' }} aria-hidden="true" />
              </div>
              <div style={{ background: 'var(--app-bg)', borderRadius: '16px 16px 16px 4px', padding: '10px 14px', fontSize: 13, color: 'var(--text3)' }}>
                Duke shkruar...
              </div>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', gap: 8, paddingTop: 12, borderTop: '0.5px solid var(--border)' }}>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage()}
            placeholder="Shkruaj një pyetje..."
            style={{ flex: 1, height: 42, borderRadius: 10, border: '1px solid var(--border)', background: 'var(--app-bg)', padding: '0 14px', fontSize: 13, fontFamily: 'var(--font)', color: 'var(--text1)', outline: 'none' }}
          />
          <div
            onClick={sendMessage}
            style={{ width: 42, height: 42, borderRadius: 10, background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}
          >
            <i className="ti ti-send" style={{ fontSize: 17, color: '#fff' }} aria-hidden="true" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {[
        { icon: 'ti-phone', val: '+355 4 123 4567', sub: 'E Hënë–E Premte, 08:00–20:00' },
        { icon: 'ti-mail', val: 'info@arlabank.al', sub: 'Përgjigje brenda 24 orëve' },
      ].map(c => (
        <div key={c.val} style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'var(--app-bg)', borderRadius: 'var(--radius-sm)', padding: '14px 16px' }}>
          <div style={{ width: 42, height: 42, borderRadius: 12, background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className={`ti ${c.icon}`} style={{ fontSize: 20, color: 'var(--primary)' }} aria-hidden="true" />
          </div>
          <div>
            <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text1)' }}>{c.val}</p>
            <p style={{ fontSize: 12, color: 'var(--text3)' }}>{c.sub}</p>
          </div>
        </div>
      ))}

      <div
        onClick={() => setShowChat(true)}
        style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'var(--primary)', borderRadius: 'var(--radius-sm)', padding: '14px 16px', cursor: 'pointer' }}
      >
        <div style={{ width: 42, height: 42, borderRadius: 12, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <i className="ti ti-message-circle" style={{ fontSize: 20, color: '#fff' }} aria-hidden="true" />
        </div>
        <div>
          <p style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>Fillo bisedën</p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.75)' }}>Asistent virtual — disponibël tani</p>
        </div>
        <i className="ti ti-chevron-right" style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', marginLeft: 'auto' }} aria-hidden="true" />
      </div>
    </div>
  )
}

export default function More() {
  const navigate = useNavigate()
  const [activeModal, setActiveModal] = useState(null)

  const modals = {
    profile: {
      title: 'Profili im',
      content: (
        <div>
          <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 600, color: 'var(--primary)', margin: '0 auto 12px' }}>AM</div>
            <p style={{ fontSize: 18, fontWeight: 600, color: 'var(--text1)' }}>Arla Mitrushi</p>
            <p style={{ fontSize: 13, color: 'var(--text3)' }}>Klient që nga 2021</p>
          </div>
          {[
            { label: 'Email', val: 'arla.mitrushi@email.com' },
            { label: 'Telefon', val: '+355 69 123 4567' },
            { label: 'Adresa', val: 'Rruga Myslym Shyri, Tiranë' },
            { label: 'Nr. Klienti', val: '1234 5678' },
            { label: 'IBAN', val: 'AL47 2121 1009 0000 0002 3569 8741' },
          ].map(r => (
            <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '0.5px solid var(--border)' }}>
              <span style={{ fontSize: 13, color: 'var(--text3)' }}>{r.label}</span>
              <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--text1)', textAlign: 'right', maxWidth: '60%' }}>{r.val}</span>
            </div>
          ))}
        </div>
      )
    },
    njoftime: {
      title: 'Njoftimet',
      content: (
        <div>
          {[
            { icon: 'ti-arrow-down-circle', iconBg: 'var(--success-bg)', iconColor: 'var(--success)', title: 'Llogaria juaj u kreditua me 120,000 ALL', desc: 'Pagesa e rrogës u pranua me sukses', time: 'Dje, 09:00' },
            { icon: 'ti-bolt', iconBg: 'var(--warning-bg)', iconColor: 'var(--warning)', title: 'Fatura e dritave OSHEE paguar', desc: '-4,200 ALL u pagua automatikisht', time: '4 Qershor' },
            { icon: 'ti-send', iconBg: '#EBF1FD', iconColor: 'var(--primary)', title: 'Transfertë e kryer me sukses', desc: '-5,000 ALL tek Nensi Berberi', time: '3 Qershor' },
            { icon: 'ti-shield-check', iconBg: 'var(--success-bg)', iconColor: 'var(--success)', title: 'Hyrje e re e verifikuar', desc: 'iPhone 14 Pro — Tiranë, AL', time: '5 Qershor' },
            { icon: 'ti-building-bank', iconBg: '#EBF1FD', iconColor: 'var(--primary)', title: 'Ofertë e re nga ArlaBank', desc: 'Kredi me interes 3.5% — Shiko tani', time: '6 Qershor' },
          ].map((n, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 0', borderBottom: '0.5px solid var(--border)' }}>
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
      )
    },
    siguria: {
      title: 'Siguria',
      content: (
        <div>
          {[
            { label: 'PIN', val: '••••', icon: 'ti-lock' },
            { label: 'Face ID', val: 'Aktivizuar', icon: 'ti-face-id' },
            { label: '2FA', val: 'Aktivizuar', icon: 'ti-shield-check' },
            { label: 'Ndryshimi i fundit', val: '1 Qershor 2026', icon: 'ti-calendar' },
            { label: 'Pajisja aktive', val: 'iPhone 14 Pro', icon: 'ti-device-mobile' },
          ].map(r => (
            <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: '0.5px solid var(--border)' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className={`ti ${r.icon}`} style={{ fontSize: 16, color: 'var(--primary)' }} aria-hidden="true" />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 14, color: 'var(--text2)' }}>{r.label}</p>
              </div>
              <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text1)' }}>{r.val}</p>
            </div>
          ))}
        </div>
      )
    },
    fatura: {
      title: 'Faturat e mia',
      content: (
        <div>
          {[
            { icon: 'ti-bolt', name: 'OSHEE', amount: '4,200 L', date: 'Paguar 4 Qershor', bg: 'var(--warning-bg)', color: 'var(--warning)' },
            { icon: 'ti-droplet', name: 'UKT', amount: '1,800 L', date: 'Paguar 31 Maj', bg: '#EBF1FD', color: 'var(--primary)' },
            { icon: 'ti-device-mobile', name: 'Vodafone', amount: '500 L', date: 'Paguar 2 Qershor', bg: 'var(--purple-bg)', color: 'var(--purple)' },
          ].map(f => (
            <div key={f.name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: '0.5px solid var(--border)' }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: f.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className={`ti ${f.icon}`} style={{ fontSize: 17, color: f.color }} aria-hidden="true" />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--text1)' }}>{f.name}</p>
                <p style={{ fontSize: 12, color: 'var(--text3)' }}>{f.date}</p>
              </div>
              <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text1)' }}>{f.amount}</p>
            </div>
          ))}
        </div>
      )
    },
    dege: {
      title: 'Degët & ATM',
      content: (
        <div>
          {[
            { name: 'Dega Qendrore', addr: 'Bulevardi Dëshmorët e Kombit, Tiranë', hours: 'E Hënë–E Premte: 08:00–16:00', type: 'Degë' },
            { name: 'Dega Blloku', addr: 'Rruga Pjeter Bogdani, Tiranë', hours: 'E Hënë–E Shtunë: 08:00–14:00', type: 'Degë' },
            { name: 'ATM Sheshi Italia', addr: 'Sheshi Italia, Tiranë', hours: '24 orë', type: 'ATM' },
            { name: 'ATM Blloku', addr: 'Rruga Sami Frashëri, Tiranë', hours: '24 orë', type: 'ATM' },
          ].map(d => (
            <div key={d.name} style={{ padding: '12px 0', borderBottom: '0.5px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text1)' }}>{d.name}</p>
                <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: 10, background: d.type === 'ATM' ? 'var(--success-bg)' : 'var(--primary-light)', color: d.type === 'ATM' ? 'var(--success)' : 'var(--primary)', fontWeight: 600 }}>{d.type}</span>
              </div>
              <p style={{ fontSize: 12, color: 'var(--text2)' }}>{d.addr}</p>
              <p style={{ fontSize: 11, color: 'var(--text3)', marginTop: 2 }}>{d.hours}</p>
            </div>
          ))}
        </div>
      )
    },
    kursi: {
      title: 'Kursi i këmbimit',
      content: (
        <div>
          {[
            { pair: 'EUR / ALL', buy: '107.80', sell: '108.40', change: '+0.2%' },
            { pair: 'USD / ALL', buy: '98.50', sell: '99.10', change: '+0.1%' },
            { pair: 'GBP / ALL', buy: '125.10', sell: '125.80', change: '+0.3%' },
            { pair: 'CHF / ALL', buy: '110.20', sell: '111.00', change: '-0.1%' },
          ].map(fx => (
            <div key={fx.pair} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '0.5px solid var(--border)' }}>
              <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--text1)' }}>{fx.pair}</p>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: 13, color: 'var(--text2)' }}>Blerje: {fx.buy} · Shitje: {fx.sell}</p>
                <p style={{ fontSize: 12, color: fx.change.startsWith('+') ? 'var(--success)' : 'var(--red)' }}>{fx.change} sot</p>
              </div>
            </div>
          ))}
        </div>
      )
    },
    kontakt: {
      title: 'Kontakto bankën',
      content: <KontaktContent />
    },
    faq: {
      title: 'Pyetjet e shpeshta',
      content: (
        <div>
          {[
            { q: 'Si të ndryshoj PIN-in?', a: 'Shkoni te Karta → PIN-i dhe ndiqni hapat e treguara.' },
            { q: 'Si të bllokojë kartën?', a: 'Shkoni te Karta → Blloko dhe konfirmoni.' },
            { q: 'Sa kohë zgjat një transfertë?', a: 'Brenda bankës: menjëherë. Banka tjetër: 1-2 ditë pune. Ndërkombëtare: 3-5 ditë.' },
            { q: 'Si të ndryshoj fjalëkalimin?', a: 'Shkoni te Cilësimet → Siguria → Ndrysho fjalëkalimin.' },
            { q: 'A mund të anulohet një transfertë?', a: 'Transfertat e brendshme mund të anulohen brenda 5 minutave. Të tjerat jo.' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '12px 0', borderBottom: '0.5px solid var(--border)' }}>
              <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text1)', marginBottom: 4 }}>{item.q}</p>
              <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.5 }}>{item.a}</p>
            </div>
          ))}
        </div>
      )
    },
  }

  const menuGroups = [
    {
      title: 'Llogaria',
      items: [
        { icon: 'ti-user', label: 'Profili im', sub: 'Të dhënat personale', key: 'profile' },
        { icon: 'ti-bell', label: 'Njoftimet', sub: 'Menaxho njoftimet', key: 'njoftime' },
        { icon: 'ti-shield-lock', label: 'Siguria', sub: 'PIN, biometrika, 2FA', key: 'siguria' },
      ]
    },
    {
      title: 'Shërbime',
      items: [
        { icon: 'ti-receipt', label: 'Faturat e mia', sub: 'Fatura të ruajtura', key: 'fatura' },
        { icon: 'ti-building-bank', label: 'Degët & ATM', sub: 'Gjej degën më të afërt', key: 'dege' },
        { icon: 'ti-currency-euro', label: 'Kursi i këmbimit', sub: 'Normat aktuale', key: 'kursi' },
      ]
    },
    {
      title: 'Ndihma',
      items: [
        { icon: 'ti-message-circle', label: 'Kontakto bankën', sub: 'Chat, telefon ose email', key: 'kontakt' },
        { icon: 'ti-help-circle', label: 'Pyetjet e shpeshta', sub: 'Gjetja e përgjigjeve', key: 'faq' },
      ]
    },
  ]

  return (
    <>
      {activeModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 200, display: 'flex', alignItems: 'flex-end' }} onClick={() => setActiveModal(null)}>
          <div style={{ background: 'var(--surface)', borderRadius: '20px 20px 0 0', padding: '24px 24px 40px', width: '100%', maxHeight: '80vh', overflowY: 'auto' }} onClick={e => e.stopPropagation()}>
            <div style={{ width: 40, height: 4, borderRadius: 2, background: 'var(--border)', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 18, fontWeight: 600, color: 'var(--text1)', marginBottom: 20 }}>{modals[activeModal].title}</h2>
            {modals[activeModal].content}
            <button className="btn-secondary" style={{ width: '100%', marginTop: 20 }} onClick={() => setActiveModal(null)}>Mbyll</button>
          </div>
        </div>
      )}

      <header style={{ background: 'var(--surface)', padding: '12px 18px 14px', borderBottom: '0.5px solid var(--border)', position: 'sticky', top: 0, zIndex: 10 }}>
        <h1 style={{ fontSize: 17, fontWeight: 600, color: 'var(--text1)', letterSpacing: '-0.3px' }}>Më shumë</h1>
      </header>

      <div className="scroll-area">
        <div style={{ margin: '16px 18px', background: 'var(--surface)', borderRadius: 'var(--radius)', padding: '16px', border: '0.5px solid var(--border)', display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer' }} onClick={() => setActiveModal('profile')}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 600, color: 'var(--primary)', flexShrink: 0 }}>AM</div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--text1)' }}>Arla Mitrushi</p>
            <p style={{ fontSize: 12, color: 'var(--text3)', marginTop: 2 }}>Klient që nga 2021</p>
          </div>
          <i className="ti ti-chevron-right" style={{ fontSize: 18, color: 'var(--text3)' }} aria-hidden="true" />
        </div>

        {menuGroups.map(group => (
          <div key={group.title}>
            <p className="section-title">{group.title}</p>
            <div style={{ margin: '0 18px', background: 'var(--surface)', borderRadius: 'var(--radius)', border: '0.5px solid var(--border)', overflow: 'hidden' }}>
              {group.items.map((item, idx) => (
                <div key={item.label} onClick={() => setActiveModal(item.key)} style={{ display: 'flex', alignItems: 'center', padding: '13px 16px', gap: 12, borderBottom: idx < group.items.length - 1 ? '0.5px solid var(--border)' : 'none', cursor: 'pointer' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={`ti ${item.icon}`} style={{ fontSize: 17, color: 'var(--primary)' }} aria-hidden="true" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--text1)' }}>{item.label}</p>
                    <p style={{ fontSize: 12, color: 'var(--text3)', marginTop: 1 }}>{item.sub}</p>
                  </div>
                  <i className="ti ti-chevron-right" style={{ fontSize: 16, color: 'var(--text3)' }} aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        ))}

        <div style={{ padding: '20px 18px 8px' }}>
          <button style={{ width: '100%', height: 48, background: 'var(--red-bg)', border: 'none', borderRadius: 'var(--radius)', color: 'var(--red)', fontSize: 15, fontWeight: 600, fontFamily: 'var(--font)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }} onClick={() => navigate('/login')}>
            <i className="ti ti-logout" style={{ fontSize: 18 }} aria-hidden="true" />
            Dilni nga llogaria
          </button>
        </div>
        <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--text3)', padding: '8px 0 16px' }}>ArlaBank v1.0.0</p>
      </div>

      <BottomNav />
    </>
  )
}
