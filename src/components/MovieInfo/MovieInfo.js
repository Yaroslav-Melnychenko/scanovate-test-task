import React, { Component } from 'react';
import { Tag, Rate, Spin } from 'antd';
import LazyLoad from 'react-lazy-load';
import { GET_MOVIE_IMAGE_URL } from '../../constants/apiUrl';
import './MovieInfo.css';

class MovieInfo extends Component {
  render() {

    const { isFetching, data: { poster_path, title, overview, genres, vote_average } } = this.props;

    return (
      <div className="info-container">
        { isFetching ? <div className="loading"><Spin size="large" /></div> : (
          <div className="top-info">
          { poster_path ? (
            <LazyLoad 
              width={200}
              height={300}
              debounce={false}
              offsetVertical={500}
            >
              <img src={GET_MOVIE_IMAGE_URL + poster_path} alt="" />
            </LazyLoad>
          ) : null }
          <div className="main-info">
            <h2>{ title }</h2>
            <p className="mt-15">{ overview }</p>
            <div className="mt-15">
              {
                genres && genres.map(ganre => <Tag key={ganre.id} color="blue">{ganre.name}</Tag>)
              }
              <div className="mt-15">
                { vote_average && <Rate defaultValue={Math.round(vote_average)} disabled={true} count={10} /> }
              </div>
            </div>
          </div>
        </div>
        ) }
      </div>
    )
  }
}

export default MovieInfo;