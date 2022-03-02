import React from 'react';
import {connect} from 'react-redux'
import MonthsContainer from './containers/MonthsContainer'


class App extends React.Component {
  render() {
  return (
    <div className="App">
      <MonthsContainer/>
    </div>
  );
}

}

export default App;
 