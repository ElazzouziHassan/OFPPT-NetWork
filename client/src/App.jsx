import './App.css'
import Login from './pages/auth/login/login'
import Home from './pages/home/home'
import NavBar from './components/nav-bar/NavBar'
import LeftBar from './components/nav-bar/LeftBar'
import RightBar from './components/nav-bar/RighBar'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const layout = () => {
  return (
    <div>
      <NavBar />
      <div style={{ dispaly: "flex" }}>
        <LeftBar />
        <Outlet />
        <RightBar/>
      </div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/",
    element: <Home/>
  }
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
