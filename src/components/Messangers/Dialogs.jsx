import { NavLink } from "react-router-dom"
import c from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem";
import Messange from "./Messange/Messange";



const Messangers = (props) => {
    //userData massive
    let userData = props.usersData.map((elem) => {
        return <DialogsItem id={elem.id} name={elem.name} />
    }
    )

    // messanges massive
    let messanges = props.messangersData.map((m) => {
        return <Messange messange={m.messange} />
    })


    return (
        <div className={c.dialogs}>
            <div className={c.users}>
                {userData}
            </div>
            <div className={c.messangers}>
                {messanges}
            </div>
        </div>
    )
}

export default Messangers;