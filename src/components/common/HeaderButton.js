/**
 * Created by sedir on 19/09/17.
 */
import React from 'react';
import {connect} from "react-redux";
import {Button} from "react-native";
import {NavigationActions} from "react-navigation";

const AddButton = ({title, action, routeName}) => {
  return (
    <Button title={title} onPress={() => action(routeName)} />
  )
};

// REDUX MAPPING
const mapState = state => ({
});

const mapDispatch = dispatch => ({
  action: (routeName) => {
    const navigateAction = NavigationActions.navigate({
      routeName: routeName
    });
    dispatch(navigateAction);
  }
});

export default connect(mapState, mapDispatch)(AddButton);