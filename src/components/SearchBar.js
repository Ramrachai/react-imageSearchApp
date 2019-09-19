import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          Search: <input type="text" />
        </form>
      </div>
    );
  }
}
