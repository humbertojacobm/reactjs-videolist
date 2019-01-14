import React, {Component} from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import {formattedTime} from '../../utils/utils';
import Controls from '../components/video-player-controls';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
class VideoPlayer extends Component {
  
  state = {
    pause: true,
    duration: 0, 
    currentTime: 0,
    loading: false,
    volumeValue:1,
    previousVolumeValue:0,
  }
  componentDidMount(){
    this.setState({
      pause: (!this.props.autoplay),
    })
  }
  tooglePlay= (event) => {
    this.setState({
      pause:!this.state.pause,
    })
  }
  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: this.video.duration
    });
  }
  handleTimeUpdate = event => {
    // console.log(this.video.currentTime);
    this.setState({
      currentTime: this.video.currentTime
    })
  }
  handleProgressChange = event => {
    this.video.currentTime = event.target.value;
  }
  handleSeeking = event => {
    this.setState({
      loading: true,
    })
  }
  handleSeeked = event => {
    this.setState({
      loading: false,
    })
  }
  handleVolumeChange = event => {
    this.setState({
      volumeValue: event.target.value,
    })
    this.video.volume = this.state.volumeValue;
  }
  handleVolumenClick = event => {    
    this.setState({
      volumeValue: this.state.previousVolumeValue,
    }, function(){      
      this.setState({
        previousVolumeValue: this.video.volume,
      })
      this.video.volume = this.state.volumeValue;
    })
  }
  handleRangeClick = event => {
    event.stopPropagation();
  }
  render(){
    return(
      <VideoPlayerLayout>
         <Title
           title="esto es un video chido"
         />
         <Controls>
          <PlayPause
            pause = {this.state.pause}
            handleClick={this.tooglePlay}
          />          
          <Timer
            duration={this.state.duration}
            currentTime={formattedTime(this.state.currentTime)}
          />
          <ProgressBar
            duration={this.state.duration}
            value={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
            handleVolumeChange={this.handleVolumeChange}
            handleClick={this.handleVolumenClick}
            handleRangeClick={this.handleRangeClick}
            value={this.state.volumeValue}
          />
         </Controls>
         <Spinner
           active={this.state.loading}
         />
         <Video
           autoplay={this.props.autoplay}
           pause={this.state.pause}
           handleLoadedMetadata={this.handleLoadedMetadata}
           handleTimeUpdate={this.handleTimeUpdate}
           handleSeeking={this.handleSeeking}
           handleSeeked={this.handleSeeked}
           src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
         />
      </VideoPlayerLayout>
    )
  }
}
export default VideoPlayer;