import Post from "./MyPosts/Post"
import c from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";










const Profile = (props) => {

    let posts = props.postsData.map((elem) => {
        return <Post message={elem.message} like={elem.like} />
    })
    


    return (
        <div className={c.profile}>
            <ProfileInfo addPost={props.addPost}/>
            {posts}
        </div>
    )
}


export default Profile;