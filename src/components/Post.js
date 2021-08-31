import React, { Component } from 'react'

class Post extends Component {
    render() {
        const {body, title, deletePost} = this.props
        return (
            <div style={{border:"1px grey solid", margin:"10px", padding:"10px"}}>
                <h2>Title: {title}</h2>
                <p>Body: {body}</p>
                <button onClick={deletePost}>Delete</button>
            </div>
        )
    }
}

export default Post