import React, { Component } from 'react';
import axios from 'axios';

class SendPost extends Component {
    constructor(props){
        super(props);
        this.state = {
           title: ""
        }
    }

    url = "https://jsonplaceholder.typicode.com/posts"

    changeHandler = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    postHandler = () => {
        const title = this.state.title;
        axios.post(this.url, {title: title})
        .then(response => console.log(response.data))
    }

    render() {
        const {title} = this.state
        return (
            <div>
                <input type="text" value={title} onChange={this.changeHandler} />
                <button className="" onClick={this.postHandler}>Send Post</button>
            </div>
        );
    }
}

export default SendPost;