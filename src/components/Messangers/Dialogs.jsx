import { NavLink } from "react-router-dom"
import c from "./Dialogs.module.css"

const Messangers = () => {
    return (
        <div className={c.dialogs}>
            <div className={c.users}>
                <div className={c.user}>
                    <NavLink to="/messangers/1">Andrey</NavLink>
                </div>
                <div className={c.user}>
                    <NavLink to="/messangers/2">Pavel</NavLink>
                </div>
                <div className={c.user}>
                    <NavLink to="/messangers/3">Sonya</NavLink>
                </div>
                <div className={c.user}>
                    <NavLink to="/messangers/4">Eduard</NavLink>
                </div>
                <div className={c.user}>
                    <NavLink to="/messangers/5">Galina</NavLink>
                </div>
            </div>
            <div className={c.messangers}>
                <div className={c.mesanger}>Hi!</div>
                <div className={c.mesanger}>I teach React!!!</div>
                <div className={c.mesanger}>It is amazing))</div>
            </div>
        </div>
    )
}

export default Messangers;