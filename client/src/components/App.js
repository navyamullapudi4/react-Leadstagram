import React, { Component } from "react";
import Header from "./Header";
import user from "../constants/user";
import Card from "./Card";
import Icon from "./Icon";

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
            <div className="col-12">
              <Card className="mb-3" Header="Filter">
                <form action="">
                  <div className="form-group m-0">
                    <label htmlFor="enterName" className="sr-only">
                      Enter Name
                    </label>
                    <input
                      type="text"
                      name="enterName"
                      id="enterName"
                      className="form-control"
                      palceholder="Enter Name"
                      value={this.state.Filter}
                      onChange={this.handleFilterChange}
                    />
                  </div>
                </form>
              </Card>
              <form action=""></form>
            </div>
          </div>
          <div className="row">
            {user.length === 0 ? (
              <div className="col-12">
                <div className="alert alert-danger text-center">
                  sorry no users found
                </div>
              </div>
            ) : (
              user.map((user, key) => (
                <div className="col-4 mb-3" key={key}>
                  <Card
                    Image={"https://i.imgur.com/DKUR9Tkl.jpg"}
                    ImgAlign
                    Header={user.Name}
                    Title={
                      user.whatsApp ? (
                        <Icon Network="Phone" Profile={user.whatsApp} />
                      ) : null
                    }
                  >
                    <pre className="p-2 bg-light border rounded">
                      {JSON.stringify(Object.keys(user.Social), null, 2)}
                    </pre>
                    {Object.keys(user.Social).map(
                      nw =>
                        user.Social[nw] && (
                          <Icon Network={nw} Profile={user.Social[nw]} />
                        )
                    )}
                  </Card>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
