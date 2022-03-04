import React from 'react'
import {Redirect} from 'react-router-dom'
import MonthEdit from './MonthEdit'

import HabitsContainer from '../containers/HabitsContainer'

const Month = (props) => {

  console.log(props)
  let month = props.months.filter(month => month.id == props.match.params.id)[0]

  console.log(month)
  return (

    <div>
      <h2>
        {month ? month.name : null}
      </h2>
      <HabitsContainer month={month}/><br/>
      <h4>Edit Month</h4>
      <MonthEdit month={month}/>
    </div>
  )


}

export default Month