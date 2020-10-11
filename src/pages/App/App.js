import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect, NavLink } from "react-router-dom";
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NamePage from '../../components/NamePage/NamePage'
import * as nameAPI from "../../services/names-api";
import userService from '../../utils/userService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: [],
      user: userService.getUser()
    }
  }

  async componentDidMount() {
    const apiNames = await nameAPI.getAll();
    this.setState({ names: apiNames })
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
          <Route exact path='/' render={() =>
            <NamePage
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
