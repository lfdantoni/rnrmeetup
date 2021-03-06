import * as types from '../actions/actionTypes';

const initialState = {
	navColor:'#fff',
    navStyle:{backgroundColor:'#ff585b', color:'#fff', padding:20},
    userDeets: {
        email:"s.okoro07@gmail.com",
    }
}

export default function tinder(state = initialState, action = {}) {
    switch(action.type){
      case types.LOGIN:
        return {...state, ...action.payload};
      case types.SET_NAVIGATOR:
        return { ...state, navigator: action.payload}
      default:
        return state;
    }
  }
