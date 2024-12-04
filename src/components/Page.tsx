import { PageType } from "../lib/definitions"
import Header from "./Header"
import { cards } from "../lib/content";
import Card from "./Card";

export default function Page(props: PageType) {
  const { title }: PageType = props;

  return (
    <div className="flex flex-col items-center gap-6 bg-stone-400">
      <Header title={title} />
      <div className="mx-4 max-w-screen-lg">
          <img src={props.img} className="py-6"></img>
          <p className="text-white">{props.txt}</p>
      </div>
      <div className="grid md:grid-cols-2 max-w-screen-lg">
        {cards.map((card) => {
          return (
            <Card key={card.id} {...card} />
          )
        })}
      </div>
    </div>
  )
}