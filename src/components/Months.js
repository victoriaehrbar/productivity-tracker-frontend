import React from 'react'
import {Route, Link} from 'react-router-dom'
import Month from './Month'

const Months = (props) => {

  return (
    <div>
      {props.months.map(month =>
        <li key={month.id}>
          <Link to={`/months/${month.id}`}>{month.name}</Link>
        </li> )}
    </div>

  )
}

export default Months