
import Card from '../components/Card'
export default function Dashboard(){
  return (
    <div className="grid gap-4">
      <Card>Profile • Wallet ₹5,000</Card>
      <div className="grid grid-cols-2 gap-4">
        <Card>Wins</Card>
        <Card>Predictions</Card>
      </div>
    </div>
  )
}
