import React from "react";
import { addPost } from "../../../redux/state";
import c from "./ProfileInfo.module.css"



const ProfileInfo = () => {

    let newPref = React.createRef();

    let addNewPost = () => {
        let text = newPref.current.value;
        addPost(text)
    }

    return (
        <div>
            <div className={c.backgroundHeader}>
                <img src="https://fhba.com/wp-content/uploads/2017/08/2017-Website-Header-Background-11.jpg" />
            </div>
            <div>ava+description</div>
            <h3>My posts</h3>
            <div className="textArea" >
                <textarea  ref={newPref}></textarea>
                <button onClick={addNewPost}>Add post</button>
            </div>
        </div>
    )
}


export default ProfileInfo;