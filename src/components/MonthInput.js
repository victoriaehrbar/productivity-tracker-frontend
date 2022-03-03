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
                MonthInput
            </div>
        )
    }
}

export default MonthInput