import MainVideo from "../components/MainVideo";
import MainTitle from "../components/MainTitle";
import LowerLeftText from "../components/LowerLeftText";
import Feature from "../components/Feature";
import { features } from "../lib/content";
import '../output.css'

export default function Root() {
  return (
    <div className="bg-stone-600">
      <div>
        <MainVideo />
        <MainTitle />
        <LowerLeftText />
      </div>
      <div className="max-w-[1800px] mx-auto my-20">
        {features.map((feature) => {
          return (
            <Feature key={feature.id} {...feature} />
          )
        })}
      </div>
    </div>
  )
}