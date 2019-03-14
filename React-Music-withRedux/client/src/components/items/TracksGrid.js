import React, { Component,Fragment } from 'react'
import SongItem from './SongItem';
import {playItemSong,ClearPlayer} from '../../actions/playSongAction'
import {connect} from 'react-redux';

class TracksGrid extends Component {



  render() {
    return (
      <Fragment>
          <h3 >
              <a href="/the-loai-nghe-si#home_hotartist_title" rel="nofolow"  style={{color: "purple"}}>MUSIC HOT</a>
          </h3>
          <div className="row d-flex justify-content-center mb-4">
              {
                  this.props.songItems.map((item)=> (
                      <SongItem  playSong={this.props.playItemSong}  className=" col-lg-4 col-md-6 mb-4"  key={item.name} id={item.mbid} url={item.image[3]["#text"]}  title={item.name} author={item.artist.name} />
                  ))
              }
          </div>
      </Fragment>
    )
  }
}
const mapDispatchToProps = dispatch => {
    return {
          playItemSong : async (songName)=> { 
            await dispatch(ClearPlayer())
            dispatch(playItemSong(songName)) 
          }
    }
  }
  const mapStateToProps = (state) => {
    return {
      songItems : state.songItems 
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(TracksGrid);