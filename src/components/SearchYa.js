import '../styles/SearchYa.css'
import React,{useState} from 'react'

export const SearchYa = ({getPostList}) => {

    const [val, setValue] = useState("")
    const [isErrorShowed, setIsErrorShowed] = useState (false)
    const valCheck = (e) => {
        setValue (e.target.value)
        if (!!e.target.value) setIsErrorShowed (false)
    }
    const onFindButton = () =>{
            if (val === ""){
                setIsErrorShowed (true)
            }else {
                console.log(val)
                fetch("http://alwertus.zapto.org:9010",
                    {method: 'GET'})
                    .then(rs => rs.json())
                    .then((res)=> {
                        Object.keys(res)
                        return getPostList(res)
                    })
            }
    }

            return <div className="Sgeneral" >
                         <div className="Sgeneral_search">
                             <div className="in1_1">
                                <input
                                   className="in1"
                                   type="search"
                                   onChange={valCheck}
                                />
                             </div>
                             <div className="in2_2">
                                     <button  id="in2" onClick = {onFindButton}>Найти</button>
                             </div>
                         </div>
                        {isErrorShowed && <div className="content_warning">
                             <p className="inner_content_warning">Вы ничего не ввели!</p>
                         </div>}
            </div>
}
