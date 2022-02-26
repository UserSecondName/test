import './App.css';
import LinkButton from "./LinkButton";
import {SearchYa} from "./SearchYa";

function App() {
    const array123=[
            {name:"awertus", key: "1"},
            {name:"почта", key: "2"},
            {name:"Выход", key: "3"},
        ]
    return (
        <div className="App">
            <div className="header">
                <div className="header-left">
                    <LinkButton anus ="Сделать стартовой"/>
                </div>
                <div className="header-right">
                    {array123.map((elem)=>{return <LinkButton anus = {elem.name} key={elem.key}/>})}
                </div>
            </div>
            <div className="content">
                    <SearchYa />
            </div>
            <div className="footer">
                <p ><b>ЯНДЕКС</b></p>
            </div>
        </div>);
}

export default App;
