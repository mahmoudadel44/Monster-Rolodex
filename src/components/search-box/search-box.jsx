import React from 'react'
import './search-box.styles.css'
const SearchBox=({placeholder,handleChange})=> {
    return (
        <div className="contain">
        <input 
        className="search"
        type="text"
         placeholder={placeholder}
         onChange={handleChange}/>
         </div>
    )
}

export {SearchBox}
