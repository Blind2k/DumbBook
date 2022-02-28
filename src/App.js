import { Component } from 'react';
import './App.css';
import Navigation from "./components/Navigation.js"
import Post from "./components/Post.js"

let dataArray = {
  "id": "1",
  "privatename": "Dave",
  "lastname": "Douh",
  "nickname": "Dough2987",
  "email": "Dami@gmail.com",
  "birthday": "01/09/1123",
  "popup": {
    "hobbies": [
      {
        "art": "Archery",
        "exp": "New",
        "achivment": "Shoot the sherif"
      },
      {
        "art": "Painting",
        "exp": "9 years",
        "achivment": "Painted the mona lisa with my fingers"
      }
    ],
    "posts": [
      {
        "date": "01/05/1988",
        "title": "Master P",
        "body": "OMG. I just took my finger from my ear. Guess what I found",
        "likes": 0
      },
      {
        "date": "01/05/1988",
        "title": "Master P",
        "body": "OMG. I just took my finger from my ear. Guess what I found",
        "likes": 2
      },
      {
        "date": "01/05/1988",
        "title": "(Q.Q)",
        "body": "have you ever ",
        "likes": 5
      }
    ]
  }
}


class App extends Component {
  constructor() {
    super();
    this.userlist = []

  }
  render () {
    console.log(dataArray.nickname)
    return (
      <div className="app">
        <Navigation/>
        <Post dataArray={dataArray}/>
      </div>
    );
  }
}

export default App;
