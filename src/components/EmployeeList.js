/**
 * Created by sedir on 08/09/17.
 */
import _ from 'lodash';
import React, {Component} from "react";
import {connect} from "react-redux";
import {Card, CardSection} from "./common/index";
import {ListView} from 'react-native';
import {Form, Input, Item, Label, Spinner, Text} from "native-base";
import {pullCreateEmployee, employeesFetch} from "../actions";
import HeaderButton from "./common/HeaderButton";
import EmployeeListItem from "./EmployeeListItem";

class EmployeeList extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Funcionários',
    headerRight: <HeaderButton routeName="EmployeeCreate" iconIos="ios-add" iconAndroid="md-add"/>,
    headerBackTitle: 'Voltar',
  });
  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <EmployeeListItem employee={employee} />;
  }


  render() {
    console.log(this.props);
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
      renderRow={this.renderRow} />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { nav: state.nav, employees };
};


const mapDispatchToProps = {
  employeesFetch
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);