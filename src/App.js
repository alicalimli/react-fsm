import ReactDOM from "react-dom";
import React from "react";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <h1>Adopt me</h1>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
