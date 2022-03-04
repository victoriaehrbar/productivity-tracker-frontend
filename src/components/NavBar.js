import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/months"> Months</Link>
        </li>
        <li>
          <Link to="/months/new"> Create a Month</Link>
        </li>
      </ul>
    </div>
  );
}