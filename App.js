import 'react-native-gesture-handler';

import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { connect } from 'react-redux';

import SignIn from './src/components/authScreens/signIn';
import SignUp from './src/components/authScreens/signUp';
import Dashboard from './src/components/dashScreens/dashboard';

const Stack = createStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isSignedIn: false
    // }
  }

  createAuthStack = () => {
    return (
    <Stack.Navigator>
      <Stack.Screen name="Sign In" component={SignIn} />
      <Stack.Screen name="Sign Up" component={SignUp} />
    </Stack.Navigator>
    )
  }

  createDashStack = () => {
    return(
      <Dashboard />
    )
  }

  render() {
    return (
      <NavigationContainer>
        { !this.props.loggedIn ? this.createAuthStack() : this.createDashStack() }
      </NavigationContainer>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  error: state.auth.error,
  // loading: state.auth.loading
});

export default connect(mapStateToProps)(App);
