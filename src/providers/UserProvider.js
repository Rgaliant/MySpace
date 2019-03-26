import React from "react";

// Set Up The Initial Context
const UserContext = React.createContext();

// Create an exportable consumer that can be injected into components
export const UserConsumer = UserContext.Consumer;

// Create the provider using a traditional React.Component class
class UserProvider extends React.Component {
  state = {
    username: "Fooman77",
    lastLogin: "12/18/18",
    gender: "Male",
    email: "Foochoo@gmail.com",
    city: "Salt Lake City",
    state: "UTAH",
    country: "United States",
    bio: ":-]",
  };
    
  render() {
    return (
      <UserContext.Provider value={this.state}>
        { this.props.children }
      </UserContext.Provider>
    )
  }
}

export default UserProvider;