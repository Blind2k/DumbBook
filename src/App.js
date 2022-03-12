import { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/header/Navigation";
import PostsLog from "./components/PostsLog";
// import UserProfile from "./pages/UserProfile";

const POST_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";
const USER_ENDPOINT = "https://jsonplaceholder.typicode.com/users";


class App extends Component {
  constructor() {
    super();
    this.state = {
      userAndPosts: [],
    };
  }
  //Comment Fetch
  async componentDidMount() {
    //  Comment fetch
    try {
      const responseUser = await fetch(USER_ENDPOINT);
      const responsePost = await fetch(POST_ENDPOINT);
      const dataUser = await responseUser.json();
      const dataPost = await responsePost.json();
      
      // var res = [];
      // for(let d1 of dataUser){
      // res.push({...d1,...dataPost.find(d2=>d2.userId==d1.id)})
      // console.log(res)
    // }
    let res = dataUser.map((item, i) => Object.assign({}, item, dataPost[i]));

      
      console.log(res)
      this.setState({userAndPosts: res})
      // this.setState({ postsList: dataPost });
      // this.setState({ usersList: dataUser });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className="app">
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/feed"/>
          </Route>
          <Route path="/feed">
            {/* <PostsLog/> */}
          </Route>
          <Route path="/user">
            {/* <UserProfile usersList={searchedUser[0]}/> */}
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
