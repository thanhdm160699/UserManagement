import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="custom-search">
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> 
          </div>
        );
    }
}

export default Search;