import React, { Component } from "react";
import "./index.css";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    users: [],
  };

  removeUser = (index) => {
    const { users } = this.state;

    this.setState({
      users: users.filter((user, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (user) =>
    this.setState({ users: [...this.state.users, user] });

  render() {
    return (
      <div className="container">
        <Table userData={this.state.users} removeUser={this.removeUser} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
