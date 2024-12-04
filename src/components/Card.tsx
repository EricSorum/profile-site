import { CardType } from "../lib/definitions"

export default function Card(props: CardType) {
  return (
    <div className="text-white m-6
    outline outline-slate-100 rounded-lg m-1 hover:bg-stone-200/[0.2] hover:shadow-xl
    ">
      <div className="m-6 flex flex-col items-center justify-center text-center">
        <h2>{props.title}</h2>
        <p>{props.txt}</p>
      </div>
    </div>
  )
}