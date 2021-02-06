import React, { Component } from "react";
import "./App.css";
import AddUser from "./component/AddUser";
import Header from "./component/Header";
import Search from "./component/Search";
import Table from "./component/Table";
import Data from "./component/Data.json";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusForm: false,
      Data: Data,
      textSearch: ''
    };
  }

  changeStatus() {
    this.setState({
      statusForm: !this.state.statusForm,
    });
  }

  getTextSearch = (textSearch) => {
    this.setState({
      textSearch: textSearch,
    });
  };

  getResultSearch = () => {
    var searchResult = [];
    this.state.Data.forEach((item) => {
      
      if (item.name.toLowerCase().indexOf(this.state.textSearch.toLowerCase()) !== -1) {
        searchResult.push(item);
      }
    });
    return searchResult;
  };

  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="container">
          <div className="row">
            <Search
              changeStatus={() => this.changeStatus()}
              statusForm={this.state.statusForm}
              getTextSearch={(textSearch) => this.getTextSearch(textSearch)}
            ></Search>
          </div>
          <div className="row mt-4">
            <Table
              data={this.state.Data}
              getResultSearch = {() => this.getResultSearch()}
            ></Table>
            <AddUser statusForm={this.state.statusForm}></AddUser>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
