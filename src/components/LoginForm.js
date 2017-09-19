/**
 * Created by sedir on 08/09/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import {Card} from "./common/index";
import {Button, Form, Input, Item, Label, Text, Spinner, Content, Header, Title, Container} from "native-base";
import {emailChanged, passwordChanged, loginUser} from '../actions';

class LoginForm extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Login',
  });

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading){
      return <Spinner color='black' />
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)} block primary>
        <Text>Fazer login</Text>
      </Button>
    );
  }

  renderError(){
    if (this.props.error !== '')
      return (<Text style={styles.errorText}>{this.props.error}</Text>);
    return <View />;
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  render() {
    return (<Container>
      <Content>
        <Card>
          <Form>
            <Item inlineLabel>
              <Label>E-mail</Label>
              <Input
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
                keyboard-type='email-address'
                autoCorrect={false}
                autoFocus autoCapitalize='none'/>
            </Item>
            <Item inlineLabel last>
              <Label>Senha</Label>
              <Input
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
                secureTextEntry returnKeyType='done' autoCorrect={false}/>
            </Item>
            {this.renderError()}
            {this.renderButton()}
          </Form>
        </Card>
      </Content>
    </Container>

    );
  }
}

const styles = StyleSheet.create({
  errorText:{
    padding: 5,
    color: '#ea0021'
  }
});

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    loading: state.auth.loading,
    error: state.auth.error,
    nav: state.nav
  };
};

const mapDispatchToProps = {
  emailChanged, passwordChanged, loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);