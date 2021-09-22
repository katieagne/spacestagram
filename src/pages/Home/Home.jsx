import React, { Component } from "react";
import "./Home.scss";
import Card from "../../components/Card/Card";
import axios from "axios";
import { API_URL, API_KEY } from "../../util";

export default class Home extends Component {
  state = {
    photo: "",
  };

  componentDidMount() {
    axios
      .get(`${API_URL}?api_key=${API_KEY}`)
      .then((res) => {
        this.setState({
          photo: res.data,
        });
      })
      .catch((e) => console.log(e));
  }

  render() {
    return (
      <main className="main">
        <Card photo={this.state.photo} />
      </main>
    );
  }
}
