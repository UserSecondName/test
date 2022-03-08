import './SearchYa.css'

import React,{useState} from 'react'

export const SearchYa = () => {

    const [val, setValue] = useState("")
    const [isErrorShow, setIsErrorShow] = useState (false)
    let useChangeInputRef = React.createRef()
    const valCheck = () => {
        const a = setValue (useChangeInputRef.current.value)
        if (val === "" && a) {
            setIsErrorShow(true)
            console.log("changes are working")
        } else{
            setIsErrorShow(false)
            console.log("changes aren't working")
        }
    }
    const onFindButton = () =>{
            if (val === ""){
                console.log("button works")
                setIsErrorShow(true)
            }else {
                console.log(val)
            }
    }
            return <div className="Sgeneral">
                         <div className="Sgeneral_search">
                             <div className="in1_1">
                                <input
                                   className="in1"
                                   ref = {useChangeInputRef}
                                   type="search"
                                   onChange={valCheck}
                                />
                             </div>
                             <div className="in2_2">
                                     <button  id="in2" onClick = {onFindButton}>Найти</button>
                             </div>
                         </div>
                        {isErrorShow && <div className="content_warning">
                             <p className="inner_content_warning">Вы ничего не ввели!</p>
                         </div>}
            </div>
}
