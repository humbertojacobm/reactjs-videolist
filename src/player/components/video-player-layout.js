import React, {Component} from 'react'
import './video-player-layout.css'
class VideoPlayerLayout extends Component {
  render(){
    return(
      <div 
        className="VideoPlayer"
        ref={this.props.setRef}
      >
        {this.props.children}
      </div>
    )
  }
}
export default VideoPlayerLayout;