
export default function Card({children}){
  return (
    <div className="bg-card backdrop-blur-glass rounded-xl p-4 shadow-glow">
      {children}
    </div>
  )
}
