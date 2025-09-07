import { MenuLinkType } from "../../lib/definitions"

export default function MenuLink(props: MenuLinkType) {
  const translateClass = props.right ? "hover:-translate-x-1" : "hover:translate-x-1";
  return (
    <li 
      className={`
        opacity-70 
        hover:opacity-100 
        transition ease-in-out
        ${translateClass}
      `}
      role="menuitem"
    >
      <a 
        href={props.url} 
        title={props.txt}
        className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded"
      >
        {props.txt}
      </a>
    </li>
  )
}