import React from "react";
import { UserConsumer } from '../providers/UserProvider'
import { Card, Image, Container, Row, Col, Table } from "react-bootstrap";

const User = () => (
  <UserConsumer>
    { value => (
    <>
    <Container>
      <Row>
        <Col>
          <div style={{ width: "40%", marginLeft: 0, }}>
          <br />
          <h4>{ value.username }</h4>
          <br />
            <Image src="https://loremflickr.com/220/200/profilepic" alt="avatar" />
          </div>
          <p> View My: <a href='/'>Pics</a> | <a href='/'>Videos</a></p>
        </Col>
      <Col style={{ fontSize: "12px" }}>
      <br />
      <br />
      <br />
      <p>"{value.bio}"</p>
      <p style={{ marginBottom: 0 }}>{ value.gender }</p>
      <p style={{ marginBottom: 0 }}>{value.city},</p>
      <p style={{ marginBottom: 0 }}>{value.state}</p>
      <p>{ value.country }</p>
      <br />
      <br />
      <p style={{ marginBottom: 0 }}>Last Login: </p>
        <p>{ value.lastLogin } </p>
      </Col>
      <Col>
        FRIENDS
      </Col>
      </Row>
      <Row>
        <Col>
        <div 
        style={{
          
        }}
        >
        <Table hover size="sm">
          <thead style={{ backgroundColor: "#56AFEC", color: "white", }}>
            <tr>
              <th>
                Contact username
              </th>
              <th>

              </th>
            </tr>
          </thead>
          <tbody style={{ fontSize: "12px" }}>
            <tr>
              <td>
                <a href="/">
              📩 Message Me
                </a>
              </td>
            
              <td>
                <a href="/">
              📤 Forward to Friend
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="/">
              👥 Add to Friends
                </a>
              </td>
            
              <td>
                <a href="/">
              ⭐️ Add to Favorites
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="/">
              📲 Instant Message
                </a>
              </td>
              <td>
                <a href="/">
              🚫 Block User
                </a>
              </td>
            </tr>
          </tbody>
        </Table>
        </div>
        </Col>
        <Col>
        </Col>
      </Row>
    </Container>
    </>
    )}
  </UserConsumer>
)

export default User;