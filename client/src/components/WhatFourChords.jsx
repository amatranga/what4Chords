import React from 'react';
import SearchBar from './SearchBar';
import Songs from './Songs';
import GUITARPARTY_API_KEY from '../config/config';

class WhatFourChords extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      songs: [],
      selected: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
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

  next() {
    const max = this.state.songs.length - 1;
    const min = 0;
    let selected = this.state.selected;
    if (selected < max) {
      selected += 1;
    } else {
      selected = min;
    }
    this.setState({selected});
  }
  
  previous() {
    const max = this.state.songs.length - 1;
    const min = 0;
    let selected = this.state.selected;
    if (selected > min) {
      selected -= 1;
    } else {
      selected = max;
    }
    this.setState({selected});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 justify-content-center">
            <SearchBar handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          </div>
          <Songs selected={this.state.selected} songs={this.state.songs} next={this.next} previous={this.previous} />
        </div>
      </div>
    );
  }
}

export default WhatFourChords;
