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
          <div style={{ width: "30%", marginLeft: 0, }}>
          <br />
          <h3>{ value.username }</h3>
          <br />
            <Image style={{ width: "210px", height: "200px" }} src="https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg" alt="avatar" />
          </div>
          <br />
          <p style={{ paddingBottom: '5px'}}> View My: <a href='/'>Pics</a> | <a href='/'>Videos</a></p>
        </Col>
        <Col style={{ fontSize: "16px", paddingLeft: "1px" }}>
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
          <br />
          <br />
          <p style={{ marginBottom: 0 }}>Last Login: </p>
          <p>{ value.lastLogin } </p>
        </Col>
        <Col>
          <br />
          <div style={{ fontSize: "28px", border: "2px solid black", padding: "10px", width: "520px", height: "80px", textAlign: "center" }}>
            { value.username}'s Blogs
          </div>
          <br />
            <strong><p style={{ fontSize: "14px", marginBottom: "10px" }}>Lorem ipsum sit amet, adipiscing. [<a style={{ fontSize: "14px", }} href="/">View More</a>]</p></strong>
            <p style={{ fontSize: "14px", marginBottom: "10px" }}>Etiam dui dui, eleifend.(<a style={{ fontSize: "14px", }} href="/">View More</a>)</p>
            <p style={{ fontSize: "14px", marginBottom: "10px" }}>Praesent at lobortis ipsum. Maecenas. (<a style={{ fontSize: "14px", }} href="/">View More</a>)</p>
            <p style={{ fontSize: "14px", marginBottom: "10px" }}>Suspendisse quis magna at ipsum. (<a style={{ fontSize: "14px", }} href="/">View More</a>)</p>
            <p style={{ fontSize: "14px", marginBottom: "10px" }}>Donec placerat nisi risus, id pretium. (<a style={{ fontSize: "14px", }} href="/">View More</a>)</p>
            [<a style={{ fontSize: "14px", }} href="/">View All Blog Entries</a>]
            <br />
            <br />
          </Col>
        </Row>
      <Row>
        <Col>
        <div 
        style={{
          
        }}
        >
        <Table style={{ border: "1px solid black" }}hover size="sm">
          <thead style={{ backgroundColor: "#56AFEC", color: "white", }}>
            <tr>
              <th>
                Contact { value.username }
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
            <tr>
              <td>
                <a href="/">
              👨‍👩‍👧‍👦 Add to Group
                </a>
              </td>
              <td>
                <a href="/">
              📈 Rank User
                </a>
              </td>

            </tr>
          </tbody>
        </Table>
        </div>
        <div>
          <Table size="sm" style={{ border: "1px solid black"  }}>
            <thead style={{ backgroundColor: "#56AFEC", color: "white", }}>
              <tr>
                <th style={{ width: "35%"}}>
                  { value.username }'s Interests
                </th>
                <th>

                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "10px", backgroundColor: "#9BD4F5", color: "#2E77BB"}}>
                  <strong>General </strong>
                </td>
                <td style={{ backgroundColor: "#D1E9FF", fontSize: "12px"}}>
                Vivamus dignissim auctor imperdiet. Nullam feugiat odio arcu, quis imperdiet ipsum iaculis quis. Nam ut lectus sed lacus imperdiet imperdiet bibendum in odio. Pellentesque interdum ligula mauris, ut bibendum purus ultrices.
                </td>
              </tr>
            </tbody>
          </Table>
          <Table size="sm" style={{ border: "1px solid black"  }}>
            <thead style={{ backgroundColor: "#56AFEC", color: "white", }}>
              <tr>
                <th style={{ width: "35%"}}>
                  { value.username }'s Details
                </th>
                <th>

                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "10px", backgroundColor: "#9BD4F5", color: "#2E77BB", fontSize: "14px"}}>
                  <strong>Status: </strong>
                </td>
                <td style={{ padding: "10px", backgroundColor: "#D1E9FF", fontSize: "12px"}}>
                  Single
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", backgroundColor: "#9BD4F5", color: "#2E77BB", fontSize: "14px"}}>
                  <strong>Here For: </strong>
                </td>
                <td style={{ padding: "10px", backgroundColor: "#D1E9FF", fontSize: "12px"}}>
                  Dating, Serious Relationships, Friends
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", backgroundColor: "#9BD4F5", color: "#2E77BB", fontSize: "14px"}}>
                  <strong>Body Type: </strong>
                </td>
                <td style={{ padding: "10px", backgroundColor: "#D1E9FF", fontSize: "12px"}}>
                  6'2 / Athletic
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", backgroundColor: "#9BD4F5", color: "#2E77BB", fontSize: "14px"}}>
                  <strong>Ethnicity: </strong>
                </td>
                <td style={{ padding: "10px", backgroundColor: "#D1E9FF", fontSize: "12px"}}>
                  Caucasian/White
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", backgroundColor: "#9BD4F5", color: "#2E77BB", fontSize: "14px"}}>
                  <strong>Zodiac Sign: </strong>
                </td>
                <td style={{ padding: "10px", backgroundColor: "#D1E9FF", fontSize: "12px"}}>
                  Torus
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        </Col>
        <Col>
        <Table variant="sm">
              <thead style={{ backgroundColor: "#FFDF9E", color: "#FF971A", }}>
                <tr>
                  <th>
                    { value.username }'s Blurbs
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ color: "#FF971A", }}>
                    <strong>About Me:</strong>
                  </td>
                </tr>
                <tr>
                Morbi tincidunt, nunc ac venenatis iaculis, augue tellus consectetur eros, sit amet porttitor diam neque nec nisi. Etiam at urna leo. Donec pharetra magna sit amet hendrerit pulvinar. Morbi ut orci enim.
                </tr>
                <br />
                <tr>
                  <td style={{ color: "#FF971A", }}>
                    <strong>Who I'd Like to Meet:</strong>
                  </td>
                </tr>
                <tr>
                Etiam at urna leo. Donec pharetra magna sit amet hendrerit pulvinar. Morbi ut orci enim.
                </tr>
              </tbody>
            </Table>
            <Table variant="sm">
              <thead style={{ backgroundColor: "#FFDF9E", color: "#FF971A", }}>
                <tr>
                  <th>
                    { value.username }'s Friend Space
                  </th>
                </tr>
              </thead>
            </Table>
        </Col>
      </Row>
    </Container>
    </>
    )}
  </UserConsumer>
)

export default User;