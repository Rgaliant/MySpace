import React from "react";
import { Form, } from "react-bootstrap";

class UserForm extends React.Component {
  state = { username: "", membershipLevel: "", };
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value, });
  
  handleSubmit = (e) => {
    e.preventDefault();
  }
  
  render() {
    
    return (
      <>
      </>
    )
  }
}

export default UserForm;