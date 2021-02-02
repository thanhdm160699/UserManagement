import React, { Component } from "react";
import "./App.css";
import AddUser from "./component/AddUser";
import Header from "./component/Header";
import Search from "./component/Search";
import Table from "./component/Table";

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        statusForm: false,
      };
  }

  changeStatus(){
    this.setState(
      {
       statusForm  : !this.state.statusForm
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="container">
          <div className="row">
            <Search changeStatus = {() => this.changeStatus()} statusForm ={this.state.statusForm}></Search>
          </div>
          <div className="row mt-4">
            <Table ></Table>
            <AddUser statusForm={this.state.statusForm}></AddUser>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
