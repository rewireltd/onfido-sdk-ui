// @flow
import * as React from 'react'
import { h, Component } from 'preact'
import { screenshot } from '../utils/camera.js'
import { FaceOverlay } from '../Overlay'
import { ToggleFullScreen } from '../FullScreen'
import Timeout from '../Timeout'
import Camera from '../Camera'
import CameraError from '../CameraError'
import style from './style.css'

type State = {
  hasBecomeInactive: boolean,
}

type Props = {
  onCapture: Function,
  renderFallback: Function,
  trackScreen: Function,
}

const inactiveError = { name: 'CAMERA_INACTIVE', type: 'warning' }

export default class Selfie extends Component<Props, State> {
  webcam = null

  state: State = {
    hasBecomeInactive: false,
  }

  handleTimeout = () => this.setState({ hasBecomeInactive: true })

  handleClick = () => screenshot(this.webcam,
    (blob, base64) => this.props.onCapture({ blob, base64 }))

  render() {
    const { trackScreen, renderFallback } = this.props
    const { hasBecomeInactive } = this.state

    return (
      <div>
        <Camera
          {...this.props}
          webcamRef={ c => this.webcam = c }
          renderError={ hasBecomeInactive ?
            <CameraError
              error={ inactiveError }
              {...{trackScreen, renderFallback}}
              isDismissible
            /> : null
          }
        >
          <Timeout seconds={ 10 } onTimeout={ this.handleTimeout } />
          <ToggleFullScreen />
          <FaceOverlay />
          <div className={style.actions}>
            <button
              className={style.btn}
              onClick={this.handleClick}
            />
          </div>
        </Camera>
      </div>
    )
  }
}
