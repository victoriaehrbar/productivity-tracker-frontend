export function fetchMonths() {
    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/months')
      .then(resp => resp.json())
      .then(months => dispatch({
        type: 'FETCH_MONTHS',
        payload: months
      }))
    }
  }