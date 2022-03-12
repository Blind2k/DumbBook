import { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

import Navigation from "./components/header/Navigation";
import PostsLog from "./components/Posts/PostsLog";

import UserProfileCollection from "./pages/UserProfileCollection";
import UserProfilePage from "./pages/UserProfilePage";

const POST_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";
const USER_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

class App extends Component {
  constructor() {
    super();
    this.state = {
      exUsersArray: [],
      exPostsArray: [],
    };
  }

  async componentDidMount() {
    try {
      const responseUser = await fetch(USER_ENDPOINT);
      const responsePost = await fetch(POST_ENDPOINT);
      const dataResponseUser = await responseUser.json();
      const dataResponsePost = await responsePost.json();
      this.setState({ exUsersArray: dataResponseUser });
      this.setState({ exPostsArray: dataResponsePost });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { exUsersArray, exPostsArray } = this.state;
    return (
      <div className="app">
        <Navigation />
        <main>
          <Switch>
            {/* REROUTES */}
            <Route path="/" exact>
              <Redirect to="/feed" />
            </Route>
            <Route path="/users" exact>
              <Redirect to="/user" />
            </Route>

            {/* REAL ROUTES */}
            <Route path="/feed">
              <PostsLog usersInfo={exUsersArray} usersPosts={exPostsArray} />
            </Route>
            <Route path="/user" exact>
              <UserProfileCollection usersInfo={exUsersArray} />
            </Route>

            {/* DYNAMIC ROUTES */}
            <Route path="/user/:userId">
              <UserProfilePage  usersInfo={exUsersArray}/>
            </Route>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
