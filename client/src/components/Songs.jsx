import React from 'react';
import Song from './Song';

const Songs = props => {
  const songs = props.songs;
  const selected = props.selected;
  const place = selected + 1;
  if (songs.length) {
    return (
      <div className="col-sm-12 text-center">
        <hr />
        <div>
          <Song song={songs[selected]} />
        </div>
        <div>
          {place} out of {songs.length}
        </div>
        <button onClick={props.previous} className="btn btn-secondary">Previous</button>
        <button onClick={props.next} className="btn btn-secondary">Next</button>
      </div>
    );
  } else {
    return (
      <div className="col-sm-12 text-center">
        Search for a song!
      </div>
    );
  }
}

export default Songs;
