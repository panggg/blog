import React, { Component } from 'react'
import Cropper from 'react-cropper'
import child from '../common/images/yellow_child.png'
import 'cropperjs/dist/cropper.css'
import './UploadPicture.css'

const src = child

class UploadPicture extends Component {
  constructor(props) {
    super(props)
    this.state = {
      src:"",
      cropResult:""
    }
    this.cropImage = this.cropImage.bind(this)
    this.onChange = this.onChange.bind(this)
    this.useDefaultImage = this.useDefaultImage.bind(this)
  }
  onChange(e) {
    e.preventDefault()
    let files
    if (e.dataTransfer) {
      files = e.dataTransfer.files
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.setState({
        src: reader.result
      })
    }
    reader.readAsDataURL(files[0]);
  }
  cropImage() {
    if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
      return
    }
    let cropResult =this.cropper.getCroppedCanvas().toDataURL()
    this.setState({
      cropResult: this.cropper.getCroppedCanvas().toDataURL()
    })
    this.props.callbackcropResult(cropResult);
  }
  useDefaultImage() {
    this.setState({
      src
    })
  }
  render() {
    const {
      isShowUploadPicture,
      closeUploadPicture
    } = this.props
    return (
      <div className={ isShowUploadPicture ===true?'showCropper':'hideCropper' }>
        <div className="tailorBox">
          <div className="selectorFileBtn">
            选择文件
            <input type="file" onChange={this.onChange}/>
          </div>
          <Cropper
            style={{ height: 300 }}
            aspectRatio={16 / 16}
            preview=".img-preview"
            guides={false}
            src={this.state.src}
            ref={cropper => { this.cropper = cropper; }}
          />
        </div>
      <div className="btnBox">
        <button onClick={this.cropImage}>确定</button>
        <button onClick={closeUploadPicture}>取消</button>
        <img src={this.state.cropResult} alt="" />
      </div>
      <br style={{ clear: 'both' }} />
    </div>
    )
  }
}

export default UploadPicture
