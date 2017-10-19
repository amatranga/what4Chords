import React from 'react';
import SearchBar from './SearchBar';
import Chords from './chords';
import GUITARPARTY_API_KEY from '../config/config';

class WhatFourChords extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      titles: [],
      authors: [],
      chords: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let query = e.target.value;
    this.setState({query});
  }

  handleSubmit(e) {
    e.preventDefault();

    let query = this.state.query;
    fetch(`http://api.guitarparty.com/v2/songs/?query=${query}`, {
      headers: { 'Guitarparty-Api-Key' : `${GUITARPARTY_API_KEY}` }
    })
      .then(res => {
        res.json()
        .then(data => {
          console.log(data);
          if (data.objects.length) {
            let authors = [];
            let chords = [];
            let titles = [];
            data.objects.map((obj, i) => {
              authors.push(obj[0].name);
              chords.push(obj.chords);
              titles.push(obj.title);
            });
            this.setState({authors, chords, titles});
          } else {
            let authors = [];
            let chords = [];
            let titles = [];
            this.setState({authors, chords, titles});
          }
        });
      })
      .catch(err => {
        console.error(err, 'Error in API request');
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 justify-content-center">
            <SearchBar handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          </div>
          <Chords authors={this.state.authors} titles={this.state.titles} chords={this.state.chords} />
        </div>
      </div>
    );
  }
}

export default WhatFourChords;
