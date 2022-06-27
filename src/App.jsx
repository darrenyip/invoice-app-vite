import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Edit from "./components/edit";
import "./App.css";

function App() {
  console.log("rendered");
  return (
    <BrowserRouter>
      <NavBar />
      <div className="text-3xl font-bold underline">
        main invoice
        <Link to="/12"> go to Edit</Link>
        <Routes>
          <Route path="/:id" element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
