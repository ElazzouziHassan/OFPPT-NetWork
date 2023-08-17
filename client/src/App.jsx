import './App.css'
import Login from './pages/auth/login/login'
import Home from './pages/home/home'
import Profile from './pages/profile/Profile'
import NavBar from './components/nav-bar/NavBar'
import LeftBar from './components/left-bar/LeftBar'
import RightBar from './components/right-bar/RightBar'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";


function App() {
  // fake authenticated user :
  const currentUser = true;

  // Main Layout :
  const Layout = () => {
    return (
      <div>
        <NavBar />
        <div style={{ display:"flex" }}>
          <LeftBar />
          <div style={{ flex: 6.5}}>
            <Outlet />
          </div>
          <RightBar/>
        </div>
      </div>
    )
  }

  // this function to protect our routes :
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login"/>
    }
    return children
  }
  // Browser Router :
  const router = createBrowserRouter([
    { path: '/', element: <ProtectedRoute><Layout /></ProtectedRoute>,
      children: [
        { path: '/', element: <Home/> },
        { path: '/profile/:userId', element:<Profile/> }
      ]
    },
    { path: "/login", element: <Login/> },
    { path: "/", element: <Home/> }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}
export default App
