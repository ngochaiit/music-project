import ReactAudioPlayer from 'react-audio-player';
import React, { PureComponent } from 'react'
import {connect} from 'react-redux';

class Mp3Player2 extends PureComponent {
  // state = {
  //   isSrcChanged : false,
  //   playingSong : this.props.playingSong
  // }
  // static getDerivedStateFromProps(nextProps, prevState){
  //   if(nextProps.playingSong!==prevState.playingSong){
  //     return { playingSong: nextProps.playingSong };
  //   }
  //   else return null;
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.playingSong === nextState.playingSong) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  
  render() {
    return (
      <ReactAudioPlayer
      id="audioplayer"
      src={this.props.playingSong.mediaSrc}
      autoPlay
      
        />
    )
  }
}
const mapStateToProps = state => ({
  playingSong : state.player.playingSong
});

export default connect(mapStateToProps)(Mp3Player2);