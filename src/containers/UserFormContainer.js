import React, { Component } from 'react';
import '../App.css';
import UserForm from '../components/UserForm.js'
import { Box }  from 'rebass'


class UserFormContainer extends Component {
 
    render() {
      return (
                <Box px={2} py={2} width={1}> 
                    <UserForm submit={this.props.loginSubmit} header={'Log in'} /> 
                    <UserForm submit={this.props.signupSubmit} header={'Sign up'} />                 
                </Box>  
        );
      }
    }
  
export default UserFormContainer;