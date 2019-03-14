import React,{Fragment} from 'react'
import { PrevButton,NextButton,PlayButton, Timer, VolumeControl } from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';
import '../css/ZSPlayer.css'

import { Icons } from 'react-soundplayer/components';

// the list of available icons
const {
  SoundCloudLogoSVG,
  PlayIconSVG,
  PauseIconSVG,
  NextIconSVG,
  PrevIconSVG
} = Icons;


const ZingSoundPlayer = (props) => {
  
    const { trackTitle,trackArtist } = props;
    return (
      <Fragment>
        <PlayButton {...props} className="playbtn ml-2 mr-5 btn btn-outline-secondary" ><PlayIconSVG /></PlayButton>
        <VolumeControl {...props} className="volume ml-2 mr-5 d-flex flex-row align-items-center bg-transparent" buttonClassName="icon-volume" />
        <div className="ml-2 d-flex flex-column justify-content-center w-50" >
          <h4 className=" title-player m-0">{trackTitle}</h4>
          <p className=" title-player m-0">{trackArtist}</p>
        </div>
        
        <Timer {...props} className="process-bar mr-2 ml-auto" />
        
      </Fragment>
    )
};

export default withCustomAudio(ZingSoundPlayer)

