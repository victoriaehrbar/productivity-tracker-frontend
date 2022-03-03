export default function accountReducer(state = {months: []}, action) {
    switch (action.type) {
      case 'FETCH_MONTHS':
        return {months: action.payload}
      case 'ADD_MONTH':
        return {...state, months: [...state.months, action.payload]}
      case 'ADD_HABIT':
        let months = state.months.map(month => {
          if (month.id === action.payload.id) {
            return action.payload
          } else {
            return month
          }
        })
        return {...state, months: months}
      case 'DELETE_HABIT':
        let monthsTwo = state.months.map(month => {
          if (month.id === action.payload.id) {
            return action.payload
          } else {
            return month
          }
        })
        return {...state, months: monthsTwo}
      case 'EDIT_MONTH':
        let monthsThree = state.months.map(month => {
          if (month.id === action.payload.id) {
            return action.payload
          } else {
            return month
          }
        })
        return {...state, months: monthsThree}
      default:
        return state
    }
  }