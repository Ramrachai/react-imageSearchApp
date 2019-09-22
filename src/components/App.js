import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Unsplash from "../api/unsplash";
import ImageList from "./imageList";
export default class app extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: []
    };
    // this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }
  // onSearchSubmit(term) {
  //   Axios.get("https://api.unsplash.com/search/photos", {
  //     params: { query: term, per_page: 20 },
  //     headers: {
  //       Authorization:
  //         "Client-ID 509950d3625ce9f46b51f3ba6956f4646aace89ea98e6b38f2a46c8565f5ded5"
  //     }
  //   }).then(res => {
  //     const imgData = res.data.results[3].urls.thumb;
  //     console.log(imgData);
  //     this.setState({ img: imgData });
  //   });
  // }
  onSearchSubmit = async term => {
    const imgResponse = await Unsplash.get("/search/photos", {
      params: { query: term, per_page: 10 }
    });
    this.setState({ img: imgResponse.data.results });
    console.log(this.state.img);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar handleSubmit={this.onSearchSubmit} />
        <p> Total images found: {this.state.img.length} </p>
        <ImageList src={this.state.img} />
      </div>
    );
  }
}
