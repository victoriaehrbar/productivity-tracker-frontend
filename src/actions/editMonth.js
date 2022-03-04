export const editMonth = (data) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/months/${data.id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(month => dispatch({type: 'EDIT_MONTH', payload: month}))
    }
  
  }