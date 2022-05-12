import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alerts from "./components/Alert";


function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  function changeTheme(color){
    if(color==="white"||color==="#ffffff"){
      setMode("light");
      showAlert("Color Mode Disabled", "success")
    }
    else{
      setMode("dark")
      showAlert("Color Mode Enabled", "success")
    }
    
    document.body.style.backgroundColor = color;
  }

  // function toggleMode() {
  //   if (mode === "dark") {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Dark Mode Disabled", "success");
  //   } else {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#343a40";
  //     showAlert("Dark Mode Enabled", "success");
  //   }
  // }

  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar title="TextUtils" mode={mode} changeTheme={changeTheme} />
        <Alerts alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter text to analyze below"
                mode={mode}
                alert={showAlert}
              />
            }
          />
        </Routes>
  
      </Router>
    </>
  );
}

export default App;
