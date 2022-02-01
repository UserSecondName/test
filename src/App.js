import './App.css';
import LinkButton from "./LinkButton";
import SearchYa from "./SearchYa";

function App() {
    const array123=["awertus", "почта", "Выход"]
    return (
        <div className="App">
            <div className="header">
                <div className="header-left">
                    <LinkButton anus ="Сделать стартовой"/>
                </div>
                <div className="header-right">
                    {array123.map((elem)=>{return <LinkButton anus = {elem}/>})}
                </div>
            </div>
            <div className="content">
                <SearchYa />
            </div>
            <div className="footer">
                <p className="footer-logo"><b>ЯНДЕКС</b></p>
            </div>
        </div>);
}

export default App;
