import React, { Component } from "react";
import "./App.css";
import SmurfForm from "./SmurfForm";
import Smurfs from "./Smurfs";

const App = (props) => {
  return (
    <div className="App">
      <SmurfForm />
      <Smurfs />
    </div>
  );
};

export default App;
