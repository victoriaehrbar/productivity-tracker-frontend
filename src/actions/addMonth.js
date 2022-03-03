export const addMonth = (data) => {

    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/months', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(month => dispatch({type: 'ADD_MONTH', payload: month}))
    }
  
  }