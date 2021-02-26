import React, { useState } from "react";
import Accordion from "./components/Accordion.js";
import Search from "./components/Search.js";
import Dropdown from "./components/Dropdown.js";
import Translator from "./components/Translator.js";

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
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      /> */}
      <Translator />
    </div>
  );
};

export default App;
