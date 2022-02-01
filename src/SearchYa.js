import './SearchYa.css'
const SearchYa = (props)=>{
    const amean = props.a
    return <div className="Sgeneral">
        <div className="in1_1">
            <input className="in1" type="search"/>
        </div>
        <div className="in2_2">
            <input id="in2" type="button" value="Найти"/>
        </div>
    </div>
}

export default SearchYa