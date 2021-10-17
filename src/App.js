import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          postData: json,
        })
      );
  }

  sendPostRequest = () => {

    const body = JSON.stringify({
      title: "mamad",
      body: "taheri",
      userId: 1,
    })

    const headers = {
      "Content-type": "application/json; charset=UTF-8",
    }

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: body,
      headers: headers,
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  render() {
    return (
      <div>
        {/* <button onClick={this.getData}>get posts</button> */}
        {/* <h1>Posts : </h1> */}
        {/* {this.state.postData.map(post => <p key={post.id}>{post.id + " -> " + post.title}</p>)} */}
        <button className="" onClick={this.sendPostRequest}>
          Send Post request
        </button>
      </div>
    );
  }
}

export default App;
