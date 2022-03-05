import { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/header/Navigation";
import PostsLog from "./components/PostsLog";
import UserProfile from "./pages/UserProfile";

const POST_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";
const USER_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

class App extends Component {
  constructor() {
    super();
    this.state = {
      postsList: [],
      usersList: [],
    };
  }
  //Comment Fetch
  async componentDidMount() {
    //  Comment fetch
    try {
      const response = await fetch(POST_ENDPOINT);
      const data = await response.json();
      this.setState({ postsList: data });
    } catch (error) {
      console.log("posts" + error);
    }

    // //USER FETCH
    try {
      const responseUser = await fetch(USER_ENDPOINT);
      const dataUser = await responseUser.json();
      this.setState({ usersList: dataUser });
    } catch (error) {
      console.log("users" + error);
    }
  }

  render() {
    const userAndComments = this.state.usersList.push(this.state.postsList)
    console.log(userAndComments)
    const { postsList, usersList } = this.state;

    
    return (
      <div className="app">
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/app/feed"/>
          </Route>
          <Route path="/app/feed">
            <PostsLog usersList={usersList} postsList={postsList}/>
          </Route>
          <Route path="/user/:userId">
            <UserProfile usersList={usersList}/>
          </Route>
          <Route path="/"></Route>
        </Switch>
      </div>
    );
  }
}

export default App;

// componentDidMount() {
//   fetch(POST_ENDPOINT)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       this.setState({ postsList: data });
//     })
//     .catch(error => console.log(error))
// }

// async componentDidMount() {
//   try {
//     const response = await fetch(POST_ENDPOINT)
//     const data = await response.json()
//     console.log(data)
//     this.setState({ postsList: data})
//   } catch (error) {
//     console.log(error)
//   }
// }
