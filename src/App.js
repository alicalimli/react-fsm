import React from "react";
import ReactDOM from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h1", {}, props.animal),
    React.createElement("h1", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", { className: "bruh" }, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
