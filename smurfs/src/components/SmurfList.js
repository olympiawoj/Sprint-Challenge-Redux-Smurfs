import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { getSmurfs, deleteSmurf } from "../actions";
import {
  Container,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardHeader,
  Button,
  Spinner
} from "reactstrap";

import SmurfForm from "./SmurfForm";

const SmurfList = props => {
  const getSmurfList = e => {
    e.preventDefault();
    props.getSmurfs();
  };

  return (
    <Container class="d-flex justify-content-center">
      <Button color="primary" onClick={getSmurfList}>
        Get Smurfs
      </Button>
      {props.error && <h4>{props.error}</h4>}
      {props.fetchingSmurfs && <Spinner color="primary" />}
      {props.smurfs.map(smurf => (
        <Col sm="12">
          <Card class="align-self-center">
            <CardHeader>
              Name: {smurf.name}{" "}
              <Button onClick={() => props.deleteSmurf(smurf.id)} close />
            </CardHeader>
            <CardBody>
              <CardText>Age: {smurf.age}</CardText>
              <CardText>Height: {smurf.height}</CardText>
            </CardBody>
          </Card>
        </Col>
      ))}
      <SmurfForm />
    </Container>
  );
};

const mstp = state => ({
  smurfs: state.smurfs,
  error: state.error,
  fetchingSmurfs: state.fetchingSmurfs
});

export default connect(
  mstp,
  { getSmurfs, deleteSmurf }
)(SmurfList);
