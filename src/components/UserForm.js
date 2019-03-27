import React from "react";
import { Form, Button } from "react-bootstrap";
import { UserConsumer, } from "../providers/UserProvider";

class UserForm extends React.Component {
  state = { 
    username: this.props.username, 
    email: this.props.email,
    city: this.props.city,
    stateU: this.props.stateU,
    country: this.props.country,
    gender: this.props.gender,
    bio: this.props.bio,
   };
  
  // handleChange = (e, { name, value }) => this.setState({ [name]: value, });
  
  handleSubmit = (e) => {
    e.preventDefault();
    const user = { ...this.state, };
    this.props.updateUser(user);
  }
  
  render() {
    const { username, email, city, stateU, country, gender, bio } = this.state;
    return (
  <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="text" placeholder="Enter email" name="name" defaultValue={email} onChange={this.handleChange} />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicUsername">
      <Form.Label>Username</Form.Label>
      <Form.Control type="text" placeholder="Username" defaultValue={username} />
    </Form.Group>
    <Form.Group controlId="formBasicCity">
      <Form.Label>City</Form.Label>
      <Form.Control type="text" placeholder="City" defaultValue={city} />
    </Form.Group>
    <Form.Group controlId="formBasicState">
      <Form.Label>State</Form.Label>
      <Form.Control type="text" placeholder="State" defaultValue={stateU} />
    </Form.Group>
    <Form.Group controlId="formBasicCountry">
      <Form.Label>Country</Form.Label>
      <Form.Control type="text" placeholder="Country" defaultValue={country} />
    </Form.Group>
    <Form.Group controlId="formBasicGender">
      <Form.Label>Gender</Form.Label>
      <Form.Control type="text" placeholder="Gender" defaultValue={gender} />
    </Form.Group>
    <Form.Group controlId="formBasicBio">
      <Form.Label>Bio</Form.Label>
      <Form.Control type="text" placeholder="Bio" defaultValue={bio} />
    </Form.Group>
    
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form> 
    )
  }
}

const ConnectedUserForm = (props) => {
  return (
    <UserConsumer>
      { value => (
        <UserForm 
          { ...props }
          username={value.username}
          email={value.email}
          city={value.city}
          stateU={value.stateU}
          country={value.country}
          gender={value.gender}
          bio={value.bio}
          updateUser={value.updateUser}
        />
      )}
    </UserConsumer>
  )
}

export default ConnectedUserForm;