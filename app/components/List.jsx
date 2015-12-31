import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../services/actions.jsx';


class List extends Component {

  returnMovie(movie,i){
    return (
      <div key={i} 
        className="list-movie btn"
        >
        <h3 onClick={List.navigate.bind(this, i)}
          className="list-title  clickable">
          {movie.title}
        </h3>

        <h1 className={"list-heart clickable "+(movie.favorite?'turn-pink':'')}
          /*DO HERE THINGS WITH CODE*/>
          {'<3'}
        </h1>
      </div>
    );
  }

  static navigate(dest) {
    this.props.dispatch(actions.navigate(dest));
  }
  //FAVORITE -- SOME METHOD HERE 

  searchChange(event){
    this.props.dispatch(actions.filterSearch(event.target.value));
  }


  render() {
    if(this.props.movies.map){
      return (
        <div className="list-display">
          <div className="list-header">
            <h1>Movies</h1>
            <input type="input" 
              onChange={this.searchChange.bind(this)}
              value={this.props.search}
              placeholder="search here"/>
          </div>
          <div className="list-container">
            {this.props.movies.map((movie,i) => this.returnMovie(movie,i))}
          </div>
        </div>
      );
    }
    return null;
  }

};

const select = (state) => {
  return {
    movies: state.movies,
    search: state.search
  };
};

export default connect(select)(List);