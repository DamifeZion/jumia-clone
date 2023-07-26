import React from "react";
import { Routes, Route } from "react-router-dom";
import {Home,} from './Page/PageExport'
import './App.css'

const App = () => {
  return (
    <div className="flex flex-col">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/" />
      </Routes>
    </div>
  );
};

export default App;
