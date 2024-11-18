import { useState } from "react";
import { FeatureType } from "../lib/definitions";

export default function Feature(props: FeatureType) {
  const [ active, isActive ] = useState(false)
  const activeClasses = active ? [
    'bg-stone-200'
  ] : '';
  const alignment = props.id % 2;
  const alignmentClass = alignment ? 'flex-row-reverse' : '';
  return (
    <div
    className=""
    >
      {/* <div> */}
        <div 
          onMouseEnter={()=> isActive(true)}
          onMouseLeave={()=> isActive(false)}      
          className={`
            ${activeClasses}
            ${alignmentClass}
            lg:flex items-center gap-10 p-20
          `}>
        <img 
            src={props.img} 

            className={`
              lg:w-1/2
            `}
          />
          <div className="">
            <h3 className="text-xl">{props.title}</h3>
            <p>{props.txt}</p>
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}