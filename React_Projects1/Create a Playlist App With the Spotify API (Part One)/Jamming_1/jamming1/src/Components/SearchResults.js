import React from "react";

function searchResults(props){
  const { results, onAddToPlaylist } = props;


  return (
     <div>
       <h2>Search Results</h2>
        <ul>
        {results.map((result) => (
           <li key={result.id}>
           {result.name} - {result.artist}
             <button onClick={()=> onAddToPlaylist(result)}>Add to Playlist</button>
           </li>
            ))}
       </ul>
     </div>
    
  );

}

export default searchResults;