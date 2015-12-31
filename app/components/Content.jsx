import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../services/actions.jsx';
import List from './List.jsx';
import Movie from './Movie.jsx';

class Content extends Component {

  render() {
    return (
      <div>
        {this.props.ui === "LIST" ? <List /> : <Movie />}
      </div>
    );
  }

};

const select = (state) => {
  return {
    ui: state.ui
  };
};

export default connect(select)(Content);