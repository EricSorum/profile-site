import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page.js';
import Root from "./routes/Root.tsx";
import Work from './routes/Work.tsx';
import Front from './routes/Front.tsx'
// import App from './App.tsx'

// THE OUTLET COMPONENT RENDERS ALL PAGES LISTEN IN ROUTER
// THE OTHER ELEMENTS IN ROOT.TSX ARE MENU COMPONENTS THAT APPEAR ON EVERY PAGE

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    children: [
      {
        index: true,
        element: <Front />
      },
      {
        path: "work",
        element: <Work />,
      },
    // {
    //   path: "home",
    //   element: <Front />,
    // }
  ]
},

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
