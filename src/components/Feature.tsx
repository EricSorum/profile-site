import { FeatureType } from "../lib/definitions";

export default function Feature(props: FeatureType) {
  const alignment = props.id % 2;
  const alignmentClass = alignment ? 'flex-row-reverse' : '';
  return (
    <div>
        <div 
          className={`
            ${alignmentClass}
            lg:flex items-center gap-10 p-20
          `}>
          <div className="lg:w-2/3">
            <div className="overflow-hidden relative hover:bg-stone-200/[0.2]">
              <img
                src={props.img}
                className={`
                  transition-transform ease-in-out duration-300 
                  hover:scale-90
                  object-cover
                  mb-4
                `}
                alt={props.alt}
              />
            </div>
            <h3 className="text-xl">{props.title}</h3>
            <div className="">
              <button className="
                m-2 p-1 
                outline inline-block outline-slate-100 rounded-lg 
                hover:bg-stone-200/[0.1] hover:shadow-xl
                opacity-70 
                hover:opacity-100 
                transition ease-in-out
                text-lg
              ">Option</button>
              <button className="
                m-2 p-1 
                outline inline-block outline-slate-100 rounded-lg 
                hover:bg-stone-200/[0.1] hover:shadow-xl
                opacity-70 
                hover:opacity-100 
                transition ease-in-out
                text-lg
              ">Option</button>
              <button className="
                m-2 p-1 
                outline outline-slate-100 rounded-lg 
                hover:bg-stone-200/[0.1] hover:shadow-xl
                opacity-70 
                hover:opacity-100 
                transition ease-in-out
                text-lg 
              ">Option</button> 
            </div>
            <p>{props.txt}</p>
          </div>
          <div className="lg:w-1/3">
          </div>
          <div className="md:flex items-center gap-5">
            <div></div>
          </div>
        </div>
    </div>
  )
}