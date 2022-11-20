import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route
          path="/users/:userid"
          element={
            <h1>
              <UserDetails />
            </h1>
          }
        ></Route>
        <Route path="*" element={<h1>404 Not Found</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
