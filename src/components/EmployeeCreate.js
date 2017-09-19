/**
 * Created by sedir on 08/09/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import {Card, CardSection} from "./common/index";
import {Button, Form, Input, Item, Label, Text, Spinner} from "native-base";
import firebase from 'firebase';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import { BackHandler, NavigationActions } from "react-navigation";

class EmployeeCreate extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Cadastrar funcionário',
  });


  render() {
    return (
      <Card>
        <CardSection>
          <Text>Tela de cadastro</Text>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    nav: state.nav
  };
};

export default connect(mapStateToProps)(EmployeeCreate);