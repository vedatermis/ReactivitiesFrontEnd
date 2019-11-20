import React, { Component } from "react";
import { Header, Icon } from "semantic-ui-react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header as="h2">
          <Icon name="users" />
          <Header.Content>Reactivities</Header.Content>
        </Header>
      </div>
    );
  }
}

export default App;
