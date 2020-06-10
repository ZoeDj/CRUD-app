import React, { Component } from "react";
import "./index.css";
import Table from "./Table";

class App extends Component {
  render() {
    const users = [
      {
        name: "Cristina",
        job: "Frontend Developer",
      },
      {
        name: "Mary",
        job: "Backend Developer",
      },
      {
        name: "Sandra",
        job: "UX Designer",
      },
    ];
    return (
      <div className="container">
        <Table userData={users} />
      </div>
    );
  }
}

export default App;
