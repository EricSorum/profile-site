import shutter from '../../assets/shutter.svg'

export default function HomeLink() {
  return (
    <div className="
      absolute 
      top-[10px] 
      w-full flex justify-center 
      shadow-slate-200 text-3xl z-9
    ">
      <a href="/" title="Home"><img src={shutter} alt="Shutter image for home link."></img></a>
    </div>
  )
}