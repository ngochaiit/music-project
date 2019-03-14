import { FETCH_TRACKS_BEGIN , FETCH_TRACKS_SUCCESS , FETCH_TRACKS_FAILURE } from "../actions/fetchData4HomeAction";
import { FETCH_CHARTS_BEGIN , FETCH_CHARTS_SUCCESS , FETCH_CHARTS_FAILURE } from "../actions/fetchData4ChartAction";
import {PLAY_SONG_ITEM ,PLAY_SONG_USUK,PLAY_SONG_VN,PLAY_SONG_KPOP ,CLEAR_PLAYER } from "../actions/playSongAction";
import {SEARCH_FOR_FULL_RESULT,SEARCH_BEGIN,SEARCH_FAILURE} from '../actions/searchActions'

const initState = {
    loading: false,
    error: null,
    songItems : [],
    chart : {
        chartVN : [],
        chartUSUK :[],
        chartKPOP : []
    },
    search : {
        value : "",
        //type : "song",
        suggestion : [],
        numberOfResults : 0,
        page : 1,
        limit : 10,
        results : [],
        loading: false,
        error: null,
    },
    player : {
        playingSong : {},
        playList : [],
        currentRange : 0,
        volume : 50,
        isMuted : false,
        pause : true,
        playStyle : "Loop All List"
    }
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_TRACKS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_TRACKS_SUCCESS:
            return {
                ...state,
                loading: false,
                songItems: action.payload.tracks,
            };
        case FETCH_TRACKS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        case FETCH_CHARTS_BEGIN:
        console.log("begin chart");
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_CHARTS_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                loading: false,
                chart : {
                    chartVN : action.payload.chartVN,
                    chartUSUK : action.payload.chartUSUK,
                    chartKPOP : action.payload.chartKPOP
                }
            };
        case FETCH_CHARTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };       
        case PLAY_SONG_ITEM:
            let item = state.songItems.find((i)=> i.name===action.payload.songName)
            
            return {
                ...state,
                player : {
                    ...state.player,
                    playingSong :item
                }
        };
        case PLAY_SONG_VN:
            let VN = state.chart.chartVN.find((i)=> i.name===action.payload.songName)
            
            return {
                ...state,
                player : {
                    ...state.player,
                    playingSong :VN
                }
        };
        case PLAY_SONG_USUK:
            let USUK = state.chart.chartUSUK.find((i)=> i.name===action.payload.songName)
            
            return {
                ...state,
                player : {
                    ...state.player,
                    playingSong :USUK
                }
        };
        case PLAY_SONG_KPOP:
            let KPOP = state.chart.chartKPOP.find((i)=> i.name===action.payload.songName)
            
            return {
                ...state,
                player : {
                    ...state.player,
                    playingSong :KPOP
                }
        };
        case SEARCH_BEGIN : 
            console.log('begin');
            
            return {
                ...state,
                search : {
                    ...state.search,
                    loading : true,
                    error: null
                }
            };
        case SEARCH_FOR_FULL_RESULT : 
            console.log(action.payload);
            return {
                ...state,
                search : {
                    ...state.search,
                    value : action.payload.value,
                    results : action.payload.results,
                    numberOfResults : action.payload.num,
                    error: null,
                    loading : false,
                }
        };
        case SEARCH_FAILURE : 
            console.log('failed');
            return {
                ...state,
                search : {
                    ...state.search,
                    loading : false,
                    error: action.payload
                }
            };
        case CLEAR_PLAYER : 
            return {
                ...state,
                player : {
                    ...state.player,
                    playingSong : {}
                }
            }
        default:
        // ALWAYS have a default case in a reducer import axios from 'axios';
        return state;
    }
    
}

export default rootReducer
