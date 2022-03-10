import '../styles/Posts.css'

export const Posts = (props) => {
return <div className="posts_main">
            <div className="posts_content">
                <h3>{props.post_id}. {props.post_title}</h3>
                <p>{props.post_body}</p>
            </div>
    </div>

}