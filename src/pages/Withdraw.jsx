
import Card from '../components/Card'
export default function Withdraw(){
  return (
    <Card>
      <h2 className="mb-3 text-xl">Withdraw</h2>
      <input className="w-full p-2 rounded bg-black/40 mb-3" placeholder="Amount"/>
      <div className="text-sm opacity-80 mb-3">
        Platform Fee 2% • Tax 1% • Net ₹4,850
      </div>
      <button className="w-full p-2 bg-gold text-black rounded">Confirm Withdraw</button>
    </Card>
  )
}
