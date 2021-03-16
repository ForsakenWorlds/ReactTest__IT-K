import c from "./ProfileInfo.module.css"


const ProfileInfo = () => {
    return (
        <div>
            <div className={c.backgroundHeader}>
                <img src="https://fhba.com/wp-content/uploads/2017/08/2017-Website-Header-Background-11.jpg" />
            </div>
            <div>ava+description</div>
            <h3>My posts</h3>
            <div className="textArea">
                <textarea name="" id="" cols="30" rows="2"></textarea>
                <button>Add post</button>
            </div>
        </div>
    )
}


export default ProfileInfo;