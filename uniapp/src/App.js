import Navbar from "./components/Navbar.js";
import SignUp from "./components/SignUp.js";
import Login from "./components/Login.js";
import AdminView from "./components/AdminView.js";
import Home from "./components/Home.js";
import Research from "./components/Research.js";
import { Routes, Route } from "react-router-dom";
import { useState,useEffect } from 'react';

function App() {

  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/AdminView" element={<AdminView />} />
      </Routes>
      {/* Admin View */}
      {/* <AdminView /> */}
      {/* Research Data */}
      {/* <Research /> */}
    </div>
  );
}

export default App;
