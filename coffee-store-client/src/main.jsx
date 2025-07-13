import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeRouter from './HomeRouter';
import AddCoffee from './components/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee';
import Header from './Header';
import Deatiles from './components/Deatiles';
import SingIn from './components/SingIn';
import SingUp from './components/SingUp';
import AuthProvider, { AuthContext } from './components/AuthProvider';
import Users from './components/Users';
const router = createBrowserRouter([


  {
    path: '/',
    element: <Header></Header>,
    children: [
      {
        path: "/homerouter",
        element: <HomeRouter></HomeRouter>,
        loader: () => fetch('http://localhost:5000/coffee'),

      },

    ]
  },


  {
    path: 'addCoffee',
    element: <AddCoffee></AddCoffee>
  },

  {
    path: 'updateCoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },


  {
    path: 'details/:id',
    element: <Deatiles></Deatiles>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: "/singin",
    element: <SingIn></SingIn>
  },

  {
    path: "singup",
    element: <SingUp></SingUp>
  },
  {
    path:'users',
    element: <Users></Users>,
    loader: () => fetch('http://localhost:5000/users')
  }



]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
