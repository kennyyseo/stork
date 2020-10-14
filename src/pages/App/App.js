import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import userService from '../../utils/userService';
import namesService from '../../utils/namesService';
import NavBar from '../../components/NavBar/NavBar';
import WelcomePage from '../WelcomePage/WelcomePage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NamesPage from '../NamesPage/NamesPage';
import AddNamePage from '../AddNamePage/AddNamePage';
import NameDetailPage from '../NameDetailPage/NameDetailPage';
import EditNamePage from '../EditNamePage/EditNamePage';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      names: [],
      user: userService.getUser()
    }
  }

  async componentDidMount() {
    const names = await namesService.getAll();
    this.setState({ names });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.user !== prevState.user) {
      const names = await namesService.getAll();
      this.setState({ names });
    }
  }

  handleAddName = async newNameData => {
    const newName = await namesService.create(newNameData);
    this.setState(
      state => ({
        names: [...state.names, newName]
      }),
      () => this.props.history.push('/names')
    );
  }

  handleDeleteName = async id => {
    await namesService.deleteOne(id);
    this.setState(
      state => ({
        names: state.names.filter(n => n._id !== id)
      }),
      () => this.props.history.push('/names')
    );
  }

  handleUpdateName = async updatedNameData => {
    const updatedName = await namesService.update(updatedNameData);
    const newNamesArray = this.state.names.map(n =>
      n._id === updatedName._id ? updatedName : n
    );
    this.setState(
      { names: newNamesArray },
      () => this.props.history.push('/names')
    );
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
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/' render={() =>
            <WelcomePage />
          } />
          <Route exact path='/names' render={() =>
            <NamesPage
              user={this.state.user}
              names={this.state.names}
            />
          } />
          <Route exact path='/add' render={() =>
            <AddNamePage
              handleAddName={this.handleAddName}
              user={this.state.user} />
          } />
          <Route exact path='/details' render={({ location }) =>
            <NameDetailPage
              location={location}
              handleDeleteName={this.handleDeleteName}
            />
          } />
          <Route exact path='/edit' render={({ location }) =>
            <EditNamePage
              location={location}
              handleUpdateName={this.handleUpdateName}
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
