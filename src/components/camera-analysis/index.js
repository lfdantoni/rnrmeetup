import React, { Component } from 'react';
import Camera from 'react-native-camera';

type Props = {
}
export default class CameraAnalysis extends Component<Props> {
  constructor(props: Object){
    super(props)
  }

  render() {
      return (
        <Camera 
            ref={(cam) => {
            this.camera = cam
            }}
            type={Camera.constants.Type.front}
            aspect={Camera.constants.Aspect.fill}
            style={{height: 200, width: 200}}>
        </Camera>
      )
  }
}