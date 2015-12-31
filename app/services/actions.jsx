
export const getData = () => {
  return (dispatch) => {
    fetch('http://127.0.0.1:8000/movies')
      .then((res) => {
        if(!res.ok) {throw res}
        return res.json();
      })
      .then((movies) => {
        dispatch({
          type: 'INITIAL_DATA',
          payload: movies
        })
      })
      .catch((response) => {
        return dispatch({
          type: 'ERROR',
          payload: response
        })
      })
  }
}

export const navigate = (page) => {
  return {
    type: 'NAVIGATE_TO',
    payload: {page}
  }
};

export const filterSearch = (text) => {
  return {
    type: 'FILTER',
    payload: text
  }
}

export const favorite = (something) => {
  //CODE HERE
  return {}
}