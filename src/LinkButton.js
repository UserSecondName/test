import './LinkButton.css';
const LinkButton = (props) => {
    let text = props.anus
    if(text === undefined) text = "nichego"
    return <div className="general"
                onClick={() => console.log(text)}>
        {text}
    </div>
}
export default LinkButton