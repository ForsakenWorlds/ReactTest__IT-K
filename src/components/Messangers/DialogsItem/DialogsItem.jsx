import { NavLink } from "react-router-dom"
import c from "../Dialogs.module.css"

const DialogsItem = (props) => {
    return (
        <div className={c.user}>
            <NavLink to={"/messangers/" + props.id}>{props.name}</NavLink>
        </div>
    )
}



export default DialogsItem