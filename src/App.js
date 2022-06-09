import ReactDOM from "react-dom";
import { React, StrictMode } from "react";
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
