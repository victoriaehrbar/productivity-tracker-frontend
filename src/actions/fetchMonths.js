export function fetchMonths() {
    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/months')
      .then(resp => resp.json())
      .then(accounts => dispatch({
        type: 'FETCH_MONTHS',
        
      }))
    }
  }