import { useState } from "react"
import MenuLink from "./MenuLink"
import { MenuLinkType } from "../../lib/definitions"
import { upperRightLinks } from "../../lib/links";
import menuBackdrop from "../../utils/menu-backdrop";

export default function MenuUR() {
  const [ menuOpen, toggleMenu ] = useState(false);
  const handleMenu = () => {
    toggleMenu(!menuOpen);
    menuBackdrop();
  }
  return (
    <nav 
      onMouseEnter={()=> handleMenu()}
      onMouseLeave={()=> handleMenu()}
      onClick={()=> handleMenu()}
      className="absolute top-[10px] right-[10px] text-right shadow-slate-200 text-3xl z-20"
      role="navigation"
      aria-label="Talent menu"
    >
        <button 
          className="text-shadow focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded"
          aria-expanded={menuOpen}
          aria-haspopup="true"
          aria-controls="talent-menu"
        >
          Talent
        </button>
        { menuOpen && (
          <ul id="talent-menu" role="menu" aria-label="Talent menu">
            {upperRightLinks.map((link: MenuLinkType) =>
              <MenuLink key={link.id} {...link}/>
          )}
          </ul>
        )}
   </nav>
  )
}

