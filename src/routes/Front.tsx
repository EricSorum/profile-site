import MainVideo from "../components/MainVideo";
import MainTitle from "../components/MainTitle";
import LowerLeftText from "../components/LowerLeftText";
import Feature from "../components/Feature";
import { features } from "../lib/content";
import '../output.css'

export default function Root() {
  return (
    <div className="bg-stone-600">
      <section aria-label="Hero section">
        <MainVideo />
        <MainTitle />
        <LowerLeftText />
      </section>
      <section className="max-w-[1800px] mx-auto my-20" aria-label="Features">
        {features.map((feature) => {
          return (
            <Feature key={feature.id} {...feature} />
          )
        })}
      </section>
    </div>
  )
}