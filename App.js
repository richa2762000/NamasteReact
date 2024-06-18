import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const simblingDivTag = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "head1" }, "haed1"),
    React.createElement("h2", { id: "head2" }, "head2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "head1" }, "haed1"),
    React.createElement("h2", { id: "head2" }, "head2"),
  ]),
]);
root.render(simblingDivTag);
