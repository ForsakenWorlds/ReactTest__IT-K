import c from "./Post.module.css"

const Post = (props) => {
    return (
        <div>
            <div className={c.post}>
                <img src="https://miro.medium.com/max/3150/0*rNf3XzXiRISodMu-.jpg" />
                <span>{props.message}</span>
            </div>
            <div className={c.like}>Like {props.like}</div>
        </div>
    )
}


export default Post;