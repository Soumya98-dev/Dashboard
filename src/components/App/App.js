import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import SubFollowers from "../SubFollowers/SubFollowers";
import Activity from "../Activity/Activity";
import SideBar from "../SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Dashboard/" element={<Navbar />} />
      </Routes>
      <Header />
      <SideBar />
      <SubFollowers />
      <Activity />
    </div>
  );
}

export default App;
