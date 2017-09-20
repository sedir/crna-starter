/**
 * Created by sedir on 19/09/17.
 */
import React from 'react';
import {connect} from "react-redux";
import {Button, Icon, Text} from "native-base";
import {NavigationActions} from "react-navigation";

const AddButton = ({title, action, routeName, iconIos, iconAndroid}) => {
  let text;
  if (title)
    text = <Text>{title}</Text>

  return (
    <Button transparent onPress={() => action(routeName)}><Icon ios={iconIos} android={iconAndroid} />
      {text}
    </Button>
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