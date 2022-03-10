import './styles/App.css';
import {LinkButton} from "./components/LinkButton";
import {SearchYa} from "./components/SearchYa";
import {Posts} from "./components/Posts";

export function App () {
    const array123=[
            {name:"awertus", key: "1"},
            {name:"почта", key: "2"},
            {name:"Выход", key: "3"},
        ]
    const searchResult = [
        {id:1, title:"статья первая", description:"рассказ про науку"},
        {id:2, title:"статья вторая", description:"рассказ про спорт"},
        {id:3, title:"статья третья", description:"рассказ про искусство"},
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
                    {searchResult.map((elemSearchRes)=>{
                        return <Posts
                            post_id = {elemSearchRes.id}
                            post_title = {elemSearchRes.title}
                            post_body = {elemSearchRes.description}
                            />
                    })}

                </div>

            </div>
            <div className="footer">
                <p ><b>ЯНДЕКС</b></p>
            </div>
        </div>);
}

