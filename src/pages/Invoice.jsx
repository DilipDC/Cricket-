
import Card from '../components/Card'
export default function Invoice(){
  return (
    <Card>
      <h2 className="mb-3 text-xl">Invoice</h2>
      <ul className="text-sm space-y-1">
        <li>Transaction ID: TX123</li>
        <li>Date: Today</li>
        <li>Amount: ₹5,000</li>
        <li>Fee: ₹100</li>
        <li>Tax: ₹50</li>
        <li className="font-semibold">Net: ₹4,850</li>
      </ul>
      <button className="mt-3 p-2 border rounded w-full">Download</button>
    </Card>
  )
}
