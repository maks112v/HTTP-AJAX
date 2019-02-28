import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import axios from 'axios';
import { Container }  from 'reactstrap';
import 'axios-progress-bar/dist/nprogress.css'
import { loadProgressBar } from 'axios-progress-bar'
import Nav from './components/Nav'
import AddFriend from './components/FriendForm'

class App extends Component {
  constructor(){
    super();
    this.state = ({
      friends: [],
      update: null,
      showUpdate: false,
    })
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends/')
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.error("ERROR", err);
      });
  }

  addFriend = (friend) =>{
    axios.post('http://localhost:5000/friends/', friend)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
      })
  }

  updateDatabase = (id, friend) => {
    axios.put(`http://localhost:5000/friends/${id}`,friend)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.error("ERROR", err);
      });
  }

  updateFriend = id => {
    this.setState({
      update: this.state.friends.find(el => el.id === id),
      showUpdate: true,
    })
  }

  resetHandler = () => {
    this.setState({
      update: null,
      showUpdate: false,
    })
  }

  deleteHandler = (id) => {
    console.log(id);
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.error("ERROR", err);
      });
  }

  render() {
    loadProgressBar()
    return (
    <Container>
        <Nav />
        <AddFriend addFriend={this.addFriend} updateDatabase={this.updateDatabase} deleteHandler={this.deleteHandler} update={this.state.update} showUpdate={this.state.showUpdate} resetHandler={this.resetHandler} />
        <Route exact path="/" render={(props) => <FriendsList {...props} updateHandler={this.updateFriend} friends={this.state.friends} />} />
    </Container>
    );
  }
}

export default App;
