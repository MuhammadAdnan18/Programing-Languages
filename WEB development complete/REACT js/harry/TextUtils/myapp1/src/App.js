import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import "./App.css";
import React, { Fragment } from "react";
import About from "./components/About";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2D383C";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Router>
        <Fragment>
          <Navbar
            title="TextUtils"
            about="AboutUs"
            toggleMode={toggleMode}
            mode={mode}
          />
          <div className="container">
            <Routes>
              <Route exact path="about" element={<About mode={mode} />}></Route>
              <Route
                exact
                path="/"
                element={<TextForm mode={mode} heading="Enter text" />}
              ></Route>
            </Routes>
          </div>
        </Fragment>
      </Router>

      {/*<div className="container my-3">
        <About />
  </div>*/}
    </>
  );
}

export default App;
