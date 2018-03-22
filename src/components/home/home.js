/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Button,
  Animated
} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';
import { styles } from './home.styles';

import { getCards } from '../../actions';

import CameraAnalysis from '../camera-analysis'

import {Cards} from '../../mocks'

type Props = {
    getCards: Function,
    cards: Array<Object>,
    navigator: Object,
    swipe: Swiper
}
export default class Home extends Component<Props> {
  constructor(props: Object){
    super(props)

    this.state = {
      showCamera: false
    }
  }


  static navigationOptions = (props: Object) => ({
    headerTitle: <Image source ={require('../../images/logo.png')} resizeMode = "contain" style={{width:100, height:30}} />,
    headerRight: (
      <TouchableOpacity onPress ={() => props.navigation.navigate('Messages')}>
        <Iconz name="ios-chatboxes-outline" color ="#555" size={25} style={{margin:10}} />
      </TouchableOpacity>
    ),
    headerLeft: (
      <TouchableOpacity onPress ={() => props.navigation.navigate('Profile')}>
        <Iconz name="ios-person" color ="#888" size={25} style={{margin:10}} />
      </TouchableOpacity>
    ),
  });
  static mapDispatchToProps(distpach: Function) {
    return {
      getCards: function() {
        distpach(getCards())
      }
    }
  }
  static mapStateToProps(state: Object) {
    console.log(state);
    return {
      cards: state.cards.data
    }
  }

  componentDidMount() {
    this.props.getCards();
  }

  Card(x: Object){
    if(!x) return null;
    return (
      <View style={styles.card}>
        <Image source ={x.image} resizeMode="contain" style ={{width:350, height:350}} />
        <View style={{width:350, height:70, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <View style={{flexDirection:'row', margin:15, marginTop:25,}} >
              <Text style={{fontSize:20, fontWeight:'300', color:'#444'}}>{x.first_name}, </Text>
              <Text style={{fontSize:21, fontWeight:'200', color:'#444'}}>{x.age}</Text>
            </View>
          <View style={{flexDirection:'row'}}>
            <View style={{padding:13,  borderLeftWidth:1,borderColor:'#e3e3e3', alignItems:'center', justifyContent:'space-between'}}><Icon name='people-outline' size={20} color="#777" style={{}} /><Text style={{fontSize:16, fontWeight:'200', color:'#555'}}>{x.friends}</Text></View>
            <View style={{padding:13, borderLeftWidth:1,borderColor:'#e3e3e3', alignItems:'center', justifyContent:'space-between'}}><Icon name='import-contacts' size={20} color="#777" /><Text style={{fontSize:16, fontWeight:'200', color:'#555'}}>{x.interests}</Text></View>
          </View>
        </View>
      </View>
    )
  }
    
  handleYup (card: Object) {
    console.log(`Yup for ${card.text}`)
  }

  handleNope (card: Object) {
    console.log(`Nope for ${card.text}`)
  }
  noMore(){
    return (
      <View style={styles.card} >
        <Text>No More Cards</Text>
      </View>
    )
  }

  yup(){
    this.refs['swiper'].swipeRight();
  }

  nope(){
    this.refs['swiper'].swipeLeft();
  }
  closeCamera(){
    this.setState({showCamera: false});
  }
  _renderCamera() {
    return (
      <View style={{ flex: 1,flexDirection:'column', alignItems:'center', justifyContent:'flex-end', marginTop: 80, zIndex: 9999, height: 900}}>
        <CameraAnalysis close={this.closeCamera.bind(this)}/>
      </View>
    )
  }

  showCamera(){
    this.setState({showCamera: true})
  }

  _renderOptions() {
    return (
      <View style={{ flex: 1,flexDirection:'row', alignItems:'flex-end', justifyContent:'center', marginTop: 80}}>
        <TouchableOpacity style={styles.buttons} onPress={this.nope.bind(this)}>
            <Iconz name='ios-close' size={45} color="#888" style={{}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSmall}>
            <Iconz name='ios-information' size={25} color="#888" style={{}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={this.yup.bind(this)}>
            <Iconz name='ios-heart-outline' size={36} color="#888" style={{marginTop:5}} />
        </TouchableOpacity> 
        <TouchableOpacity style={styles.buttons} onPress={this.showCamera.bind(this)}>
            <Iconz name='ios-happy-outline' size={36} color="#888" style={{marginTop:5}} />
        </TouchableOpacity> 
      </View>
    )
  }

  render() {
    const cards = this.props.cards && this.props.cards.length > 0 ? this.props.cards : null;
    return (
        <View style={styles.container}>
            <View style={{position: 'absolute',height: 500, width: 700, zIndex: 100}}>
              {cards && <Swiper
                ref={'swiper'}
                cards={Cards}
                renderCard={(cardData) => this.Card(cardData)}
                onSwipedAll={() => this.noMore()}
                cardIndex={0}
                onSwiped={(cardIndex) => {console.log(cardIndex)}}
                backgroundColor={'#f7f7f7'}
                cardStyle={{height: 420}}
                cardVerticalMargin={10}
                stackSize= {3}
              /> } 
            </View>

            {this.state.showCamera ? this._renderCamera() : this._renderOptions()}
            

        </View>
        )
    }
}
