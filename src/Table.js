import React, { Component } from "react";

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cristina</td>
            <td>Frontend Developer</td>
          </tr>
          <tr>
            <td>Mary</td>
            <td>Backend Developer</td>
          </tr>
          <tr>
            <td>Sandra</td>
            <td>UX designer</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
