import React from 'react'
import HabitInput from '../components/HabitInput'
import Habits from '../components/Habits'

class HabitsContainer extends React.Component {


  render() {
    return (
      <div>
          <HabitInput month={this.props.month}/><br/>
          <Habits habits={this.props.month && this.props.month.habits}/>
      </div>

    )

  }

}

export default HabitsContainer