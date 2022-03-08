export function fetchMonths() {
    return (dispatch) => {
      fetch("http://localhost:3000/api/v1/months")
      .then(response => response.json())
      .then(json => {
          dispatch({type: "FETCH_MONTHS", payload: json.data})
        })
      }
    }