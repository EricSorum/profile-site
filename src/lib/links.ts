import { MenuLinkType } from "./definitions";

export const upperLeftLinks: MenuLinkType[] = [
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
];

export const upperRightLinks: MenuLinkType[] = [
  {
    id: 1,
    txt: 'Photography',
    url: '/photography',
    right: true
  },
  {
    id: 2,
    txt: 'Videography',
    url: '/videography',
    right: true
  },
  {
    id: 3,
    txt: 'Editing',
    url: '/editing',
    right: true
  }
];