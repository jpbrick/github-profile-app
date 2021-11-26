import React, { useState } from "react";
import "./style.css";

const Searchbar = (props) => {
    const [value, setValue] = useState('');

    return (
        <>
            <input className="search-bar" onChange={(e) => setValue(e.target.value)}></input>
            {
                props.errorStatus === true ? 
                    <p style={{color: "red"}}>The account you are looking for was not found</p>
                : 
                    <p></p>
            }
            <span><button className="add-btn" onClick={() => props.handleAddUser(value)}>Add User</button></span>
        </>
        
    )
}

export default Searchbar;