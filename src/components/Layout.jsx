
import { Link } from 'react-router-dom'

export default function Layout({children}){
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 flex justify-between items-center bg-black/40 backdrop-blur-glass">
        <Link to="/" className="font-bold text-neon">CRIC PREDICT</Link>
        <nav className="flex gap-3 text-sm">
          <Link to="/matches">Matches</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/wallet">Wallet</Link>
        </nav>
      </header>
      <main className="flex-1 p-4">{children}</main>
      <footer className="p-4 text-xs text-center opacity-70">
        This is a UI demo only. No real money or betting.
      </footer>
    </div>
  )
}
