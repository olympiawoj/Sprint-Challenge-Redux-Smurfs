import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { getSmurfs } from "../actions";

const SmurfList = props => {
  const getSmurfList = e => {
    e.preventDefault();
    props.getSmurfs();
  };

  return (
    <div>
      <button onClick={getSmurfList}>Get Smurfs</button>

      {props.smurfs.map(smurf => (
        <p>{smurf.name}</p>
      ))}
    </div>
  );
};

const mstp = state => ({
  smurfs: state.smurfs
});

export default connect(
  mstp,
  { getSmurfs }
)(SmurfList);
