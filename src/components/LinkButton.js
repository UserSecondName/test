import '../styles/LinkButton.css';
export const LinkButton = (props) => {
    let text = props.anus
    if(text === undefined) text = "nichego"
    return (
        <div className="general"
             onClick={props.link}>
                {text}
        </div>
    )
}