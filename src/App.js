import React, { Component } from "react";
import "./index.css";
import Table from "./Table";

class App extends Component {
  state = {
    users: [
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
    ],
  };

  removeUser = (index) => {
    const { users } = this.state;

    this.setState({
      users: users.filter((user, i) => {
        return i !== index;
      }),
    });
  };

  render() {
    return (
      <div className="container">
        <Table userData={this.state.users} removeUser={this.removeUser} />
      </div>
    );
  }
}

export default App;
