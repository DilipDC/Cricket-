
import Card from '../components/Card'
export default function HowItWorks(){
  return (
    <div className="space-y-3">
      {[1,2,3].map(i=><Card key={i}>Step {i}</Card>)}
    </div>
  )
}
