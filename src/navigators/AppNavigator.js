/**
 * Created by sedir on 16/09/17.
 */
import React from "react";
import LoginForm from "../components/LoginForm";
import EmployeeCreate from "../components/EmployeeCreate";
import EmployeeList from "../components/EmployeeList";
import {BackHandler} from "react-native";
import {connect} from "react-redux";
import {addNavigationHelpers, NavigationActions, StackNavigator} from "react-navigation";

const routes = {
  LoginForm: {screen: LoginForm},
  EmployeeList: {screen: EmployeeList},
  EmployeeCreate: {screen: EmployeeCreate}
};

export const AppNavigator = StackNavigator(routes);

class ReduxNavigation extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  onBackPress = () => {
    const {dispatch, nav} = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const {dispatch, nav} = this.props;
    const navigation = addNavigationHelpers({
      dispatch,
      state: nav
    });

    return <AppNavigator navigation={navigation}/>;
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(ReduxNavigation);