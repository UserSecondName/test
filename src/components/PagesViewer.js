import '../styles/PagesViewer.css'
import {LinkButton} from "./LinkButton";
import {PageOne} from "./PageOne";
import {PageTwo} from "./PageTwo";
import React, {useState} from 'react'

const pages = [
    <PageOne/>, <PageTwo/>, <PageOne/>
]

export const PagesViewer = () => {
    const [selectedPage, setSelectedPage] = useState(1)
    const drawPage = () => {
        return pages [selectedPage]
    }

    return(
        <div>
            <LinkButton anus = "1 страница" link = {() => {setSelectedPage(0)}}/>
            <LinkButton anus = "2 страница" link = {() => {setSelectedPage(1)}}/>
            <LinkButton anus = "3 страница" link = {() => {setSelectedPage(2)}}/>
            <div className = "PagesViewerSpace">
                {drawPage()}
            </div>
        </div>
    )
}