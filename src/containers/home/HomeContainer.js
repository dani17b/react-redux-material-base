import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './homeContainer.css';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Button from 'react-toolbox/lib/button';
import * as HomeActions from './actions/HomeActions';
import { List, ListItem, ListSubHeader} from 'react-toolbox/lib/list';
import * as HomeHelper from './helper/HomeHelper';

@connect((store) => {
  return {
    'userInfo' : store.login.loginInfo
  }
})
class HomeContainer extends React.Component {

  render () {
    this.actions = bindActionCreators(HomeActions, this.props.dispatch);

    return (
        <div>
        <AppBar title='React redux material base'>
          <Navigation type='horizontal'>

          </Navigation>
        </AppBar>
          Hello world
        </div>
    )
  }
}

export default HomeContainer;
