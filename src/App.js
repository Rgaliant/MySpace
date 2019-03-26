import React, { Fragment, } from 'react';
import Navbar from "./components/Navbar";
import UserProfile from "./components/UserProfile";
import { Switch, Route, } from "react-router-dom";
import { Container } from 'react-bootstrap'

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route
          exact
          path="/"
          render={ () => <div>Home</div> }
        />
        <Route
          exact
          path="/user/profile"
          render={ () => <UserProfile /> }
        />
      </Switch>
    </Container>
  </>
)

export default App;