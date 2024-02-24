import React, { useState } from "react";

function SearchBar(props) {

    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (e) => {

        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
       props.onSearch(searchQuery);
    };


    return (
      <div>
        <input    
           type="text"
           placeholder="Enter Search Query"
           value={searchQuery}
           onChange={handleInputChange}

        />
       <button onClick={handleSearch}>Search</button>
      </div>
     
    );
}

export default SearchBar;