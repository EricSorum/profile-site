import { Outlet } from 'react-router-dom';
import MenuUL from "../components/menus/MenuUL";
import MenuUR from "../components/menus/MenuUR";
import '../output.css'

export default function Root() {
  return (
    <>
      <MenuUL />
      <MenuUR />
      <Outlet />
    </>
  )
}