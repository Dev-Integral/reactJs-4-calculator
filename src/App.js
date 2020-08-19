import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
//pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

import AdminWrapper from './components/AdminWrapper';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import LoginWrapper from './components/LoginWrapper';

class App extends Component {
  render() {
    return (
      <Router>
        <Route 
          path ="/admin"
          render={(props) => {
            return(
            <div>
              {this.props.auth.token ?
                <AdminWrapper>
                  <Dashboard /> 
                </AdminWrapper>
                :
                <LoginWrapper>
                  <Login {...props} />
                </LoginWrapper>
            } 
            </div>
          )}}
        />
        <Route 
          exact={true}
          path="/"
          render={props=>(
            <PageWrapper>
              <Home {...props}/>
            </PageWrapper>
          )}
        />   
        <Route 
          path="/about"
          render={props=>(
            <PageWrapper>
              <About {...props}/>
            </PageWrapper>
          )}
        />
        <Route 
          path="/contact"
          render={props=>(
            <PageWrapper>
              <Contact {...props}/>
            </PageWrapper>
          )}
        />    
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);