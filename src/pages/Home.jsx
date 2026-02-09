
import Card from '../components/Card'
import { Link } from 'react-router-dom'
export default function Home(){
  return (
    <div className="space-y-6">
      <section className="text-center space-y-3">
        <h1 className="text-3xl font-bold">Predict Cricket. Play Smart.</h1>
        <p className="opacity-80">Premium fantasy-style prediction UI</p>
        <div className="flex justify-center gap-3">
          <Link to="/auth" className="px-4 py-2 bg-neon text-black rounded-lg">Get Started</Link>
          <Link to="/matches" className="px-4 py-2 border rounded-lg">Live Matches</Link>
        </div>
      </section>
      <Card>Animated cricket energy placeholder</Card>
    </div>
  )
}
