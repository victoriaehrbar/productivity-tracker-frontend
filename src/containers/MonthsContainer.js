import React from 'react'
import {connect} from 'react-redux'
import {Route, Routes} from 'react-router-dom'
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
                <Routes>
                    <Route path='/months/new' component={MonthInput}/>
                    <Route path='/months/:id' render={(routerProps) => <Month {...routerProps} months={this.props.months}/>}/>
                    <Route path='/months' render={(routerProps) => <Months {...routerProps} months={this.props.months}/>}/>
                </Routes>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        months: state.months
    }
}

export default connect(mapStateToProps, {fetchMonths})(MonthsContainer)