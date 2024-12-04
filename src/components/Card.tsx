import { CardType } from "../lib/definitions"
import camera from "../assets/camera.svg"

export default function Card(props: CardType) {
  return (
    <div className=" m-6 outline outline-slate-100 rounded-lg m-1 hover:bg-stone-200/[0.1] hover:shadow-xl transition ease-in-out">
      <div className="m-6 flex flex-col items-center justify-center gap-3 text-center">
        <img src={camera} alt="Camera icon"/>
        <h2 className="text-xl">{props.title}</h2>
        <p>{props.txt}</p>
      </div>
    </div>
  )
}