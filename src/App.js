import { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation.js";
import PostsLog from "./components/PostsLog.js";
import UserProfile from "./components/UserProfile.js";

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

  async componentDidMount() {
    try {
      const response = await fetch(POST_ENDPOINT);
      const data = await response.json();
      this.setState({ postsList: data });
    } catch (error) {
      console.log("posts" +error);
    }
  }

  // async componentDidMount() {
  //   try {
  //     const response = await fetch(USER_ENDPOINT);
  //     const data = await response.json()
  //     this.setState({usersList: data})
  //   } catch (error) {
  //     console.log("users" + error)
  //   }
  // }

  render() {
    const {postsList, usersList } = this.state
    return (
      <div className="app">
        <Navigation />
        <PostsLog 
          postsList={postsList} 
          // usersList={usersList}
        />
        {/* {this.showUser.searchUser && <UserProfile usersList={this.usersList}/>} */}
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
