/**
 * Created by sedir on 08/09/17.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {Card, CardSection} from "./common/index";
import {Form, Input, Item, Label, Spinner, Text} from "native-base";
import {pullCreateEmployee} from "../actions";
import HeaderButton from "./common/HeaderButton";

class EmployeeList extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Funcionários',
    headerRight: <HeaderButton routeName="EmployeeCreate" iconIos="ios-add" iconAndroid="md-add" />,
    headerBackTitle: 'Voltar',
  });

  render() {
    return (
      <Card>
        <CardSection>
          <Text>Teste nova tela</Text>
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

const mapDispatchToProps = {
  pullCreateEmployee
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);