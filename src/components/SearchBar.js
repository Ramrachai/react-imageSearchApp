import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }
  onFormSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state.term);
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={event => this.onFormSubmit(event)}>
          <div className="field">
            <label> Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => {
                this.setState({ term: e.target.value.toUpperCase() });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}
