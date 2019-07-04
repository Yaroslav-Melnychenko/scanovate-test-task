import React, { Component } from 'react';
import { Table } from 'antd';

class MovieList extends Component {

  componentDidMount() {
    this.props.getMovieList();
  }

  render() {

    const columns = [
      {
        title: 'Title ',
        dataIndex: 'title',
      },
      {
        title: 'Image',
        dataIndex: 'image',
      },
      {
        title: 'Year of creation',
        dataIndex: 'year',
      },
    ];

    const data = [
      {
        key: '1',
        title: 'John Brown',
        image: 32,
        year: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        title: 'Jim Green',
        image: 42,
        year: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        title: 'Joe Black',
        image: 32,
        year: 'Sidney No. 1 Lake Park',
      }
    ];
  
    return (
      <Table columns={columns} dataSource={data} />
    )
  }
}

export default MovieList;