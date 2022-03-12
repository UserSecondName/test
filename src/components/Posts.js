import '../styles/Posts.css'

export const Posts = (props) => {


return <div className="posts_main">
            <div className="posts_content">
                <h4>{props.post.id}. {props.post.title}</h4>
                <p>{props.post.description}</p>

            </div>
    </div>
}