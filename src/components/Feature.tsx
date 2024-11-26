import { FeatureType } from "../lib/definitions";

export default function Feature(props: FeatureType) {
  const alignment = props.id % 2;
  const alignmentClass = alignment ? 'flex-row-reverse' : '';
  return (
    <div
    className=""
    >
        <div 
          className={`
            ${alignmentClass}
            lg:flex items-center gap-10 p-20
          `}>
          <div className="lg:w-1/2">
            <div className="overflow-hidden relative hover:bg-stone-200/[0.2]">
              <img
                src={props.img}
                className={`
                  transition-transform ease-in-out duration-300 
                  hover:scale-90
                  object-cover
                `}
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-xl">{props.title}</h3>
            <p>{props.txt}</p>
          </div>
        </div>
    </div>
  )
}