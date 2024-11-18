import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page.js';
import Root from "./routes/Root.tsx";
import Projects from './routes/Projects.tsx';
import Pricing from './routes/Pricing.tsx';
import Booking from './routes/Booking.tsx';
import Photography from './routes/Photography.tsx';
import Videography from './routes/Videography.tsx';
import Editing from './routes/Editing.tsx';
import Front from './routes/Front.tsx'

// THE OUTLET COMPONENT RENDERS ALL PAGES LISTEN IN ROUTER
// THE OTHER ELEMENTS IN ROOT.TSX ARE MENU COMPONENTS THAT APPEAR ON EVERY PAGE

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
   children: [
      {
        index: true,
        element: <Front />
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/boooking",
        element: <Booking />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/photography",
        element: <Photography />,
      },
      {
        path: "/videography",
        element: <Videography />,
      },
      {
        path: "/editing",
        element: <Editing />,
      }
  ]
},

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
