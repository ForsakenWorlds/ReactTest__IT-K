import Post from "./MyPosts/Post"
import c from "./Profile.module.css"


const Profile = () => {
    return (
        <div className={c.profile}>
            <div className={c.backgroundHeader}>
                <img src="https://fhba.com/wp-content/uploads/2017/08/2017-Website-Header-Background-11.jpg" />
            </div>
            <div>ava+description</div>
            <div className="myPosts">
                <h3>My posts</h3>
                <div className="textArea">
                    <textarea name="" id="" cols="30" rows="2"></textarea>
                    <button>Add post</button>
                </div>
                <Post message="Hi!" like="15"/>
                <Post message="It is my first post!" like="22"/>
                <Post message="What a new social network?" like="1"/>
                <Post message="Hi all!" like="0"/>
                <Post message="OLOLO ONATOLE" like="100500"/>
            </div>
        </div>
    )
}


export default Profile;