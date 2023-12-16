const UniversityList=({list}) =>{
    return( 
        <ol>
            {list.map(( obj,i) => (// Per ogni elemento nell'array list, viene creato un elemento <li> che contiene un link <a> con il nome dell'università.
                <li key={i}>
                   <a href={obj.url}>{obj.name}</a>
                   {/* con l'attributo href impostato all'URL dell'università (obj.url) e il testo del link corrispondente al nome dell'università (obj.name). */}
                </li>
            ))}
        </ol>
    )
}











export default UniversityList