import React, { Component,Fragment } from 'react'
import { Input } from 'antd';
import "antd/dist/antd.css";
import {connect} from 'react-redux';
import {SearchFull} from '../../actions/searchActions';

import { withRouter } from 'react-router-dom'
class SearchBar extends Component {


  render() {

    return (
      <Fragment>
        <Input.Search
            placeholder="Search for artists, bands, tracks"
            onSearch={value => {
              this.props.history.push('/search')
              this.props.SearchFull(value)
            }}
            style={{ width: "25vw", minWidth : "225px" }}
            />
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    SearchFull : (songName)=> { dispatch(SearchFull(songName)) }
  }
}
const mapStateToProps = (state) => {
  return {
    value : state.search.value
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(SearchBar));

/* 

 state = {
    toDashboard: false,
  }
  handleSubmit = (user) => {
    saveUser(user)
      .then(() => this.setState(() => ({
        toDashboard: true
      })))
  }
  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to='/dashboard' />
    }


*/