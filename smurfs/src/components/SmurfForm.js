import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";
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
  Form
} from "reactstrap";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    };
  }

  handleChanges = e => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value
      }
    });
  };

  addSmurfToList = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.smurf);
    this.setState({
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    });
  };

  render() {
    return (
      <Form onSubmit={this.addSmurfToList}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={this.handleChanges}
          value={this.state.smurf.name}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={this.handleChanges}
          onChange={this.handleChanges}
          value={this.state.smurf.age}
        />
        <input
          type="text"
          name="height"
          placeholder="Height"
          onChange={this.handleChanges}
          value={this.state.smurf.height}
        />
        <Button color="primary" onClick={this.addSmurfToList}>
          Add Friend
        </Button>
      </Form>
    );
  }
}

const mstp = state => ({
  error: state.error
});
export default connect(
  mstp,
  { addSmurf }
)(SmurfForm);
