import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: "",
  };

  render() {
    return (
      <div className="ui segment">
        <form action="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(event) => this.setState({ term: event.target.value.toUpperCase() })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
