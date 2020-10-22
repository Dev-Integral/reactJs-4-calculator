import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
import {Route, BrowserRouter as Router, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
// pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Blog from './components/pages/Blog';
import Single from './components/pages/Single';
import Signup from './components/pages/Signup';
// pages - Admin
import Dashboard from './components/pages/Admin/Dashboard';
import Users from './components/pages/Admin/Users';
import Posts from './components/pages/Admin/Posts';
import AddPost from './components/pages/Admin/AddPost';

import AdminWrapper from './components/AdminWrapper';
import Login from './components/pages/Login';
import LoginWrapper from './components/LoginWrapper';



class App extends Component {
  render() {
    return (
      <Router>
        <Route
          path='/admin/users'
          render={(props) => {
            return(
            <div>
              {this.props.auth.token ?
                <AdminWrapper>
                  <Users /> 
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
        path='/signup'
        render={(props) => {
          if(this.props.auth.token){
            return (
              <Redirect to="/" /> 
            )
          }else{
            return (
              <LoginWrapper>
                <Signup />
              </LoginWrapper>
            )
          }
        }}
        />
        <Route
        exact={true}
          path='/admin/posts'
          render={(props) => {
            return(
            <div>
              {this.props.auth.token ?
                <AdminWrapper>
                  <Posts /> 
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
          path='/admin/posts/:view/:id'
          exact={true}
          render={(props) => {
            return(
            <div>
              {this.props.auth.token ?
                <AdminWrapper>
                  <AddPost /> 
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
          path='/admin/posts/:view'
          exact={true}
          render={(props) => {
            return(
            <div>
              {this.props.auth.token ?
                <AdminWrapper>
                  <AddPost /> 
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
          path="/3"
          render={props=>(
            <PageWrapper>
              <About {...props}/>
            </PageWrapper>
          )}
        />
        <Route 
          path="/5"
          render={props=>(
            <PageWrapper>
              <Contact {...props}/>
            </PageWrapper>
          )}
        />
        <Route 
          path='/blog/:slug'
          exact={true}
          render={props=>(
            <PageWrapper>
              <Single {...props}/>
            </PageWrapper>
          )}
        />   
        <Route 
          path="/blog"
          exact={true}
          render={props=>(
            <PageWrapper>
              <Blog {...props}/>
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
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);