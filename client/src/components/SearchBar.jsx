import React from 'react';

const SearchBar = props => {
  return (
    <div className="col text-center">
      <form onSubmit={props.handleSubmit}>
        <div className="form-group">
          <input required type="text" className="form-control" placeholder="Search for a Song!" style={{"textAlign":"center"}} onChange={props.handleChange}></input>
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
