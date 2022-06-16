import '../styles/LinkButton.css';
export const LinkButton = (props, {link}) => {
    let text = props.anus
    if(text === undefined) text = "nichego"
    const b = 1;
    const av = () => {
        if (b) link (props.jey)
    }
    return (
        <div className="general"
             onClick={props.link}>
                {text}
        </div>
    )
}