/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  ScrollView
} from 'react-native';

var {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';
import { styles } from './profile.styles'

export default class Profile extends Component<*,*> {
  constructor(props: Object){
    super(props)

    this.state = {
      friends: 1098
    }
    
  }

  static navigationOptions = (props: Object) => ({
    headerTitle: <Image source ={require('../../images/logo.png')} resizeMode = "contain" style={{width:100, height:30}} />,
     headerRight:(
      <TouchableOpacity onPress ={() => props.navigation.goBack()}>
          <Image source = {require('../../images/tinder.png')} style = {{width:25, height:25, margin:10}}/>
        </TouchableOpacity>
    ),
    headerLeft: (
      <View style = {{width:25, height:25, margin:10}}/>
    )
  });

  render() {
    return (
      <View style={{flex:1}}>
        <ScrollView style={styles.container}>
          <Image source ={require('../../images/profile.jpg')} resizeMode="stretch" style={{height:350, width:width}} />
          <View style={[styles.row, {marginTop:15}]}>
            <Text style = {{fontSize:19, fontWeight:'400'}}>Adri, </Text><Text style={{fontSize:21, fontWeight:'300', marginBottom:-2}}>27</Text>
          </View>
          <View style={styles.row}>
            <Text style={{color:'#444', fontSize:15}}>Unappers Creative</Text>
          </View>
          <View style={styles.row}>
            <Text style={{color:'#777', fontSize:11}}>less than a mile away</Text>
          </View>
          <View style={styles.description}>
            <Text style={{color:'#555'}}>We hook up, you do my laundry, I promise to call you but never really.</Text>
          </View>
          <View style ={styles.commons}>
            <Text style = {styles.title}>
              {this.state.friends} for Common Connections
            </Text>
            <Text style={{marginTop:10, fontSize:14, color:'#666', fontWeight:"400"}}>We compare your Facebook friends with those of your matches to display any common connections</Text>
          </View>
          <View style ={styles.commons}>
          <Text style = {styles.title}>
          Instagram Photos
          </Text>
          <ScrollView
            horizontal = {true}>
              <View style ={{}}>
                <Image source ={require('../../images/profile.jpg')} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
                <Image source ={require('../../images/profile.jpg')} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
              </View>
              <View style ={{}}>
                <Image source ={require('../../images/profile.jpg')} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
                <Image source ={require('../../images/profile.jpg')} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
              </View>
              <View style ={{}}>
                <Image source ={require('../../images/profile.jpg')} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
                <Image source ={require('../../images/profile.jpg')} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
              </View>
              <View style ={{}}>
                <Image source ={require('../../images/profile.jpg')} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
                <Image source ={require('../../images/profile.jpg')} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
              </View>
              <View style ={{}}>
                <Image source ={require('../../images/profile.jpg')} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
                <Image source ={require('../../images/profile.jpg')} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
              </View>
              <View style ={{}}>
                <Image source ={require('../../images/profile.jpg')} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
                <Image source ={require('../../images/profile.jpg')} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
              </View>
            </ScrollView>
            </View>
        </ScrollView>
      </View>
    )
  }
}
