import { PageType } from "../lib/definitions"
import Header from "./Header"

export default function Page(props: PageType) {
  const { title }: PageType = props;

  return (
    <div>
      <Header title={title} />
      <div className="">
          <img src={props.img}></img>
          <p>{props.txt}</p>
        </div>
    </div>
  )
}