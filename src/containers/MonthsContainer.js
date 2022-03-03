import React from 'react'
import {connect} from 'react-redux'

import Months from '../components/Months'
import MonthInput from '../components/MonthInput'

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