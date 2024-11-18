import { useState } from "react"
import MenuLink from "./MenuLink"
import { MenuLinkType } from "../../lib/definitions"
import { upperLeftLinks } from "../../lib/links";


export default function MenuUL() {
  const [ menuOpen, toggleMenu ] = useState(false);
  return (
    <div 
      onMouseEnter={()=> toggleMenu(true)}
      onMouseLeave={()=> toggleMenu(false)}
      onClick={()=> toggleMenu(!menuOpen)}
      className="absolute top-[10px] left-[10px] text-white shadow-slate-200 text-3xl z-10"
    >
        <button className="opacity-70 hover:opacity-100">Work</button>
        { menuOpen && (
          <ul>
            {upperLeftLinks.map((link: MenuLinkType) =>
              <MenuLink key={link.id} {...link}/>
          )}
          </ul>
        )}

   </div>
  )
}