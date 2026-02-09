
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Wallet from './pages/Wallet'
import AddMoney from './pages/AddMoney'
import Withdraw from './pages/Withdraw'
import Invoice from './pages/Invoice'
import Transactions from './pages/Transactions'
import Matches from './pages/Matches'
import MatchDetails from './pages/MatchDetails'
import HowItWorks from './pages/HowItWorks'

export default function App(){
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/wallet" element={<Wallet/>} />
        <Route path="/add" element={<AddMoney/>} />
        <Route path="/withdraw" element={<Withdraw/>} />
        <Route path="/invoice" element={<Invoice/>} />
        <Route path="/transactions" element={<Transactions/>} />
        <Route path="/matches" element={<Matches/>} />
        <Route path="/match" element={<MatchDetails/>} />
        <Route path="/how" element={<HowItWorks/>} />
      </Routes>
    </Layout>
  )
}
