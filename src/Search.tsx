import {useState} from "react";

const Search = ({handleClick}) => {
   const [searchValue, setSearchValue] = useState(null);
   const handleOnChange = (e) => {
      setSearchValue(e.target.value);
   }

   return (
      <nav>
         <div className='search'>
            Search for Pokemon
            <input type='text' id='searchCriteria' className='search-input' placeholder='Name or Number' onChange={(e) => handleOnChange(e)}/>
            <button type='button' className='btn-search' onClick={() => handleClick(searchValue)}>Search</button>
         </div>
      </nav>
   );
};

export default Search;