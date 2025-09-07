import shutter from '../../assets/shutter.svg'

export default function HomeLink() {
  return (
    <div className="
      absolute 
      top-[10px] 
      w-full flex justify-center 
      shadow-slate-200 text-3xl z-9
    ">
      <a href="/" title="Home" className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded">
        <img src={shutter} alt="Shutter image for home link."></img>
      </a>
    </div>
  )
}