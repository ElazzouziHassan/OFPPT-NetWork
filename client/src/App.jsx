import './App.css'
import Login from './pages/auth/login/login'
import Home from './pages/home/home'
import Profile from './pages/profile/Profile'
import NavBar from './components/nav-bar/NavBar'
import LeftBar from './components/left-bar/LeftBar'
import RightBar from './components/right-bar/RightBar'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <div style={{ display:"flex" }}>
        <LeftBar />
        <Outlet />
        <RightBar/>
      </div>
    </div>
  )
}



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/profile/:userId',
          element:<Profile/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/",
      element: <Home/>
    }
  ]);
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
