import React, { Component } from "react";

class Search extends Component {
  hideButtonAddClose = () => {
    if (this.props.statusForm === true) {
      return (
        <button
          onClick={() => this.props.changeStatus()}
          type="button"
          name=""
          id=""
          className="btn btn-primary btn-lg btn-block mb-2 mt-2"
        >
          Close
        </button>
      )
    } else if (this.props.statusForm === false){
      return (
        <button
          onClick={() => this.props.changeStatus()}
          type="button"
          name=""
          id=""
          className="btn btn-primary btn-lg btn-block mb-2 mt-2"
        >
          Add User
        </button>
      )
    }
  };

  render() {
    return (
      <div className="custom-search">
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        {this.hideButtonAddClose()}
      </div>
    );
  }
}

export default Search;
