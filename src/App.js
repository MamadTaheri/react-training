import React, { Component } from "react";
import axios from "axios";
import Post from "./components/Post";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) =>
      this.setState({
        postData: response.data,
      })
    );
  }

  render() {
    
    return (
      <div>
        {this.state.postData.map(post => <Post key={post.id} title={post.title} body={post.body} />)}
      </div>
    );
  }
}

export default App;
