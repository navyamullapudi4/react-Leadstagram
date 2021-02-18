import React, { Component } from "react";
import Header from "./Header";
import user from "../constants/user";
import Card from "./Card";
import Icon from "./Icon";
import Search from "./Search";
import UserList from "./UserList";

class App extends Component {
  state = {
    user: [],
    Filter: ""
  };
  handleFilterChange = e => {
    this.setState({ Filter: e.target.value });
  };
  componentDidMount() {
    this.setState({ user });
  }
  render() {
    const user = this.state.user.filter(
      user =>
        user.Name.toLowerCase().indexOf(this.state.Filter.toLowerCase()) > -1
    );
    return (
      <div className="App">
        <Header dark={true} className="Header">
          Leadstagram
        </Header>
        <div className="container-fluid">
          <div className="row">
            <Search
              Card={Card}
              Filter={this.state.Filter}
              handleFilterChange={this.handleFilterChange}
            />
          </div>
          <div className="row">
            <UserList user={user} Card={Card} Icon={Icon} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
