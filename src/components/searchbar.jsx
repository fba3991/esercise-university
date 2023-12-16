import { useState } from "react"

const SearchBar =({onSearch}) =>{
    const [inputValue, setInputValue]= useState('')//// Stato locale per memorizzare il valore dell'input
    return(
        <div>
        <input type="text"
        value={inputValue} // riceve il valore da inputValue e ogni volta che viene modificato (onChange), viene chiamata la funzione per impostare il nuovo valore in inputValue.
        onChange={(e) =>{setInputValue(e.target.value)}}/> {/* target e l'input */}
        
        <button onClick={() =>{ onSearch(inputValue);// Chiama la funzione onSearch con il valore attuale dell'inputValue
        setInputValue('')// Resettare l'inputValue a una stringa vuota dopo la ricerca
        }}>search</button>
        </div>
        )
}

export default SearchBar