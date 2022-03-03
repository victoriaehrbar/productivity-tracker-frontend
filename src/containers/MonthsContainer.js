import React from 'react'
import {connect} from 'react-redux'

import Months from '../components/Months'
import MonthInput from '../components/MonthInput'

class MonthsContainer extends React.Component {

    render(){
        return(
            <div>
                <MonthInput/>
                <Months/>
            </div>

        )
    }
}

export default MonthsContainer