import React, { Component } from 'react';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import Login from './Login'
import home from './home'
import about from './about'
import Dashboard from './protected/Dashboard'
import AddHospital from './protected/AddHospital'
import { logout } from '../helpers/auth'
import { firebaseAuth } from '../config/constants'
function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/dashboard' />}
    />
  )
}

export default class navbar extends Component {
  state = {
      authed: false,
      loading: true,
    }
    componentDidMount () {
      this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({
            authed: true,
            loading: false,
          })
        } else {
          this.setState({
            authed: false,
            loading: false
          })
        }
      })
    }
    componentWillUnmount () {
      this.removeListener()
    }
    render() {
      return this.state.loading === true ? <h1>Loading</h1> : (
        <BrowserRouter>
          <div className="container">
            <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/" className="navbar-brand">Home</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavDropdown eventKey={3} title="ABOUT" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}><Link to="/about" className="navbar-brand">About</Link></MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={4} title="SERVICES" id="basic-nav-dropdown">
              <MenuItem eventKey={4.1}>Action</MenuItem>
              <MenuItem eventKey={4.2}>Another action</MenuItem>
              <MenuItem eventKey={4.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4.4}>Separated link</MenuItem>
            </NavDropdown>
            <NavItem eventKey={2} href="#">
           OUTSOURCING
         </NavItem>
            <NavDropdown eventKey={5} title="CONSULTANCY" id="basic-nav-dropdown">
              <MenuItem eventKey={5.1}>Action</MenuItem>
              <MenuItem eventKey={5.2}>Another action</MenuItem>
              <MenuItem eventKey={5.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={5.4}>Separated link</MenuItem>
            </NavDropdown>
            <NavItem eventKey={2} href="#">
           EDC EXPERTISE
         </NavItem>
            <NavDropdown eventKey={6} title="CONTACT" id="basic-nav-dropdown">
              <MenuItem eventKey={6.1}><Link to="/AddData" className="navbar-brand">Request an RFI</Link></MenuItem>
              <MenuItem eventKey={6.2}>Another action</MenuItem>
              <MenuItem eventKey={6.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={6.4}>Separated link</MenuItem>
            </NavDropdown>
            <NavItem>
            {this.state.authed
                    ? <div>
                    <button
                        style={{border: 'none', background: 'transparent'}}
                        onClick={() => {
                          logout()
                        }}
                        >Logout</button>
                            </div>
                    : <span>
                      </span>}
                      </NavItem>
          </Nav>
        </Navbar>
            <div className="container">
              <div className="row">
                <Switch>
                  <Route path='/' exact component={home} />
                  <Route path='/about' exact component={about} />
                  <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                  <PrivateRoute authed={this.state.authed} path='/dashboard' component={Dashboard} />
                  <Route authed={this.state.authed} path='/AddData' component={AddHospital} />
                  <Route render={() => <h3>No Match</h3>} />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      );
    }
}
