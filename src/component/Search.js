import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.setState({
      txtSearch : "",
    });
  
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) =>{
    event.preventDefault();
  }


  handleInputChange = (event) => {
    this.setState({
        txtSearch : event.target.value
    });
  }

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
      );
    } else if (this.props.statusForm === false) {
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
      );
    }
  };

  render() {
  
    return (
      <div className="custom-search">
        <form className="d-flex" onSubmit={(event) =>this.handleSubmit(event)}>
          <input
            name="txtSearch"
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(event) => this.handleInputChange(event)}
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            onClick={(textSearch) =>
              this.props.getTextSearch(this.state.txtSearch)
            }
          >
            Search
          </button>
        </form>
        {this.hideButtonAddClose()}
      </div>
    );
  }
}

export default Search;
