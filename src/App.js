import React, { Component } from 'react';
import './App.css';
import * as blockstack from 'blockstack';
class App extends Component {
  render() {
    return (
      <div className="App">
        <input type="button" onClick={() => blockstack.redirectToSignIn()} value="Sign In With Blockstack" />
      </div>
    );
  }
}

constructor() {
  super();
  let user = null;
  if (blockstack.isUserSignedIn()) {
    user = blockstack.loadUserData();
  }
  if (blockstack.isSignInPending()) {
    blockstack.handlePendingSignIn()
      .then(userData => this.setState({user: userData}));
  }
  this.state = {
    user,
  };
}

renderLogin() {
  return <input type="button" onClick={() => blockstack.redirectToSignIn()} value="Sign In With Blockstack" />
}
renderProfile() {
  const user = new blockstack.Person(this.state.user.profile);
  return (
    <div>
    <h1>{user.name()}</h1>
    <h3>{user.description()}</h3>
    <input type="button" onClick={() => blockstack.signUserOut()} value="Log Out" />
  </div>
  );
}
render() {
  return (
    <div className="App">
      {this.state.user ? this.renderProfile() : this.renderLogin()}
    </div>
  );
}


export default App;