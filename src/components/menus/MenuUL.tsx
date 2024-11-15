import { useState } from "react"
import MenuLink from "./MenuLink"
import { MenuLinkType } from "../../lib/definitions"

const upperLeftLinks: MenuLinkType[] = [
  {
    id: 1,
    txt: 'Projects',
    url: '/projects',
    right: false,
  },
  {
    id: 2,
    txt: 'Pricing',
    url: '/pricing',
    right: false
  },
  {
    id: 3,
    txt: 'Booking',
    url: '/pricing',
    right: false
  }
]

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