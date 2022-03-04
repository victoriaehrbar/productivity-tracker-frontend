import React from 'react'
import {connect} from 'react-redux'
import {editMonth} from '../actions/editMonth'

class MonthEdit extends React.Component {

  state = {
    name: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let month = {...this.state, id: this.props.month.id}
    this.props.editMonth(month)
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Month Name: </label>
          <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

MonthEdit.defaultProps = {
  months: {}
}


export default connect(null, {editMonth})(MonthEdit)