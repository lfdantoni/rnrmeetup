
import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity} from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from '../reducers';
import Navigator from '../components/global-widgets/navigator';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

export default class Index extends Component {
  
  render() {
    return (
      <View
       style={{flex:1}}>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </View>);
  }
}
