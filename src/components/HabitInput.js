import React from 'react'
import {connect} from 'react-redux'
import {addHabit} from '../actions/addHabit'

class HabitInput extends React.Component {

  state = {
    completed: '',
    date: '',
    description: ''
  }