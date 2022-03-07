
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MonthInput from "./components/MonthInput";
import Months from "./components/Months";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/months" element={<Months/>} />
          <Route path="/months/new" element={<MonthInput/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;