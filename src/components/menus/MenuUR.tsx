import { useState } from "react"
import MenuLink from "./MenuLink"
import { MenuLinkType } from "../../lib/definitions"
import { upperRightLinks } from "../../lib/links";


export default function MenuUR() {
  const [ menuOpen, toggleMenu ] = useState(false);

  return (
    <div 
      onMouseEnter={()=> toggleMenu(true)}
      onMouseLeave={()=> toggleMenu(false)}
      onClick={()=> toggleMenu(!menuOpen)}
      className="absolute top-[10px] right-[10px] text-right text-white shadow-slate-200 text-3xl z-10"
    >
        <button>Talent</button>
        {menuOpen && (
          <ul>
            {upperRightLinks.map((link: MenuLinkType) =>
              <MenuLink key={link.id} {...link}/>
          )}
          </ul>
        )}

   </div>
  )
}