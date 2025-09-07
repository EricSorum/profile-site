import { Outlet } from 'react-router-dom';
import MenuUL from "../components/menus/MenuUL";
import MenuUR from "../components/menus/MenuUR";
import Backdrop from '../components/menus/Backdrop';
import HomeLink from '../components/menus/HomeLink';
import Footer from '../components/Footer';
import '../output.css'

export default function Root() {
  return (
    <div className="bg-stone-600 text-white">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded z-50">
        Skip to main content
      </a>
      <header>
        <MenuUL />
        <MenuUR />
        <Backdrop />
        <HomeLink />
      </header>
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}