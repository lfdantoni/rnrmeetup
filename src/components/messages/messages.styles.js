import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10
  
    },
    matches:{
    borderTopWidth:1,
    paddingTop:15, 
    borderTopColor:'#da533c',
    borderBottomWidth:1,
    paddingBottom:15, 
    borderBottomColor:'#e3e3e3'
    },
    buttons:{
      width:80, 
      height:80, 
      borderWidth:10, 
      borderColor:'#fff', 
      justifyContent:'center', 
      alignItems:'center',
      borderRadius:40
    },
    buttonSmall:{
      width:50, 
      height:50, 
      borderWidth:10, 
      borderColor:'#e7e7e7', 
      justifyContent:'center', 
      alignItems:'center',
      borderRadius:25
    },
     card: {
      flex: 1,
      alignItems: 'center',
      alignSelf:'center',
      borderWidth:2,
      borderColor:'#e3e3e3',
      width: 350,
      height: 420,
    }
   
  });