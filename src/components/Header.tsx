import coastline from '../assets/coast.jpeg'
import { PageType } from '../lib/definitions'

export default function Header({ title }: PageType) {
  return (
    <div className="">
      <h1 className="text-2xl">{title}</h1>
      <img src={coastline} className="h-28 w-full object-cover -z-10"></img>
    </div>
  )
}