/**
 * Created by sedir on 08/09/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import {Card, CardSection} from "./common/index";
import {Button, Form, Input, Item, Label, Text, Spinner, Picker} from "native-base";
import {employeeUpdate, employeeCreate} from '../actions';

class EmployeeCreate extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Novo funcionário',
  });

  renderButton() {
    if (this.props.loading) {
      return <Spinner color='black'/>
    }
    return (
      <Button block primary onPress={this.onButtonPress.bind(this)}>
        <Text>Cadastrar</Text>
      </Button>
    );
  }

  onButtonPress(){
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift });
  }

  render() {
    return (
      <Card>
        <Form>
          <Item inlineLabel>
            <Label>Nome</Label>
            <Input
              keyboardType='default'
              autoCorrect={false}
              value={this.props.name}
              onChangeText={value => this.props.employeeUpdate({prop: 'name', value})}
              autoFocus autoCapitalize='none'/>
          </Item>
          <Item inlineLabel last>
            <Label>Telefone</Label>
            <Input
              keyboardType='phone-pad'
              value={this.props.phone}
              onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}
              autoCorrect={false}/>
          </Item>
          <Item inlineLabel>
            <Label>Turno</Label>
            <Picker
              placeholder="Selecione"
              iosHeader="Selecione"
              mode="dropdown"
              selectedValue={this.props.shift}
              onValueChange={value => this.props.employeeUpdate({prop: 'shift', value})}>
              <Item label="Manhã" value="Manhã"/>
              <Item label="Tarde" value="Tarde"/>
              <Item label="Noite" value="Noite"/>
            </Picker>
          </Item>
          {this.renderButton()}
        </Form>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const {name, phone, shift} = state.employeeForm;
  return {
    nav: state.nav,
    name,
    phone,
    shift
  };
};

const mapDispatchToProps = {
  employeeUpdate,
  employeeCreate
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCreate);