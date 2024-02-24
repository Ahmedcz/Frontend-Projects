import React from "react";

function Playlist(props) {

    const { playlist, onRemoveFromPlaylist, onSavePlaylist } =  props;
    

    return (
     <div>
        <h2>Playlist</h2>
        <ul>
          {playlist.map((track) => (
            <li key={track.id}>
                {track.name} - {track.artist}
                <button onClick={() => onRemoveFromPlaylist(track)}>Remove</button>
            </li>
          ))}
        </ul>
        <button onClick={onSavePlaylist}>Save Playlist</button>
     </div>
    );

}
export default Playlist;