import '../styles/PagesViewer.css'
import {LinkButton} from "./LinkButton";
import {PageOne} from "./PageOne";
import {PageTwo} from "./PageTwo";
import React, {useState} from 'react'

export const PagesViewer = () => {
    const [isPageOne, setIsPageOne] = useState(false)
    const [isPageTwo, setIsPageTwo] = useState(false)

    return(
        <div>
            <LinkButton anus = "1 страница" link = {() => {setIsPageOne(true)
                                                            if(isPageTwo) setIsPageTwo(false)}}/>
            <LinkButton anus = "2 страница" link = {() => {setIsPageTwo(true)
                                                            if(isPageOne) setIsPageOne(false)}}/>
            <div className = "PagesViewerSpace">
                {isPageOne && <PageOne/>}
                {isPageTwo && <PageTwo/>}
            </div>
        </div>
    )
}