import React, { useEffect, useState } from "react";
import SpotifyApi, {
  initiateSpotifyAuthentication,
  getAccessTokenFromUrlHash,
  setAccessToken,
} from "./spotify";
import SearchBar from "./Components/SearchBar";
import SearchResults from "./Components/SearchResults";
import Playlist from "./Components/Playlist";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const accessToken = getAccessTokenFromUrlHash();

  useEffect(() => {
    if (accessToken) {
      setAccessToken(accessToken);
      SpotifyApi.getMe().then((response) => console.log(response));
      SpotifyApi.search("Find your favorite track").then((response) =>
        console.log(response)
      );
    } else {
      initiateSpotifyAuthentication();
    }
  }, [accessToken]);
  
    const handleSearch = async (searchQuery) => {
      const response = await SpotifyApi.searchTracks(searchQuery);
      setSearchResults(response.tracks.items || []);
    };

    const handleAddToPlaylist = (track) => {
      setPlaylist((prevPlaylist) => [...prevPlaylist, track]);
    };

    const handleRemoveFromPlaylist = (track) => {
      setPlaylist((prevPlaylist) =>
        prevPlaylist.filter((item) => item.id !== track.id)
      );
    };

    const handleSavePlaylist = () => {
      // Implement logic to save the playlist to the user's Spotify account
      // This might involve creating a new playlist on Spotify and adding tracks to it
      console.log("Playlist saved!");
    };
 

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <SearchResults
        results={searchResults}
        onAddToPlaylist={handleAddToPlaylist}
      />
      <Playlist
        playlist={playlist}
        onRemoveFromPlaylist={handleRemoveFromPlaylist}
        onSavePlaylist={handleSavePlaylist}
      />
    </div>
  );
}

export default App;
