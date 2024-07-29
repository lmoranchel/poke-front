const PokemonList = ({pokemonList, handleOnClick}) => {
   function formatId(id: number) {
      let idString = id.toString();

      while (idString.length < 4) {
         idString = '0' + idString;
      }
      return idString;
   }

   return (
      <div id='pokemonViewer'>
         <div className='pokemon-list' id='pokemonList'>

            {pokemonList.map((pokemon) => {
               return (
                  <div className='pokemon' key={pokemon.id} onClick={() => handleOnClick(pokemon.id)}>
                     <p className='pokemon-id-back'>#{formatId(pokemon.id)}</p>
                     <div className='pokemon-img'>
                        <img src={`/pokemon/${pokemon.id}.png`} alt={pokemon.name}/>
                     </div>
                     <div className='pokemon-info'>
                        <div className='name-container'>
                           <p className='pokemon-id'>
                              #{formatId(pokemon.id)}
                           </p>
                           <h2 className='pokemon-name'>{pokemon.name}</h2>
                        </div>
                        <div className='pokemon-types'>
                           <p className={`type ${pokemon.type[0]}`}>{pokemon.type[0]}</p>
                           {pokemon.type[1] ?
                              <p className={`type ${pokemon.type[1]}`}>{pokemon.type[1]}</p> :
                              null
                           }
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default PokemonList;