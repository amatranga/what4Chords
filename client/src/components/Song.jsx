import React from 'react';
import Author from './Author';
import Chord from './Chord';

const Song = (props) => {
  const cur = props.song;
  const authors = cur.authors;
  const chords = cur.chords;
  const title = cur.title;
  return (
    <div>
      <h2> {title} </h2>
      <h4>
        <ul style={{"listStyle":"none"}}>
          {authors.map((author, idx) =>
            <Author key={idx} name={author} />
          )}
        </ul>
      </h4>
      <h6>
        <ul style={{"listStyle":"none"}}>
          {chords.map((chord, idx) =>
            <Chord key={idx} chord={chord} />
          )}
        </ul>
      </h6>
    </div>
  );
}

export default Song;
