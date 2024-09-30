import { Outlet } from "react-router-dom";
import Navigation from "./PageGroup/Home/Component/Navbar/Navigation";
import Copyright from "./PageGroup/Home/Component/Copyright";
import AboutDept from "./PageGroup/About/AboutDept";
import MainFooter from "./PageGroup/Home/Component/MainFooter";


const Layout=()=>{
    return(
      <>
        <Navigation/>
        <Outlet/>
        {/* <Copyright/> */}
        {/* <AboutDept/> */}
        <MainFooter/>
      </>
    )
  }

  export default Layout;