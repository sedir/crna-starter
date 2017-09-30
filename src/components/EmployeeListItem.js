import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {CardSection} from "./common/CardSection";

export default class EmployeeListItem extends Component {
  render() {
    const {containerStyle, textStyle} = styles;
    const { name } = this.props.employee;

    return (
      <CardSection style={containerStyle}>
        <Text>{name}</Text>
      </CardSection>
    );
  }
}


const styles = {
  containerStyle: {},
  textStyle: {
    fontSize: 18,
    padding: 10
  }
};
