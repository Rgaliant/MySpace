import React from "react";
import { Form, } from "react-bootstrap";

class UserForm extends React.Component {
  state = { email: "", username: "", city: "", state: "", country: "", bio: "" };
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value, });
  
  handleSubmit = (e) => {
    e.preventDefault();
  }
  
  render() {
    const { email, username, city, state, country, bio } = this.state
    return (
      <>
      {/* <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="New Username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Email"
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange} 
        />
        <Form.Input
          label="City"
          type="text"
          name="city"
          value={city}
          onChange={this.handleChange} 
        />
        <Form.Input
          label="State"
          type="text"
          name="state"
          value={state}
          onChange={this.handleChange} 
        />
        <Form.Input
          label="Country"
          type="text"
          name="country"
          value={country}
          onChange={this.handleChange} 
        />
        <Form.Input
          label="Bio"
          type="text"
          name="bio"
          value={bio}
          onChange={this.handleChange} 
        />
        <Form.Button color="blue">Save</Form.Button>
      </Form> */}
      </>
    )
  }
}

export default UserForm;