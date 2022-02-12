import './SearchYa.css'

import React,{useState} from 'react'

export const SearchYa = () => {

    const [val, setValue] = useState("")
    let newRef = React.createRef();
    const onFindButton = () =>{
        if(val === ""){
            newRef.current.style.display="block"
        } else{
            console.log (val)
            newRef.current.style.display="none"
        }
    }

            return <div className="Sgeneral">
                         <div className="Sgeneral_search">
                             <div className="in1_1">
                                <input
                                   className="in1"
                                   type="search"
                                   onChange={(event) =>setValue(event.target.value)}
                                 />
                             </div>
                             <div className="in2_2">
                                     <button  id="in2" onClick = {onFindButton}>Найти</button>
                             </div>
                         </div>
                         <div className="content_warning">
                             <p className="inner_content_warning" ref = {newRef}>Вы ничего не ввели!</p>
                         </div>
            </div>



}
