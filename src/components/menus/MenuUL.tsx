import { useState } from "react"
import MenuLink from "./MenuLink"
import { MenuLinkType } from "../../lib/definitions"
import { upperLeftLinks } from "../../lib/links";
import menuBackdrop from "../../utils/menu-backdrop";

export default function MenuUL() {
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
      className="absolute top-[10px] left-[10px] text-3xl z-20"
      role="navigation"
      aria-label="Work menu"
    >
        <button 
          className="text-shadow focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded"
          aria-expanded={menuOpen}
          aria-haspopup="true"
          aria-controls="work-menu"
        >
          Work
        </button>
        { menuOpen && (
          <ul id="work-menu" role="menu" aria-label="Work menu">
            {upperLeftLinks.map((link: MenuLinkType) =>
              <MenuLink key={link.id} {...link}/>
          )}
          </ul>
        )}
   </nav>
  )
}