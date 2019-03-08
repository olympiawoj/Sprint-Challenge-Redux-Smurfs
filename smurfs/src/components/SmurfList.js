import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { getSmurfs } from "../actions";

import SmurfForm from "./SmurfForm";

const SmurfList = props => {
  const getSmurfList = e => {
    e.preventDefault();
    props.getSmurfs();
  };

  return (
    <div>
      <button onClick={getSmurfList}>Get Smurfs</button>
      {props.error && <h4>{props.error}</h4>}
      {props.fetchingSmurfs && <h4>Loading smurfs...</h4>}
      {props.smurfs.map(smurf => (
        <div>
          <p>Name: {smurf.name}</p>
          <p>Age: {smurf.age}</p>
          <p>Height: {smurf.height}</p>
        </div>
      ))}
      <SmurfForm />
    </div>
  );
};

const mstp = state => ({
  smurfs: state.smurfs,
  error: state.error,
  fetchingSmurfs: state.fetchingSmurfs
});

export default connect(
  mstp,
  { getSmurfs }
)(SmurfList);
