import React from 'react';
import SearchBar from './SearchBar';
import Songs from './Songs';
import GUITARPARTY_API_KEY from '../config/config';

class WhatFourChords extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      songs: []
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
          let songs = data.objects;
          this.setState({songs});
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
          <Songs songs={this.state.songs} />
        </div>
      </div>
    );
  }
}

export default WhatFourChords;
