import React, {Component} from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DogAdd from "./DogAdd";
import DogView from "./DogView";
import DogViewAll from "./DogViewAll";

class App extends Component {

  render() {
    return (
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<DogViewAll/>} />
              <Route path="/add" element={<DogAdd/>} />
              <Route path="/view" element={<DogView/>} />
            </Routes>
          </div>
        </Router>
    )
  }
}

export default App;
