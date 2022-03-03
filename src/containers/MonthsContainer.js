import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchMonths} from '../actions/fetchMonths'
import Months from '../components/Months'
import Month from '../components/Month'
import MonthInput from '../components/MonthInput'
import NavBar from '../components/NavBar'

class MonthsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchMonths()
    }

    render(){
        return(
            <div>
                <MonthInput/>
                <Months/>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        months: state.months
    }
}

export default connect()(MonthsContainer)