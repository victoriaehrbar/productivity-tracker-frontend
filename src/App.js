
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import MonthInput from "./components/MonthInput";
import Months from "./components/Months";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/months" component={Months} />
          <Route path="/months/new" component={MonthInput} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;