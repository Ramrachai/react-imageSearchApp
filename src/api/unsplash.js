import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 509950d3625ce9f46b51f3ba6956f4646aace89ea98e6b38f2a46c8565f5ded5"
  }
});
