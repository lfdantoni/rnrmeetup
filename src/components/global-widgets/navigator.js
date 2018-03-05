import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux'

import Home from '../home/home' 
import Messages from '../messages/messages'
import Profile from '../profile/profile'

export default StackNavigator({
  Home: {
    screen: connect(Home.mapStateToProps, Home.mapDispatchToProps)(Home),
  },
  Messages: {
    screen: connect(Messages.mapStateToProps, Messages.mapDispatchToProps)(Messages),
  },
  Profile: {
    screen: connect(Profile.mapStateToProps, Profile.mapDispatchToProps)(Profile),
  }
});