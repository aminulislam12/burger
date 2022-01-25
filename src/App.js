import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main";

function App() {
  document.title = "Burger Builder Application";
  return (
    <div>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
