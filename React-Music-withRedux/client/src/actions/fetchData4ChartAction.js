import axios from 'axios';
import {mediaUrl} from '../seeder2';

// KEEP THIS FETCH OUT SIDE JUST TO MAKE THE HANDLER FUNCTION SHORTER
    function getCharts() {
        return axios.all([
                    axios.get(`//ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=canada&page=1&limit=10&api_key=${process.env.REACT_APP_LFM_KEY}&format=json`,{
                        headers: {
                        'Access-Control-Allow-Origin': '*',
                        },
                        proxy: {
                        host: "cuong-musix.herokuapp.com",//'//cuong-musix.herokuapp.com',
                        port: process.env.PORT || 3000//process.env.PORT
                        }
                        }),
                    axios.get(`//ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=brazil&page=1&limit=10&api_key=${process.env.REACT_APP_LFM_KEY}&format=json`,{
                        headers: {
                        'Access-Control-Allow-Origin': '*',
                        },
                        proxy: {
                        host: "cuong-musix.herokuapp.com",//'//cuong-musix.herokuapp.com',
                        port: process.env.PORT || 3000//process.env.PORT
                        }
                        }),
                    axios.get(`//ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=mexico&page=1&limit=10&api_key=${process.env.REACT_APP_LFM_KEY}&format=json`,{
                        headers: {
                        'Access-Control-Allow-Origin': '*',
                        },
                        proxy: {
                        host: "cuong-musix.herokuapp.com",//'//cuong-musix.herokuapp.com',
                        port: process.env.PORT || 3000//process.env.PORT
                        }
                        })

                ])
    }
// THIS IS A HANDLER CAN BE IMPORTED IN COMPONENTS AND TRIGGER BY THEIR EVENTS
export const loadCharts = (dispatch)=> {
    return ()=> {
            dispatch(fetchChartsBegin())
            return  getCharts()
                    .then(axios.spread( (b,c,d) => {
                            console.log(b);
                            
                            let chartVN = b.data.tracks.track;
                            let chartUSUK = c.data.tracks.track;
                            let chartKPOP = d.data.tracks.track;

                            chartVN.forEach((e,i)=> {
                                e.mediaSrc = mediaUrl[i]
                            })
                            chartUSUK.forEach((e,i)=> {
                                e.mediaSrc = mediaUrl[i]
                            })
                            chartKPOP.forEach((e,i)=> {
                                e.mediaSrc = mediaUrl[i]
                            })
                            dispatch( fetchChartsSuccess({chartVN,chartUSUK,chartKPOP}) )

                    }))
                    .catch(error => dispatch(fetchChartsFailure(error)));

    }
}
//----ACTION TYPES ------------------------------------------------------
export const FETCH_CHARTS_BEGIN = "FETCH_CHARTS_BEGIN";
export const FETCH_CHARTS_SUCCESS = "FETCH_CHARTS_SUCCESS";
export const FETCH_CHARTS_FAILURE = "FETCH_CHARTS_FAILURE";

// ------ACTION CREATOR---------------------------------------------------
export const fetchChartsBegin = () => ({
    type: FETCH_CHARTS_BEGIN
  });
  
export const fetchChartsSuccess = tracks => ({
    type: FETCH_CHARTS_SUCCESS,
    payload: tracks
});

export const fetchChartsFailure = error => ({
    type: FETCH_CHARTS_FAILURE,
    payload: { error }
});
  