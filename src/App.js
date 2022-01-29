import './App.css';
import LinkButton from "./LinkButton";

function App() {
    const array=["awertus", "почта", "Выход"]
    return (
        <div className="App">
            <div className="header">
                <div className="header-left">
                    <LinkButton anus ="Сделать стартовой"/>
                </div>
                <div className="header-right">
                    <LinkButton anus ="awertus"/>
                    <LinkButton anus ="почта"/>
                    <LinkButton anus ="Выход"/>


                    {/*<div id="header-right-nick"><span>a</span>wertus</div>*/}
                    {/*<div id="header-right-mail">Почта</div>*/}
                    {/*<div id="header-right-exit">Выход</div>*/}
                </div>
            </div>
            <div className="content">
                <img id="image-content" src="image/ya_logo.png" alt="123"/>
            </div>
            <LinkButton anus="big anus"/>
            <LinkButton anus="another anus"/>
            <LinkButton/>
            <div className="footer">
                <p className="footer-logo"><b>ЯНДЕКС</b></p>
            </div>
        </div>);
}

export default App;
