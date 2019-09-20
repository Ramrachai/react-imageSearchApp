import React, { Component } from "react";
import SearchBar from "./SearchBar";
export default class app extends Component {
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar handleSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
