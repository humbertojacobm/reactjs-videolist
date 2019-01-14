import React,{Component} from 'react'
import VolumeIcon from '../../icons/components/volume';
import './volume.css';
class Volume extends Component {
  state = {
    value: 1,
  }
  componentDidMount(){
    this.setState({
      value: this.props.value
    })    
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.value !== this.props.value)
    {
      this.setState({
        value: nextProps.value
      })
    }    
  }
  render(){
    return(
      <button
        className="Volume"
        onClick={this.props.handleClick}
      >
        <VolumeIcon
          color="white"
          size={25}
        />
        <div className="Volume-range"
        >
          <input 
            type="range"
            min={0}
            max={1}
            step={.05}
            value={this.state.value}
            onChange={this.props.handleVolumeChange}
            onClick={this.props.handleRangeClick}
          />
        </div>
      </button>      
    )
  }

}
export default Volume;