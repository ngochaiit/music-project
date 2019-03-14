import axios from 'axios';



export const SearchFull = (songName,page=1,limit=30) => {
    return dispatch => {
        dispatch(searchBegin())
        return axios.get(`//ws.audioscrobbler.com/2.0/?method=track.search&track=${songName}&page=${page}&limit=${limit}&s_track_rating=desc&api_key=${process.env.REACT_APP_LFM_KEY}&format=json`)
            .then(result=> {
                let numOfResults = result.data.results[`opensearch:totalResults`];
                let {track} = result.data.results.trackmatches;
                console.log(track);
                return dispatch(searchThis(track,songName,numOfResults))
            })
            .catch(err=>{ dispatch(searchFailure(err)) })
    }
    
}


//----ACTION TYPES ------------------------------------------------------
//export const SUGGEST_FOR_THIS = "SUGGEST_FOR_THIS"; 
export const SEARCH_FOR_FULL_RESULT = "SEARCH_FOR_FULL_RESULT";
// export const SEARCH_FOR_ARTIST = "SEARCH_FOR_ARTIST";
// export const SEARCH_FOR_ALBUM = "SEARCH_FOR_ALBUM";
export const SEARCH_BEGIN = "SEARCH_BEGIN";
export const SEARCH_FAILURE = "SEARCH_FAILURE";
// ------ACTION CREATOR---------------------------------------------------

export const searchThis = (results,value,num)=> ({ 
    type:  SEARCH_FOR_FULL_RESULT,
    payload: { results , value,num }
});


export const searchBegin = () => ({
    type: SEARCH_BEGIN
});

export const searchFailure = error => ({
    type: SEARCH_FAILURE,
    payload: { error }
});



// export const albumSearch = albumName=> ({
//     type:  SEARCH_FOR_ALBUM,
//     payload: { albumName }
// });
// export const artistSearch = artistName=> ({
//     type:  SEARCH_FOR_ARTIST,
//     payload: { artistName }
// });