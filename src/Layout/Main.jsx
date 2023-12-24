import { Outlet } from "react-router-dom"
import Footer from "../pages/Home/Home/Shared/Footer/Footer"
import Header from "../pages/Home/Home/Shared/Header/Header"

const Main = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main