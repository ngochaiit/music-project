import React, {Fragment, Component } from 'react';
import Chart from './Chart'
import Trend from './Trend';
import Music4U from './Music4U'
import TracksGrid from './TracksGrid';
import Carousel from './Carousel';
import {loadHotTracks} from '../../actions/fetchData4HomeAction';
import {connect} from 'react-redux';

class PageContent extends Component {

    componentDidMount() {
        this.props.dispatch(loadHotTracks());
    }

    render() {
        
        return (
            <Fragment>
                <div className="container">
                    
                    <div className="row">
                            <div className="col-lg-9 ">
                                <Carousel />
                                <TracksGrid  />
                            </div>
                            <div className="col-lg-3 ">
                                <Music4U />
                                <div className="row">
                                    <div className=" col-lg-12 col-md-6 col-sm-12">
                                        <Trend />
                                    </div>
                                    <div className="col-lg-12 col-md-6 col-sm-12 ">
                                        <Chart />
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </Fragment>
        )
  }
}

const mapStateToProps = state => ({
    chart : state.chart,
    loading : state.loading,
    error : state.error
  });
  
export default connect(mapStateToProps)(PageContent);