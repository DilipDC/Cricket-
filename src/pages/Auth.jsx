
import Card from '../components/Card'
export default function Auth(){
  return (
    <Card>
      <h2 className="text-xl font-semibold mb-3">Login / Signup</h2>
      <div className="space-y-2">
        <input className="w-full p-2 rounded bg-black/40" placeholder="Mobile Number"/>
        <div className="flex gap-2">
          {[1,2,3,4].map(i=><input key={i} className="w-10 p-2 text-center rounded bg-black/40"/>)}
        </div>
        <button className="w-full mt-2 p-2 bg-blue rounded">Continue</button>
      </div>
    </Card>
  )
}
