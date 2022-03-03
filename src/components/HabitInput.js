import React from 'react'
import {connect} from 'react-redux'
import {addHabit} from '../actions/addHabit'

class HabitInput extends React.Component {

  state = {
    completed: '',
    date: '',
    description: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addHabit(this.state, this.props.month.id)
    this.setState({
        completed: '',
        date: '',
        description: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Completed:</label>
          <select name="completed" value={this.state.completed} onChange={this.handleChange}>
            <option>true</option>
            <option>false</option>
          </select>
          <label>Date:</label>
          <input type="text" name="date" value={this.state.date} onChange={this.handleChange}/>
          <label>Description:</label>
          <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    )

  }
}


export default connect(null, {addHabit})(HabitInput)