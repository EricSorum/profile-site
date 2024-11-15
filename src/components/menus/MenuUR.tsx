import { useState } from "react"
import MenuLink from "./MenuLink"
import { MenuLinkType } from "../../lib/definitions"

const upperRightLinks: MenuLinkType[] = [
  {
    id: 1,
    txt: 'Person1',
    url: 'javascript:void(0)',
    right: true
  },
  {
    id: 2,
    txt: 'Person2',
    url: 'javascript:void(0)',
    right: true
  },
  {
    id: 3,
    txt: 'Person3',
    url: 'javascript:void(0)',
    right: true
  }
]

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