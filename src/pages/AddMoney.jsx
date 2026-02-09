
import Card from '../components/Card'
export default function AddMoney(){
  return (
    <Card>
      <h2 className="mb-3 text-xl">Add Money</h2>
      <input className="w-full p-2 rounded bg-black/40 mb-3" placeholder="Enter Amount"/>
      <div className="flex gap-2 mb-3">
        {['₹100','₹500','₹1000'].map(v=><button key={v} className="px-3 py-1 border rounded">{v}</button>)}
      </div>
      <button className="w-full p-2 bg-blue rounded">Confirm</button>
    </Card>
  )
}
