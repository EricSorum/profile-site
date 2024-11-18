import shutter from '../../assets/shutter.svg'

export default function HomeLink() {
  return (
    <div className="
    absolute 
    top-[10px] 
    w-full flex justify-center 
    text-white shadow-slate-200 text-3xl z-9">
      <a href="/"><img src={shutter} ></img></a>
    </div>
  )
}