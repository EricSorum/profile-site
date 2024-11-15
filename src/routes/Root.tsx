import { Outlet } from 'react-router-dom';
// import MainVideo from "../components/MainVideo";
// import MainTitle from "../components/MainTitle";
import MenuUL from "../components/menus/MenuUL";
import MenuUR from "../components/menus/MenuUR";
// import Feature from "../components/Feature";
// import { features } from "../lib/content";
import '../output.css'

export default function Root() {
  return (
    <>
      {/* <div className=""> */}
        {/* <MainVideo />
        <MainTitle /> */}
        <MenuUL />
        <MenuUR />
      {/* </div> */}
      {/* <div className="max-w-[1800px] mx-auto my-20">
        {features.map((feature) => {
          return (
            <Feature key={feature.id} {...feature} />
          )
        })}
      </div> */}
     {/* <div className="max-w-[1800px] mx-auto my-20"> */}
     <Outlet />
     {/* </div> */}
    </>
  )
}