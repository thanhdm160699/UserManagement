import React, { Component } from "react";

class AddUser extends Component {

  hideFormAddUser = () =>{
    if(this.props.statusForm === true){
      return(
        <div className="card">
          <div className="card-body">
            <div className="form-group">
              <input
                type="text"
                name="##"
                className="form-control"
                placeholder="Name"
                aria-describedby="helpId"
              />
              <hr />
              <input
                type="text"
                name="##"
                className="form-control"
                placeholder="Phone Number"
                aria-describedby="helpId"
              />
              <hr />
              <select id="my-select" className="custom-select" name="##">
                <option>Admin</option>
                <option>Mod</option>
              </select>
            </div>
          </div>
          <div className="card-footer text-muted ">
            <button type="button" className="btn btn-block btn-primary">
              <i className="fa fa-plus" aria-hidden="true">
                &nbsp;Add
              </i>
            </button>
          </div>
        </div>
      )
    }
  }

  render() {
    console.log(this.props.statusForm);
    return (
      <div className="col-3">
        {this.hideFormAddUser()}
      </div>
    );
  }
}

export default AddUser;
