import React from 'react'

class MonthInput extends React.Component {

    state = {
        name: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
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

export default MonthInput