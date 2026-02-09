
import Card from '../components/Card'
import { Link } from 'react-router-dom'
export default function Wallet(){
  return (
    <Card>
      <h2 className="text-xl mb-3">Wallet Balance</h2>
      <p className="text-2xl font-bold mb-4">₹5,000</p>
      <div className="flex gap-3">
        <Link to="/add" className="px-3 py-2 bg-neon text-black rounded">Add Money</Link>
        <Link to="/withdraw" className="px-3 py-2 border rounded">Withdraw</Link>
      </div>
    </Card>
  )
}
