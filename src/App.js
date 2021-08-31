import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
    };
  }

  getPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          postData: json,
        })
      );
  }

  sendPost = () => {
    const body = JSON.stringify({
      title: "mamad",
      body: "Mohammad Taheri",
      userId: 1,
    });
    const headers = {
      "Content-type": "application/json; charset=UTF-8",
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: body,
      headers: headers,
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  deletePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",})
      .then(response => console.log(response.status))
  };

  render() {
    return (
      <div>
        <button onClick={this.getPost}>Get post</button>
        <br />
        <br />
        <button onClick={this.sendPost}>Post</button>
        <br />
        <br />
        <button onClick={this.deletePost}>Delete</button>
        <h1>Posts: </h1>
        {this.state.postData.map((post) => (
          <p key={post.id}>
            {post.id} {" => "} {post.title}
          </p>
        ))}
      </div>
    );
  }
}

export default App;
