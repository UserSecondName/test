import './styles/App.css';
import {LinkButton} from "./components/LinkButton";
import {SearchYa} from "./components/SearchYa";
import {Posts} from "./components/posts";

export function App () {
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
                <div className="content_search">
                    <SearchYa/>
                </div>
                <div className="content_search_result">
                    <Posts post_title = "Zagolovka" post_body = "adhbasdjuawbd aw diawdwadwadwadwad awdwad awd wad wad wadwa dwad wad wadwa dwad wad wadwad wadwad wa dwadwad awi" />
                </div>

            </div>
            <div className="footer">
                <p ><b>ЯНДЕКС</b></p>
            </div>
        </div>);
}

