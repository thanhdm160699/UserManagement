import React, { Component } from 'react';

class RowTable extends Component {
    render() {
        return (
            <tr>
            <td>{this.props.id}
            </td>
            <td>{this.props.name}</td>
            <td>{this.props.phone}</td>
            <td>{this.props.role}</td>
            <td>
              <button className="btn btn-warning" type="button">
                <i className="fa fa-edit ">Update</i>
              </button>
              <button className="btn btn-danger" type="button">
                <i className="fa fa-recycle" aria-hidden="true">
                  Delete
                </i>
              </button>
            </td>
          </tr>
        );
    }
}

export default RowTable;