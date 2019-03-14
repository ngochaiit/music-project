import axios from 'axios';
import {mediaUrl} from '../seeder2';

// KEEP THIS FETCH OUT SIDE JUST TO MAKE THE HANDLER FUNCTION SHORTER
    function getTracks() {
            return  axios.get(`//ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&page=1&limit=20&api_key=${process.env.REACT_APP_LFM_KEY}&format=json`,
                    {
                        headers: {
                        'Access-Control-Allow-Origin': '*',
                        },
                        proxy: {
                            host: "cuong-musix.herokuapp.com",//'//cuong-musix.herokuapp.com',
                            port: process.env.PORT || 3000//process.env.PORT
                        }
                    })
    }
// THIS IS A HANDLER CAN BE IMPORTED IN COMPONENTS AND TRIGGER BY THEIR EVENTS
export const loadHotTracks = ()=> {
    return (dispatch)=> {
        dispatch(fetchTracksBegin());
        return getTracks()
                .then( (a) => {
                        let tracksList = a.data.tracks.track;

                        tracksList.forEach((e,i)=> {
                            e.mediaSrc = mediaUrl[i]
                        })

                        dispatch( fetchTracksSuccess(tracksList) )
 
                })
                .catch(error => dispatch(fetchTracksFailure(error)));

    }
}
//----ACTION TYPES ------------------------------------------------------
export const FETCH_TRACKS_BEGIN = "FETCH_TRACKS_BEGIN";
export const FETCH_TRACKS_SUCCESS = "FETCH_TRACKS_SUCCESS";
export const FETCH_TRACKS_FAILURE = "FETCH_TRACKS_FAILURE";

// ------ACTION CREATOR---------------------------------------------------
export const fetchTracksBegin = () => ({
    type: FETCH_TRACKS_BEGIN
  });
  
export const fetchTracksSuccess = tracks => ({
    type: FETCH_TRACKS_SUCCESS,
    payload: { tracks }
});

export const fetchTracksFailure = error => ({
    type: FETCH_TRACKS_FAILURE,
    payload: { error }
});
  