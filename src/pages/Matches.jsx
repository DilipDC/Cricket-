
import Card from '../components/Card'
import { Link } from 'react-router-dom'
export default function Matches(){
  return (
    <div className="space-y-3">
      <Link to="/match"><Card>IND vs AUS • LIVE</Card></Link>
      <Card>ENG vs SA • UPCOMING</Card>
    </div>
  )
}
