import React from "react";
import {Button, Container, Content, Footer, FooterTab, Header, Title} from "native-base";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers/index";
import AppNavigator from "./navigators/AppNavigator";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          {this.props.statusBar}
          <AppNavigator />
        </Container>
      </Provider>
    );
  }
}

export default (App);