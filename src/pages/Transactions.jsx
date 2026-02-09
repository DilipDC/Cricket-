
import Card from '../components/Card'
export default function Transactions(){
  return (
    <div className="space-y-3">
      {['Completed','Pending','Failed'].map(s=>(
        <Card key={s}>Transaction • {s}</Card>
      ))}
    </div>
  )
}
