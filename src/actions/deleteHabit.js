export const deleteHabit = (habitId, monthId) => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/api/v1/months/${monthId}/habits/${habitId}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(account => dispatch({type: 'DELETE_HABIT', payload: month}))
    }
  }