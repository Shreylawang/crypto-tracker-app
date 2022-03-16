import React from "react";
import { Routes, Route } from "react-router-dom";
import ApiCall from "./components/ApiCall.jsx";
import Details from "./components/Details.jsx";
export default function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<ApiCall />} />
        <Route path="details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}
