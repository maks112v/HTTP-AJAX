import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import axios from 'axios';
import { Container }  from 'reactstrap';
import 'axios-progress-bar/dist/nprogress.css'
import { loadProgressBar } from 'axios-progress-bar'
import Nav from './components/Nav'

class App extends Component {
  constructor(){
    super();
    this.state = ({
      friends: [],
    })
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends/')
      .then(res => {
        console.log("RES", res);
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log("ERROR", err);
        this.setState({ error: err });
      });
  }
  render() {
    loadProgressBar()
    return (
      <Container>
        <Nav />
        {/* Nav bar and search */}
        {/* Input Form */}
        <Route exact path="/" render={(props) => <FriendsList {...props} friends={this.state.friends} />} />
      </Container>
    );
  }
}

export default App;
