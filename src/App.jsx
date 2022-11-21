import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container mt-5">
        <section className="row justify-content-center">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/about" element={<About />}></Route>
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
        </section>
      </main>
    </BrowserRouter>
  );
};

export default App;
