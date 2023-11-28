import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";
import CategoryDetails from "./pages/CategoryDetails";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="add" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="categories">
            <Route index element={<Categories />} />
            <Route path=":id" element={<CategoryDetails />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
