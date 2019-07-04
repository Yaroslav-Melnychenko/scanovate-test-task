import React, { Component } from 'react';
import { Table } from 'antd';
import LazyLoad from 'react-lazy-load';
import { GET_MOVIE_IMAGE_URL } from '../../constants/apiUrl';
import './MovieList.css';

class MovieList extends Component {

  componentDidMount() {
    this.props.getMovieList();
  }

  handleTableChange = ({ current }) => {
    this.props.getMovieList(current);
  };

  onRowClick = ({ id }) => {
    const { getMovieDetails } = this.props;
    return {
      onClick: event => {
        getMovieDetails(id);
      }
    };
  }

  render() {

    const { data, isFetching } = this.props;

    const columns = [
      {
        title: 'Poster',
        dataIndex: 'poster_path',
        render: image => (
          <LazyLoad 
            width={70}
            height={105}
            debounce={false}
            offsetVertical={500}
          >
            <img className="poster" src={GET_MOVIE_IMAGE_URL + image} alt="" />
          </LazyLoad>)
      },
      {
        title: 'Title ',
        dataIndex: 'title',
        render: title => <h3>{ title }</h3>
      },
      {
        title: 'Date of creation',
        dataIndex: 'release_date',
        render: date => <i>{ date }</i>
      },
    ];
  
    return (
      <div className="table-wrap">
        { data && 
          <Table 
            columns={columns} 
            dataSource={data.results} 
            rowKey="id" 
            loading={isFetching} 
            pagination={{ 
              loading: isFetching,
              data: data.results,
              total: data.total_results,
              pageSize: 20 
            }}
            scroll={{ y: true }}
            showHeader={true}
            onChange={this.handleTableChange}
            onRow={this.onRowClick}
          /> 
        }
      </div>
    )
  }
}

export default MovieList;