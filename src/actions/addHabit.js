export const addHabit = (habit, monthId) => {

    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/months/${monthId}/habits`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(habit)
      })
      .then(response => response.json())
      .then(month => {
          if (month.error) {
            alert(month.error)
          } else {
            dispatch({type: 'ADD_HABIT', payload: month})
          }
        }
      )
    }
  }