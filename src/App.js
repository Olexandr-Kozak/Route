import './App.css';
import Hw8 from "./components/HomeWork8/Hw8";
import React from "react";
import {
  Routes,
  Route, NavLink
} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Profiles from "./components/Profiles/Profiles";

function App() {
  return (
    <div className="App">
      <ul>
        <NavLink to="/">HomePage</NavLink> <br/>
        <NavLink to="/setting">Settings</NavLink><br/>
        <NavLink to="/profiles">Profiles</NavLink>
      </ul>
      <Routes>
        <Route path="/" element={<Hw8 />} />
        <Route path="/setting" element={<Settings />} />
        <Route path="/profiles" element={<Profiles />} />
      </Routes>
    </div>
  );
}

export default App;
