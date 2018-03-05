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
  TextInput,
  TouchableOpacity,
  ScrollView,
  ListView,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';
import { convos, newMatches } from '../../mocks';
import { styles } from './messages.styles'

export default class Messages extends Component<*,*> {
  constructor(props: Object){
    super(props)

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows(newMatches),
      convoData: ds.cloneWithRows(convos),
    }

  }
  
  static navigationOptions = (props: Object) => ({
    headerTitle: <Image source ={require('../../images/logo.png')} resizeMode = "contain" style={{width:100, height:30}} />,
    headerLeft: (
      <TouchableOpacity onPress ={() => props.navigation.goBack()}>
          <Image source = {require('../../images/tinder.png')} style = {{width:25, height:25, margin:10}}/>
        </TouchableOpacity>
    ),
    headerRight: (
      <View style = {{width:25, height:25, margin:10}}/>
    )
  });

  eachPic(x){
    return(
      <TouchableOpacity style={{alignItems:'center'}}>
        <Image source = {x.image} style={{width:70, height:70, borderRadius:35, margin:10}} />
        <Text style={{fontWeight:'600', color:'#444'}}>{x.first_name}</Text>
      </TouchableOpacity>
    )
  }

  convoRender(x){
    return(
      <TouchableOpacity style={{alignItems:'center', flexDirection:'row', marginTop:5, marginBottom:5, borderBottomWidth:1, borderColor:'#e3e3e3'}}>
        <Image source = {x.image} style={{width:70, height:70, borderRadius:35, margin:10}} />
        <View>
          <Text style={{fontWeight:'600', color:'#111'}}>{x.name}</Text>
          <Text 
            numberOfLines ={1}
            style={{fontWeight:'400', color:'#888', width:200}}>
            {x.message}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

   
  render() {
    return (
      <View style = {{flex:1}}>
        <ScrollView style={styles.container}>
          <TextInput 
          style = {{height:50, }}
          placeholder="Search"
          />
          <View style={styles.matches}>
            <Text style = {{color:'#da533c', fontWeight:'600', fontSize:12}}>THIS PARTY'S BUZZING WITH BAD BITCHES</Text>
            <ListView 
              horizontal={true}
              showsHorizontalScrollIndicator = {false}
              dataSource={this.state.dataSource}
              pageSize = {5}
              renderRow={(rowData) =>this.eachPic(rowData)}
            />
          </View>
          <View style = {{margin:10}}>
            <Text style = {{color:'#da533c', fontWeight:'600', fontSize:12}}>MESSAGES</Text>
            <ListView 
              horizontal={false}
              scrollEnabled = {false}
              showsHorizontalScrollIndicator = {false}
              dataSource={this.state.convoData}
              pageSize = {5}
              renderRow={(rowData) =>this.convoRender(rowData)}
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}
