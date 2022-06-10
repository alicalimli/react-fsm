import ReactDOM from "react-dom";
import React from "react";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <StrictMode>
      <div>
        <SearchParams />
      </div>
    </StrictMode>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
