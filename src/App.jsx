import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";

export default function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Home />} /> 
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}


