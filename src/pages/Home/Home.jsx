import React, { Component } from "react";
import "./Home.scss";
import Card from "../../components/Card/Card";
import axios from "axios";
import { API_URL, API_KEY } from "../../util";

export default class Home extends Component {
  state = {
    photo: "",
    show: false,
  };

  showModal = (e) => {
    this.setState({ show: true });
  };

  componentDidMount() {
    axios
      .get(`${API_URL}?api_key=${API_KEY}`)
      .then((res) => {
        console.log("component did mount");
        console.log(res.data.title);
        this.setState({
          photo: res.data,
        });
      })
      .catch((e) => console.log(e));
  }

  render() {
    console.log(this.state.photo);
    const data = this.state.photo;
    return (
      <main>
        <h1 className="title">home</h1>
        <Card
          photo={this.state.photo}
          showModal={this.showModal}
          show={this.state.show}
        />
      </main>
    );
  }
}
