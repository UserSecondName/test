import './SearchYa.css'

import React,{useState} from 'react'

export const SearchYa = () => {

    const [val, setValue] = useState("")
    let warningRef = React.createRef();
    let changeInputRef = React.createRef();
    const valCheck = () => {
        const a = setValue (changeInputRef.current.value)
        if (val === "" && a){
            warningRef.current.style.display="block"
        } else{
            warningRef.current.style.display="none"
        }
    }
    const onFindButton = () =>{
            if (val === ""){
                warningRef.current.style.display="block"
            }else {
                console.log(val)
            }
    }
            return <div className="Sgeneral">
                         <div className="Sgeneral_search">
                             <div className="in1_1">
                                <input
                                   className="in1"
                                   ref = {changeInputRef}
                                   type="search"
                                   onChange={valCheck}
                                />
                             </div>
                             <div className="in2_2">
                                     <button  id="in2" onClick = {onFindButton}>Найти</button>
                             </div>
                         </div>
                         <div className="content_warning">
                             <p className="inner_content_warning" ref = {warningRef}>Вы ничего не ввели!</p>
                         </div>
            </div>
}
