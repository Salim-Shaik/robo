import React from "react";

 
const SearchBox  = ({searchfield,searchChange}) =>
{return(
    <div className = 'pa2'>
        <input className = '_pa3 ba b--green bg-lightest-blue_'
        type = 'search' 
        placeholder='search robots'
        onChange = {searchChange}
        />
    </div>
    );
}

export default SearchBox;