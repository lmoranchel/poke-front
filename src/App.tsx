import {useEffect, useState} from "react";
import './App.css'
import ExtraSearch from "./ExtraSearch.tsx";
import PokemonList from "./PokemonList.tsx";
import Search from "./Search.tsx";
import PokemonCard from "./PokemonCard.tsx";


function App() {
   const [data, setData] = useState([]);
   const [pokemon, setPokemon] = useState(null);
   const [showModal, setShowModal] = useState(false);

   useEffect(() => {
      fetch('http://localhost:3000/api/pokemon')
         .then(response => response.json())
         .then(json => setData(json))
         .catch(error => console.log(error));
   }, []);

   const search = (val) => {
      fetch('http://localhost:3000/api/pokemon/' + val)
         .then(response => response.json())
         .then(json => {
            if (Array.isArray(json)) {
               return setData(json)
            } else {
               return setData([json])
            }
         })
         .catch(error => console.log(error));
   }

   const searchByTypeAbility = (type: string, ability: string) => {
      let typeQ = '';
      let abilityQ = '';

      if (type.length > 0) {
         typeQ = `type=${type}`;
      }

      if (ability.length > 0) {
         abilityQ = `ability=${ability}`;
      }


      fetch(`http://localhost:3000/api/pokemon/search?${typeQ}&${abilityQ}`)
         .then(response => response.json())
         .then(json => {
            if (Array.isArray(json)) {
               return setData(json)
            } else {
               return setData([json])
            }
         })
         .catch(error => console.log(error));
   }

   const searchById = (id) => {
      fetch('http://localhost:3000/api/pokemon/' + id)
         .then(response => response.json())
         .then(json => {
            setShowModal(true)
            return setPokemon(json)
         })
         .catch(error => console.log(error));
   }

   return (
      <>
         <header>
            <img src="/pokemon_logo.svg" alt='Pokemon'/>
         </header>
         <div>
            {showModal && <PokemonCard pokemon={pokemon} handleShowModal={setShowModal}/>}
            <Search handleClick={search}/>
            <ExtraSearch handleClick={searchByTypeAbility}/>
            <PokemonList pokemonList={data} handleOnClick={searchById}/>
         </div>
      </>
   )
}

export default App
