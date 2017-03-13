import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './loginContainer.css';
import * as LoginActions from './actions/LoginActions';
import Input from 'react-toolbox/lib/input';
import Button from 'react-toolbox/lib/button';

@connect()
class LoginContainer extends React.Component {
  state = { email: '', password: '' };

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  render () {
    this.actions = bindActionCreators(LoginActions, this.props.dispatch);
    return (
      <div className={styles.login}>
        <div className={styles.loginBackground}>
        </div>
        <span className={styles.loginIco}>
        </span>
        <div className={styles.loginText}>
          <h1>Welcome!</h1>
          <h5>Login to init app</h5>
        </div>
        <div className={styles.loginForm}>
          <Input type='email' label='Email' icon='email' value={this.state.email} onChange={this.handleChange.bind(this, 'email')}/>
          <Input type='password' label='Password' icon='vpn_key' value={this.state.password} onChange={this.handleChange.bind(this, 'password')}/>
          <Button label='Login' onClick={this.loginUserPass.bind(this)} raised primary/>
        </div>
      </div>
    )
  }

  loginUserPass (){
    // Login
    this.actions.loginApiUserPass({email : this.state.email, password : this.state.password});
  }
}

export default LoginContainer;
