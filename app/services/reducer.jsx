import {combineReducers} from 'redux';

let baseMovieData = [];

const ui = (state = 'LIST', action) => {
  switch(action.type){
    case 'NAVIGATE_TO':
      return action.payload.page;
    default:
      return state;
  }
};

const movies = (state = [], action) => {
  switch (action.type) {
    case 'INITIAL_DATA':
      baseMovieData = action.payload;
      return action.payload
    case 'ERROR':
      return state;
    case 'FAVORITE':
     return /*TO IMPLEMENT*/
    case 'FILTER':
      return baseMovieData.filter((movie) => {
        return movie.title.startsWith(action.payload)
      })
    default:
      return state;
  }
};

const search = (state = '', action) => {
  switch(action.type) {
    case 'FILTER':
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  ui,
  movies,
  search
});



