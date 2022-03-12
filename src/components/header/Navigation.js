import Logo from "./Logo";
import DarkModeToggler from "./DarkMode/DarkModeToggler"
import "./Navigation.style.css"
import { NavLink } from "react-router-dom";

const Navigation = () => {

    return(
        <div className='nav-bar'>
            <Logo/>
            <NavLink to="/feed"><h1>DUMB BOOK</h1></NavLink>
            <DarkModeToggler/>
        </div>
    )
}

export default Navigation;