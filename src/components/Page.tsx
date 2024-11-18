import { PageType } from "../lib/definitions"
import Header from "./Header"

export default function Page(props: PageType) {
  const { title }: PageType = props;

  return (
    <div className="flex flex-col items-center bg-stone-400 h-screen">
      <Header title={title} />
      <div className="mx-4 max-w-screen-lg">
          <img src={props.img} className="py-6"></img>
          <p className="text-white">{props.txt}</p>
        </div>
    </div>
  )
}