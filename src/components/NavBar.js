import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div>
      <Link to='/months' style={{paddingRight: '10px'}}>Months  </Link>
      <Link to='/months/new'> Add Month</Link>
    </div>

  )
}

export default NavBar