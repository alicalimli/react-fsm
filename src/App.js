import ReactDOM from "react-dom";
import React from "react";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
