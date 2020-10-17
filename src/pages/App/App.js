import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import userService from '../../utils/userService';
import namesService from '../../utils/namesService';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import WelcomePage from '../WelcomePage/WelcomePage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NamesPage from '../NamesPage/NamesPage';
import AddNamePage from '../AddNamePage/AddNamePage';
import NameDetailPage from '../NameDetailPage/NameDetailPage';
import EditNamePage from '../EditNamePage/EditNamePage';
import SettingsPage from '../SettingsPage/SettingsPage';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: [],
      user: userService.getUser(),
      gender: '',
      dueDate: '',
      daysLeft: '',
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

  handleGenderChange = (e) => {
    this.setState({ gender: e.target.value });
  }

  handleDueDateChange = (e) => {
    this.setState({ dueDate: e.target.value })
  }

  calculateDaysLeft = () => {
    const oneDay = 24 * 60 * 60 * 1000
    const dueDate = this.state.dueDate
    const today = new Date().toISOString().slice(0, 10);
    const firstDate = new Date(today.split('-').join(','))
    const secondDate = new Date(dueDate.split('-').join(','))
    const diffDays = Math.round(Math.abs((secondDate - firstDate) / oneDay))
    this.setState({ daysLeft: diffDays })
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  onDragEnd = (result) => {
    const { destination, source, reason } = result;
    if (!destination || reason === 'CANCEL') {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    const names = Object.assign([], this.state.names.filter(name => (this.state.user._id === name.user)));
    const droppedName = this.state.names.filter(name => (this.state.user._id === name.user))[source.index];
    names.splice(source.index, 1);
    names.splice(destination.index, 0, droppedName);
    this.setState({
      names
    });
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
            <WelcomePage
              user={this.state.user}
              names={this.state.names}
              handleGenderChange={this.handleGenderChange}
              gender={this.state.gender}
            />
          } />
          <Route exact path='/settings' render={() =>
            < SettingsPage
              user={this.state.user}
              names={this.state.names}
              gender={this.state.gender}
              dueDate={this.state.dueDate}
              handleGenderChange={this.handleGenderChange}
              handleDueDateChange={this.handleDueDateChange}
            />
          } />
          <Route exact path='/names' render={() =>
            <NamesPage
              user={this.state.user}
              names={this.state.names}
              gender={this.state.gender}
              daysLeft={this.state.daysLeft}
              dueDate={this.state.dueDate}
              onDragEnd={this.onDragEnd}
              calculateDaysLeft={this.calculateDaysLeft}
            />
          } />
          <Route exact path='/add' render={() =>
            <AddNamePage
              handleAddName={this.handleAddName}
              user={this.state.user}
              gender={this.state.gender}
            />
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
        <Footer />
      </div>
    );
  }
}

export default App;
