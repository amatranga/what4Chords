import React from 'react';
import Chord from './Chord';

const Chords = props => {
  return (
    <div className="col-sm-12 text-center">
      <div>
        {props.title}
      </div>
      <div>
        {props.author}
      </div>
      <hr />
      <div>
        Hello
        {props.chords.map((chord, idx) => {
          <Chord key={idx} chord={chord} />
        })}
      </div>
    </div>
  );
}

export default Chords;
