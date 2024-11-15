import coastline from '../assets/coast.jpeg'

export default function Header() {
  return (
    <div className="">
      <img src={coastline} className="h-28 w-full object-cover -z-10"></img>
    </div>
  )
}