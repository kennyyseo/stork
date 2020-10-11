import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NamesPage from '../NamesPage/NamesPage'
import userService from '../../utils/userService';
import namesService from '../../utils/namesService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: [],
      user: userService.getUser()
    }
  }

  async componentDidMount() {
    const names = await namesService.index();
    this.setState({ names });
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  render() {
    return (
      <div className="App">
        <header className='App-header'>Stork</header>
        <Switch>
          <Route exact path='/names' render={() =>
            <NamesPage
              user={this.state.user}
            />
          } />
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              handleSignupOrLogin={this.handleSignupOrLogin}
              history={history}
            />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
