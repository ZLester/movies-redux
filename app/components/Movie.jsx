import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../services/actions.jsx';
import List from './List.jsx'


class Movie extends Component {

  render() {
    const movie = this.props.movies[this.props.ui];
    return (
      <div>
        <div 
          className="clickable movie-back-btn"
          onClick={List.navigate.bind(this,'LIST')}>
          Back
        </div>
        <div className="movie-container">
          <h1>{movie.title}</h1>
          <img className="movie-poster" src={"./assets/"+(movie.title)+".jpg"}></img>
          <h3 className="movie-description">{movie.description}</h3>
        </div>
      </div>
    );
  }

};

const select = (state) => {
  return {
    movies: state.movies,
    ui: state.ui
  };
};

export default connect(select)(Movie);