import { PageType } from "../lib/definitions"
import Header from "./Header"
import { cards } from "../lib/content";
import Card from "./Card";

export default function Page(props: PageType) {
  const { title, img, txt }: PageType = props;

  return (
    <div className="flex flex-col items-center gap-6 mx-4 ">
      <Header title={title} />
      <div className="max-w-screen-lg grid md:grid-cols-[2fr_1fr] gap-6">
          <img src={img} alt={props.alt}></img>
          <div>
            <p>{txt}</p>
            <button 
              className="
                mx-auto block m-6 p-3 
                outline outline-slate-100 rounded-lg 
                hover:bg-stone-200/[0.1] hover:shadow-xl
                opacity-70
                hover:opacity-100
                transition ease-in-out
                text-xl
                w-full
                focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50
              "
              aria-label="Get started with our services"
            >
              Get Started
            </button>
          </div>
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