import React from 'react';
// import Song from './Song';

const Songs = props => {
  const songs = props.songs;
  if (songs.length) {
    return (
      <div className="col-sm-12 text-center">
        <hr />
        <div>
          <ul style={{'listStyle':'none'}}>
          </ul>
        </div>
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
