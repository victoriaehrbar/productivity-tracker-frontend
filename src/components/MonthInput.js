import React from 'react'
import {connect} from 'react-redux'
import {addMonth} from '../actions/addMonth'

class MonthInput extends React.Component {

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
        this.props.addMonth(this.state)
        this.setState({
          name: '',
        })
      }

    render(){
        return(
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

export default connect(null, {addMonth})(MonthInput)