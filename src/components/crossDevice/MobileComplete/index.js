import { h, Component } from 'preact'
import theme from '../../Theme/style.css'
import style from './style.css'

class MobileComplete extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    // this.props.nextStep()
  }

  render () {
    return (
      <div>
        <div className={theme.step}>
          <h1 className={`${theme.title} ${style.title} ${theme.center}`}>
            Great, that’s everything we need
          </h1>
          <p className={`${theme.center} ${style.submessage}`}>We’re now ready to verify your identity</p>
          <ul className={style.uploadList}>
            <li><span className={`${theme.icon} ${style.icon}`}/><span className={style.listItem}>Documents uploaded</span></li>
            <li><span className={`${theme.icon} ${style.icon}`}/><span className={`${style.listItem} ${style.lastItem}`}>Selfie uploaded</span></li>
          </ul>
          <div>
            <button
              className={`${theme.btn} ${theme["btn-primary"]} ${theme["btn-centered"]} ${style.btn}`}
              // onClick={}
            >
              Submit verification
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default MobileComplete