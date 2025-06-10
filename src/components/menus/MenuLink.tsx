import { MenuLinkType } from "../../lib/definitions"

export default function MenuLink(props: MenuLinkType) {
  const translateClass = props.right ? "hover:-translate-x-1" : "hover:translate-x-1";
  return (
    <li className={`
      opacity-70 
      hover:opacity-100 
      transition ease-in-out
      ${translateClass}
     `}>
      <a href={props.url} title={props.txt}>{props.txt}</a>
    </li>
  )
}