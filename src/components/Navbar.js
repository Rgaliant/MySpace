import React from "react";
import { NavLink, } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';


const NavbarMe = () => (
  <>
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/">MySpace</Navbar.Brand>
  </Navbar>
  <Navbar 
  style={{
    height: "30px",
    // backgroundImage: "linear-gradient(to right, red , yellow)",
    position: "relative",

  }} 
  bg="primary" 
  variant="dark"
  >
    <Nav className="mr-auto">
        <Nav.Link 
        style={{ 
          position: "relative",
          height: "30px",
          width: "70px",
          color: "white",
          }}
        href="/"
        >
            Home
        </Nav.Link>
        <Nav.Link
        style={{ 
          position: "relative",
          height: "30px",
          width: "70px",
          color: "white",
        }}
        >
        Mail
        </Nav.Link>
        <Nav.Link
        style={{ 
          position: "relative",
          height: "30px",
          width: "70px",
          color: "white",
        }}
        >
        Profile
        </Nav.Link>
        <Nav.Link
        style={{ 
          position: "relative",
          height: "30px",
          width: "70px",
          color: "white",
        }}
        >
        Friends
        </Nav.Link>
        <Nav.Link
        style={{ 
          position: "relative",
          height: "30px",
          width: "70px",
          color: "white",
        }}
        >
        Music
        </Nav.Link>
        <Nav.Link
        style={{ 
          position: "relative",
          height: "30px",
          width: "70px",
          color: "white",
        }}
        >
        Video
        </Nav.Link>
        <Nav.Link
        style={{ 
          position: "relative",
          height: "30px",
          width: "70px",
          color: "white",
        }}
        >
        Games
        </Nav.Link>
        <Nav.Link
        style={{ 
          position: "relative",
          height: "30px",
          width: "70px",
          color: "white",
        }}
        >
        Events
        </Nav.Link>
        <Nav.Link
        style={{ 
          position: "relative",
          height: "30px",
          width: "70px",
          color: "white",
        }}
        >
        More
        </Nav.Link>
        </Nav>
        <Nav>
        <Nav.Link 
        style={{ 
          position: "relative",
          height: "30px",
          width: "90px",
          color: "white",
        }}
        href="/user/profile"
        >
          
            {/*  be replaced with the actual username */}
            username
        </Nav.Link>  
        <Nav.Link 
        style={{ 
          position: "relative",
          height: "30px",
          width: "70px",
          color: "white",
        }}
        href="/"
        >
          SignOut
        </Nav.Link> 
      </Nav>
    </Navbar>
  </>
)

export default NavbarMe;