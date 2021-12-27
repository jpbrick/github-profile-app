import { useState } from "react";
import "./Searchbar.css"

function Searchbar(props) {
    const [value, setValue] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        props.handleAddUsers(value)
        document.querySelector('.searchbar').value = ""
    } 

    return (
        <>
        <form style={{width: "100%"}} onSubmit={handleSubmit}>
            <input className="searchbar" onChange={(event) => setValue(event.target.value)}></input>
        </form>
        </>
    )
}

export default Searchbar;