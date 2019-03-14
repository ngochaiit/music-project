import React, { Component,Fragment } from 'react'
import '../css/PlayerCtn.css'
import {connect} from 'react-redux';
import ZingSoundPlayer from './ZingSoundPlayer';

class PlayerContainer extends Component {
  state={
    display : true
  }
    componentDidMount() {
      window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.listenToScroll)
    }
    debounce = (func, wait, immediate) => {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      }
    }
    
    listenToScroll = this.debounce(
         () => {
          
          const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop
    
          const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight
    
          const compare = height-winScroll;
          if(compare<=126){
            this.setState({
              display : false
            })
          }
          if(compare>126){
            this.setState({
              display : true
            })
          }
        }
      ,250)
    

      closePlayer = ()=> {
        this.setState({
          display:false
        })
      }
    
    render() {
        
       if(this.props.playingSong.mediaSrc) {
          return (
            <div>
                <div className="ct-player container fixed-bottom mb-3 "
                    style={this.state.display?{display:"flex"}:{display:"none"}}
                >
                    <ZingSoundPlayer
                    streamUrl={this.props.playingSong.mediaSrc}
                    trackTitle={this.props.playingSong.name}
                    trackArtist={this.props.playingSong.artist.name}
                    preloadType="metadata"
                    
                    />
                    
                </div>
                <i onClick={this.closePlayer} className="fas fa-times-circle close-player"></i>
            </div>
          )
       } 
      return (<Fragment></Fragment>)
    }
  }

const mapStateToProps = state => ({
    playingSong : state.player.playingSong
});
export default connect(mapStateToProps)(PlayerContainer);