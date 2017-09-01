import React, {
  Component
} from 'react'
import UploadPicture from './UploadPicture'
import TabsBar from './TabsBar'
import './test.css'
import baby from '../common/images/baby.png'
import baby1 from '../common/images/baby.png'
import baby2 from '../common/images/baby2.png'


const kids = [{
  "name": "kid_1",
  "img": baby1,
  "active": "0",
  "id": "100"
}, {
  "name": "kid_2",
  "img": baby2,
  "active": "1",
  "id": "200"
}]


class selectedKid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowUploadPicture: false,
      kidImgSrc: baby
    }
    this.onClickKidImg = this.onClickKidImg.bind(this)
    this.closeUploadPicture = this.closeUploadPicture.bind(this)
    this.callbackcropResult = this.callbackcropResult.bind(this)
    this.callback = this.callback.bind(this)
  }
  onClickKidImg() {
    this.setState({
      isShowUploadPicture: true
    })
  }
  closeUploadPicture() {
    this.setState({
      isShowUploadPicture: false
    })
  }
  callbackcropResult(cropResult) {
    this.setState({
      kidImgSrc: cropResult
    })
  }
  callback(name) {
    console.log(name)
  }
  render() {
    return (
      <div>
        <div style={{border:"1px red solid"}} onClick={this.onClickKidImg} >
          <img src={this.state.kidImgSrc} alt="" />
          <p>activeData.name</p>
        </div>
        <UploadPicture
          callbackcropResult={this.callbackcropResult} 
          isShowUploadPicture={this.state.isShowUploadPicture} 
          closeUploadPicture={this.closeUploadPicture} 
        />
        <TabsBar data={kids} callback={this.callback} />
      </div>

    )
  }
}



export default selectedKid