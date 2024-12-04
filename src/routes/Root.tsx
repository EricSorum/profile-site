import { Outlet } from 'react-router-dom';
import MenuUL from "../components/menus/MenuUL";
import MenuUR from "../components/menus/MenuUR";
import Backdrop from '../components/menus/Backdrop';
import HomeLink from '../components/menus/HomeLink';
import Footer from '../components/Footer';
import '../output.css'

export default function Root() {
  return (
    <div className="bg-stone-400 text-white">
      <MenuUL />
      <MenuUR />
      <Backdrop />
      <HomeLink />
      <Outlet />
      <Footer />
    </div>
  )
}