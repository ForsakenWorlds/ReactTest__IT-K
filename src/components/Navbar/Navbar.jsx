import { NavLink } from "react-router-dom"
import c from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={c.navbar}>
            <div className={c.item}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/messangers">Messangers</NavLink>
            </div>
            <div className={c.item}>
                <a>News</a>
            </div>
            <div className={c.item}>
                <a>Music</a>
            </div>
            <div className={c.item}>
                <a>Settings</a>
            </div>
        </div>
    )
}

export default Navbar