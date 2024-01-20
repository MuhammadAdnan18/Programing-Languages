import Navbar from "./components/Navbar";
import "./App.css";
import React, { Component } from "react";
import News from "./components/News";

//instead of built in function based component we create a classs based component
//in class we can create multiple functions and use all features of oop and classes like constructor(this.name), inheritence and call functions
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize={6} />
      </div>
    );
  }
}
