import React, { Component } from "react";

class App extends Component {

  constructor(props){
      super(props);
      this.state = {
         postData: []
      }
  } 

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => this.setState({
      postData: json
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.getData}>get posts</button>
        <h1>Posts : </h1>
        {this.state.postData.map(post => <p key={post.id}>{post.id + " -> " + post.title}</p>)}
      </div>
    );
  }
}

export default App;
