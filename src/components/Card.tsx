export default function Card({ title, children }) {
  return (
    <div className="card bg-base-200 shadow-200 shadow-xl border border-base-300">
      <div className="card-body">
        <div className="card-title">
          {title}
        </div>
        {children}
      </div>
    </div>
  )
}
