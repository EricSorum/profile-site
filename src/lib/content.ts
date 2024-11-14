import { FeatureType } from "./definitions"
import coast from '../assets/coast.jpeg'
import driftwood from '../assets/driftwood.jpg'
import rocks from '../assets/rocks.jpg'
import sunrise from '../assets/sunrise.jpeg'
import sunset from '../assets/sunset.jpeg'

export const features: FeatureType[] = [
  {
    id: 1,
    title: 'Coastline',
    img: coast,
    txt: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Hac placerat praesent accumsan ut ornare eleifend rhoncus; taciti elementum. Laoreet senectus vehicula taciti odio efficitur iaculis proin odio. ',
  },
  {
    id: 2,
    title: 'Driftwood',
    img: driftwood,
    txt: 'Condimentum pulvinar nunc inceptos magna duis facilisi tellus montes. Sapien turpis laoreet porttitor eleifend at habitasse nunc. ',
  },
  {
    id: 3,
    title: 'Rocks',
    img: rocks,
    txt: 'Enim commodo bibendum dapibus conubia ut ac consequat. Elementum elementum arcu nibh ligula volutpat magna. Posuere ac suscipit fusce litora sodales quis.',
  },
  {
    id: 4,
    title: 'Sunrise',
    img: sunrise,
    txt: 'Amet fringilla consectetur cras elit interdum molestie efficitur mi lobortis.',
  },
  {
    id: 5,
    title: 'Sunset',
    img: sunset,
    txt: 'Donec ligula posuere malesuada sem ullamcorper nam. Ligula magnis tristique taciti suscipit mattis scelerisque habitant at.',
  },
]