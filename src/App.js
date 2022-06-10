import './styles/App.css';
import {LinkButton} from "./components/LinkButton";
import {SearchYa} from "./components/SearchYa";
import {Posts} from "./components/Posts";
import {PagesViewer} from "./components/PagesViewer";
import React, {useState} from "react";

export function App () {
    const array123=[
            {name:"aw12rtus", key: "1"},
            {name:"почта", key: "2"},
            {name:"Выход", key: "3"},
        ]
    const [searchResult, setSearchResult] = useState([
        {id:1, title:"статья первая", description:"рассказ про науку"},
        {id:2, title:"статья вторая", description:"рассказ про спорт"},
        {id:3, title:"статья третья", description:"рассказ про искусство"},
    ])

    const getPostList = (a) =>{
        setSearchResult(a)
    }


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
                    <SearchYa getPostList = {getPostList}/>
                </div>
                <div className="content_search_result">
                    {searchResult.map((post)=>{
                       return <Posts  post = {post} key = {post.id}/>
                    })}
                </div>
                <div className="content_buttons">
                    <PagesViewer/>
                </div>
            </div>

            <div className="footer" >

                <p ><b>ЯНДЕКС</b></p>
            </div>
        </div>);
}

