import React, { Component } from 'react';

class Post extends Component {
    render() {
        const {body, title} = this.props
        return (
            <div style={{border: "1px solid silver", margin: "10px", padding: "10px", borderRadius: "4px"}}>
                <h2>Title : {title}</h2>
                <p>Body : {body}</p>
            </div>
        );
    }
}

export default Post;