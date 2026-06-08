import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './screens/Login'
import Dashboard from './screens/Dashboard'
import Transfer from './screens/Transfer'
import Cards from './screens/Cards'
import History from './screens/History'
import More from './screens/More'
import TransferSuccess from './screens/TransferSuccess'

export default function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/transfer/success" element={<TransferSuccess />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/history" element={<History />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </div>
  )
}
