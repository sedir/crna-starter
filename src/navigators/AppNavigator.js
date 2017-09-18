/**
 * Created by sedir on 16/09/17.
 */
import React from 'react';
import LoginForm from '../components/LoginForm';
import OtherScreen from '../components/OtherScreen';
import { BackHandler } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, NavigationActions } from 'react-navigation';

const Routes = {
  LoginForm: { screen: LoginForm },
  OtherScreen: { screen: OtherScreen }
};

export const AppNavigator = StackNavigator(Routes);

class ReduxNavigation extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { dispatch, nav } = this.props;
    const navigation = addNavigationHelpers({
      dispatch,
      state: nav
    });

    return <AppNavigator navigation={navigation} />;
  }
}


const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(ReduxNavigation);