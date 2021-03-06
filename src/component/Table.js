import React, { Component } from "react";
import RowTable from "./RowTable";

class Table extends Component {
  render() {
    return (
      <div className="col ">
        <table className="table table-striped table-hover table-inverse">
          <thead className="thead-inverse">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone Number</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.getResultSearch().map((value, key) => (
              <RowTable
                key={key}
                id={value.id}
                name={value.name}
                phone={value.phone}
                role={value.role}
              ></RowTable>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
