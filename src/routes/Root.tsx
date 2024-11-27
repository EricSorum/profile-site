import { Outlet } from 'react-router-dom';
import MenuUL from "../components/menus/MenuUL";
import MenuUR from "../components/menus/MenuUR";
import Backdrop from '../components/menus/Backdrop';
import HomeLink from '../components/menus/HomeLink';
import '../output.css'

export default function Root() {
  return (
    <>
      <MenuUL />
      <MenuUR />
      <Backdrop />
      <HomeLink />
      <Outlet />
    </>
  )
}