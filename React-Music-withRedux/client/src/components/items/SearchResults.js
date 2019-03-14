import React, { Component } from 'react'
import { List, Avatar, Icon } from 'antd';
import {connect} from 'react-redux';
import playbtn from '../../assets/play-button.svg';
// import {Link} from 'react-router-dom';
import Chart from './Chart';

class SearchResults extends Component {
  render() {
    const IconText = ({ type, text }) => (
        <span>
          <Icon type={type} style={{ marginRight: 8 }} />
          {text}
        </span>
      );
    return (
      <div className="container">
        <div className="row">
              <div className="col-lg-8 col-md-8 ">
                <h3>You search for "{this.props.value}" </h3> <p className="mt-auto ml-3"> return {this.props.numOfResults} results</p>
                <List
                    bordered
                    itemLayout="vertical"
                    size="middle"
                    pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 10,
                    }}
                    dataSource={this.props.results}
                    footer={<div><b>ant design</b> footer part</div>}
                    renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[<IconText type="star-o" text={item.listeners} />, <IconText type="like-o" text={Math.round(Math.random()*10000)} />, <IconText type="message" text={Math.round(Math.random()*200)} />]}
                        extra={<img width={70} alt="logo" src={playbtn} />}
                    >
                        <List.Item.Meta
                        avatar={<Avatar src={item.image[2][`#text`]} />}
                        title={<a href={item.url}>{item.name}</a>}
                        description={item.artist}
                        />
                        {item.content}
                    </List.Item>
                    )}
                />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-8">
                <Chart />
              </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  results : state.search.results,
  value : state.search.value,
  numOfResults : state.search.numberOfResults
});

export default connect(mapStateToProps)(SearchResults);






