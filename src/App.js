import React, { useState } from "react";
import Header from "./components/Header.js";
import Accordion from "./components/Accordion.js";
import Search from "./components/Search.js";
import Dropdown from "./components/Dropdown.js";
import Translator from "./components/Translator.js";
import Route from "./components/Route.js";

const items = [
  {
    title: "What is React?",
    content: "React is a front end JavaScript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Orange",
    value: "orange",
  },
  {
    label: "The Color Yellow",
    value: "yellow",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },

  {
    label: "The Color Indigo",
    value: "indigo",
  },
  {
    label: "The Color Violet",
    value: "violet",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="ui container" style={{ marginTop: "25px" }}>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <div className="ui header">
          <h1 style={{ marginBottom: "50px", fontWeight: 100 }}>
            Dropdown Component built with useState and useRef
          </h1>
        </div>
        <Dropdown
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
        <div
          className="ui content"
          style={{ marginTop: "25px", textAlign: "center" }}
        >
          <h2 style={{ color: selected.value }}>
            Select a new color from the dropdown!
          </h2>
        </div>
      </Route>
      <Route path="/translator">
        <Translator />
      </Route>
    </div>
  );
};

export default App;
