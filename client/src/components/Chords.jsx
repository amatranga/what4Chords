import React from 'react';
import Chord from './Chord';

const Chords = props => {
  return (
    <div className="col-sm-12 text-center">
      <h2>
        {props.titles}
      </h2>
      <h4>
        {props.authors}
      </h4>
      <hr />
      <div>
        <ul style={{'listStyle':'none'}}>
          {props.chords.map((chord, idx) =>
            <Chord key={idx} chord={chord} />
          )}
        </ul>
      </div>
    </div>
  );
}

export default Chords;
