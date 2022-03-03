
   
import React from 'react'
import {connect} from 'react-redux'
import {deleteHabit} from '../actions/deleteHabit'

class Habits extends React.Component {

state = {}

 handleDelete = (habit) => {
    this.props.deleteHabit(habit.id, habit.month_id)
  }

vote = (id) => {
  this.state[id] ? this.setState({[id]: this.state[id] += 1}) : this.setState({[id]: 1})
}

render() {
  return (
      <div>
        {this.props.habits && this.props.habits.map(habit =>
          <li key={habit.id}>{habit.completed} - {habit.date} - {habit.description}  <button onClick={() => this.vote(habit.id)}>Vote {this.state[habit.id] ? this.state[habit.id] : 0}</button><button onClick={() => this.handleDelete(habit)}>Delete</button></li>
        )}
      </div>
    )
  }
}

export default connect(null, {deleteHabit})(Habits)