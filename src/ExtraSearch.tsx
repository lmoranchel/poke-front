import TYPES from "./constants/types.tsx";
import ABILITIES from "./constants/abilities.tsx";
import './ExtraSearch.css';
import {useState} from "react";

const ExtraSearch = ({handleClick}) => {
   const [type, setType] = useState('')
   const [ability, setAbility] = useState('')

   const addAbility = (e) => {
      setAbility(e.target.value);
   }

   return (
      <div className='adv-search'>
         <div className='types'>
            <ul className='types-list'>
               {
                  TYPES.map((type: string) => {
                     return (
                        <li key={type} className='type-item'>
                           <button className={`btn btn-type ${type}`} id={type} onClick={() => setType(type)}>{type}</button>
                        </li>
                     );
                  })
               }
            </ul>
         </div>
         <div className='abilities'>
            <select id='ability' className='ability' onChange={addAbility} value={ability}>
               <option value=''>Select Ability</option>
               {ABILITIES.map((ability: string) => {
                  return (
                     <option value={ability.toLowerCase()} key={ability.toLowerCase()}>{ability}</option>
                  );
               })}
            </select>
         </div>
         <button type='button' className='btn-search' onClick={() => handleClick(type, ability)}>Search</button>
      </div>
   );
};

export default ExtraSearch;