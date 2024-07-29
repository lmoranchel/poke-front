import './PokemonCard.css'

function formatId(id: number) {
   let idString = id.toString();

   while (idString.length < 4) {
      idString = '0' + idString;
   }
   return idString;
}

const PokemonCard = ({pokemon, handleShowModal}) => {
   return (
      <div className='card-container'>
         <div className='card'>
            <div className='card-header'>
               <p className='close' onClick={() => handleShowModal(false)}>&times;</p>
            </div>
            <div className='card-content'>
               <main className='detail-main main'>
                  <header className='header'>
                     <div className='header-wrapper'>
                        <div className='header-wrap'>
                           <div className='name-wrap'>
                              <h1 className='name'>{pokemon.name}</h1>
                           </div>
                        </div>
                        <div className='pokemon-id-wrap'>
                           <p>#{formatId(pokemon.id)}</p>
                        </div>
                     </div>
                  </header>
                  <div className='detail-img-wrapper'>
                     <img src={`/pokemon/${pokemon.id}.png`} alt={pokemon.name}/>
                  </div>
                  <div className='detail-card-detail-wrapper'>
                     <div className='pokemon-types'>
                        <p className={`type ${pokemon.type[0]}`}>{pokemon.type[0]}</p>
                        {pokemon.type[1] ?
                           <p className={`type ${pokemon.type[1]}`}>{pokemon.type[1]}</p> :
                           null
                        }
                     </div>
                     <p className='description'>{pokemon.description}</p>
                     <p className='about-text'>About</p>
                     <div className='pokemon-detail-wrapper'>
                        <div className='pokemon-detail-col'>
                           <div className='pokemon-detail'>
                              <p className='weight'>{pokemon.weight / 10} Kg</p>
                           </div>
                           <p className='info-text'>Weight</p>
                        </div>
                        <div className='pokemon-detail-col'>
                           <div className='pokemon-detail'>
                              <p className='height'>{pokemon.height * 10} cm</p>
                           </div>
                           <p className='info-text'>Height</p>
                        </div>
                        <div className='pokemon-detail-col'>
                           <div className='pokemon-detail abilities'>
                              <div className='pokemon-ability'>{pokemon.abilities[0]}</div>
                              {pokemon.abilities[1] ?
                                 <div className='pokemon-ability'>{pokemon.abilities[1]}</div> :
                                 null
                              }
                           </div>
                           <p className='info-text'>Abilities</p>
                        </div>
                     </div>
                  </div>
               </main>


            </div>
            <div className='card-footer'>
               <button className='btn btn-close' onClick={() => handleShowModal(false)}>Close</button>
            </div>
         </div>

      </div>
   );
};

export default PokemonCard;

// {
//    "id": 392,
//*****    "name": "infernape",
//*****    "description": "It uses a special kind of martial arts involving all its limbs. Its fire never goes out.",
//    "abilities": [
//    "blaze",
//    "iron-fist"
// ],
//    "__v": 0
// }