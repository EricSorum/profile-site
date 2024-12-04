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
    <div 
      onMouseEnter={()=> handleMenu()}
      onMouseLeave={()=> handleMenu()}
      onClick={()=> handleMenu()}
      className="absolute top-[10px] left-[10px]  shadow-slate-200 text-3xl z-20"
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