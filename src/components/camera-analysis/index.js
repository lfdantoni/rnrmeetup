import React, { Component } from 'react';
import Camera from 'react-native-camera';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';

type Props = {
}
export default class CameraAnalysis extends Component<Props> {
  constructor(props: Object){
    super(props)
    this.state = {
      photo: null
    }

  }

  takePicture() {
    if(this.camera) {
      this.camera.capture({
        target: Camera.constants.CaptureTarget.temp,
        quality: "0.3",
        playSoundOnCapture: false
      })
      .then((data) => {
        console.log(data);
        this.setState({photo: data.path});
      })
      .catch(err => console.error(err));
    }

  }

  render() {
    const photo = this.state.photo;

    return (
      <View>
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
          {photo && <Image style={{width: 100, height: 100}} source={{uri: photo}}/>}
          <Camera 
              key={new Date().getTime()}
              ref={(cam) => {
                this.camera = cam
              }}
              type={Camera.constants.Type.front}
              aspect={Camera.constants.Aspect.fill}
              captureQuality={Camera.constants.CaptureQuality["480p"]}
              style={{height: 200, width: 200}}>
          </Camera>
        </View>
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
          <TouchableOpacity
              onPress={this.takePicture.bind(this)}
              style = {styles.capture}
          >
              <Text style={{fontSize: 14}}> SNAP </Text>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={this.props.close}
              style = {styles.capture}
          >
              <Text style={{fontSize: 14}}> CLOSE </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});

