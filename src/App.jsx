import { useEffect, useState } from "react";
import SearchBar from "./components/searchbar";
import "./App.css";
import UniversityList from "./components/UniveristyList";

function App() {
  const [universities, setUniversities] = useState([]);// stato per memorizare l'elenco delle universita
  const [error, setError]= useState()//stato per gestire gli errori
  const [filterUni, setFilterUni] = useState([]);// stato per memorizare l'elenco filtrato(come se creiamo una copia dello sttao iniziale).
  
  useEffect(() => {//viene eseguito una sola volta, al montaggio del componente, perché l'array delle dipendenze ([]) è vuoto.
    fetch("http://universities.hipolabs.com/search?country=Italy")// efftuiamo richiesta get per ottenere l'elenco delle universita(promise)
      .then((response) => response.json())// conversione risposta dell fetch in json(oggetto)
      .then((obj) => {//i dati ottenuti dalla richiesta fetch sono denominati obj.
        const listUnivers = obj.map((e) => {// iterazione su ogni elemento di obj, sarebbe la richiesta ottenuta dal fetch
          return {//Per ogni università, estrae il nome e l'URL dalla rispettiva posizione nell'oggetto e crea un nuovo oggetto con questi valori.
            name: e.name,
            url: e.web_pages[0],
          };
        });
        // Imposta sia l'elenco completo sia quello filtrato all'avvio
        setUniversities(listUnivers);// Imposta lo stato universities con l'elenco completo delle università estratte.
        setFilterUni(listUnivers);//Imposta lo stato filterUni con lo stesso elenco completo delle università, poiché all'inizio non c'è alcun filtro applicato.
      })
      .catch((err) => {// gestisce l'errore nel caso che la richiesta o la conversione in json nn sono adate a buon fine.
        console.error(err);
        setError(err);
      });
  }, []);
const handlesearch =(searchValue) =>{
  const newfilterUni= universities.filter((uni) =>//per filtrare le università in base al nome. La funzione di filtro viene eseguita per ogni università nell'array 
    uni.name.toLowerCase().includes(searchValue.toLowerCase())// Questo verifica se il nome dell'università contiene la stringa di ricerca indipendentemente dalla differenza tra maiuscole e minuscole.
  )
  setFilterUni(newfilterUni);//Aggiorna lo stato filterUni con l'array risultante filteredUniversities
};

  return (
    <>
      <div>
        {/*  spara il messaggio di errore se la richiesta del fetch nn e andato a buon fine  */}
        {error && <div> There was an error</div>} 
        <SearchBar
          onSearch={handlesearch} 
        />

        <UniversityList list={filterUni} />
      </div>
    </>
  );
}

export default App;
