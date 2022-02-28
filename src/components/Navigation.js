import Logo from "./Logo"
import DarkModeToggler from "../DarkMode/DarkModeToggler"
import "./Navigation.style.css"

const Navigation = () => {

    return(
        <div className='nav-bar'>
            <Logo/>
            <h1>DUMB BOOK</h1>
            <DarkModeToggler/>
        </div>
    )
}

export default Navigation;