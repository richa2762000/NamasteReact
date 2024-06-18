// this is for my knowleadge

const root = ReactDOM.createRoot(document.getElementById("root"));

// single tag
const heading1 = React.createElement("h1", { id: "heading" }, "Hi");
// root.render(heading);

// nested child div
const nestedHead = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "head" }, "I'm child")
  )
);
// root.render(nestedHead);

// simbling tag - for simbling we will use array
const simblingTag = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "head1" }, "haed1"),
    React.createElement("h2", { id: "head2" }, "head2"),
  ])
);
// root.render(simblingTag);

// simbling div tag - for simbling we will use array
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
