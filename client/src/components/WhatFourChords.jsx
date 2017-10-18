import React from 'react';
import SearchBar from './SearchBar';
import Chords from './chords';


class WhatFourChords extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      chords: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let query = e.target.value;
    console.log(query);
    this.setState({query});
  }

  handleSubmit(e) {
    e.preventDefault();
    let query = this.state.query;
    fetch('/search')
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 justify-content-center">
            <SearchBar handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          </div>
          <hr />
          <Chords chords={this.state.chords} />
        </div>
      </div>
    );
  }
}

export default WhatFourChords;
