
import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Link, // ahref equiv
    Route // to catch the cliked route

} from 'react-router-dom'
import {

    Nav, Container,Row,Col,Card

} from 'react-bootstrap'
import Login from './components/Login/Login' // folder then filename
import Register from './components/Register/Register'
import Users from './Users/Users'

import Logo from '../public/assets/js.jpg';


class Index extends React.Component {

    constructor() {

        super()
    }



    Footer = () => {
     return (
                <Row>
                  <Col sm={4}>
                  About Hotel
                  Location:
                  Phone:

                  </Col>
                  <Col sm={4}>
                  Copyright
                </Col>
                  <Col sm={4}>
                  Map
                </Col>
        </Row>
            )

}
    render() {
        return (
          <Container>
  <Row style={{marginBottom:'30px'}}>
    <Col sm={8}>
    </Col>
    <Col sm={4}>
    </Col>
  </Row> 
            <div> {/* for wrapping jsx components or use Fragment <> </> */}
                
                <Router>
                <Row style={{marginBottom:'40px'}}>
                <div>

          <Nav  variant="pills" >
                <Nav.Item>
                  <Nav.Link as={Link} to="/" >Home</Nav.Link> {/*as to use custom component */}
                </Nav.Item>
                  <Nav.Item>
                  <Nav.Link as={Link} to="/register">Register</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/login" >Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/menu" >Menu</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/order" >Order</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                </Nav.Item>
          </Nav>
                </div>
                </Row>

                <Switch>

         {/*      <Route path="/">
                  < Home/>
                </Route>*/}

                  <Route exact path="/login">
                  < Login/>
                  </Route>

                  <Route exact path="/register">
                  < Register/>
                  </Route>

                <Route exact path="/users">
                  < Users/>
                  </Route>

            
                </Switch>

                </Router>


                </div>
                  < this.Footer/>
                </Container>

        )
    }

}

ReactDOM.render(<Index />, document.getElementById('root'))
