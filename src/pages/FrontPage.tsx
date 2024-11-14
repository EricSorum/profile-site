import MainVideo from "../components/MainVideo";
import MainTitle from "../components/MainTitle";
import MenuUL from "../components/menus/MenuUL";
import MenuUR from "../components/menus/MenuUR";
import LowerLeftText from "../components/LowerLeftText";
import Feature from "../components/Feature";
import { features } from "../lib/content";


export default function FrontPage() {
  return (
    <>
      <div className="">
        <MainVideo />
        <MainTitle />
        <MenuUL />
        <MenuUR />
        <LowerLeftText />
      </div>
      <div className="max-w-[1800px] mx-auto my-20">
        {features.map((feature) => {
          return (
            <Feature key={feature.id} {...feature} />
          )
        })}
      </div>
    </>
  )
}