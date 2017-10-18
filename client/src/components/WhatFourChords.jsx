import React from 'react';
import SearchBar from './SearchBar';
import Chords from './chords';
import GUITARPARTY_API_KEY from '../config/config';

class WhatFourChords extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      title: '',
      author: '',
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
          if (data.objects.length) {
            const info = data.objects[1];
            let author = info.authors[0].name;
            let chords = info.chords;
            let title = info.title;
            this.setState({author, chords, title});
          } else {
            let author = 'Try another search';
            let chords = [];
            let title = 'Not found';
            this.setState({author, chords, title});
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
          <Chords author={this.state.author} title={this.state.title} chords={this.state.chords} />
        </div>
      </div>
    );
  }
}

export default WhatFourChords;
