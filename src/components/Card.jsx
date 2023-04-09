export default function Card({children}) {
  return (
    <div className="group rounded-lg cursor-pointer transition-shadow duration-200 sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md sm:border sm:border-slate-400 sm:m-2">
        {children}
    </div>
  )
}
