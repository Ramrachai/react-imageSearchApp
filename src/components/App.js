import React, { Component } from "react";
import SearchBar from "./SearchBar";
export default class app extends Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar />
      </div>
    );
  }
}
