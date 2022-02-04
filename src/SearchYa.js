import './SearchYa.css'
import React from 'react'

class SearchYa extends React.Component {

    state = {
        value: ''
    }
         a = (event) => {
            // console.log(event.target.value)
            this.setState({value: event.target.value})
        }
         b = () => {
            const val = this.state.value
             console.log( val)
        }
        render()
        {
            // console.log("state: ", this.state)
            return <div className="Sgeneral">
                <div className="in1_1">
                    <input className="in1" type="search" onChange={this.a}/>
                </div>
                <div className="in2_2">
                    <button id="in2" onClick = {this.b} >Найти</button>
                </div>
            </div>
        }

}
export default SearchYa