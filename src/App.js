import { Component } from 'react';
import './App.css';
import Navigation from "./components/Navigation.js"
import Post from "./components/Post.js"




class App extends Component {
  constructor() {
    super();
    this.userslist = []
  }

  componentDidMount() {
    fetch("https://dumb-book-default-rtdb.europe-west1.firebasedatabase.app/users.json")
    .then(response => response.json())
    .then(users => this.userslist.push(users))
    // .then(data => console.log(data))
    .catch(error => console.log(error))
  }

  render () {
    console.log(this.userslist)
    return (
      <div className="app">
        <Navigation/>
        <Post userslist={this.userslist}/>
      </div>
    );
  }
}

export default App;
