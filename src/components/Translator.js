import React, { useState } from "react";
import Dropdown from "./Dropdown.js";
import Convert from "./Convert.js";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Bosnian",
    value: "bs",
  },
  {
    label: "Danish",
    value: "da",
  },
  {
    label: "Dutch",
    value: "nl",
  },
  {
    label: "English",
    value: "en",
  },
  {
    label: "Finnish",
    value: "fi",
  },
  {
    label: "French",
    value: "fr",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Icelandic",
    value: "is",
  },
  {
    label: "Italian",
    value: "it",
  },
  {
    label: "Japanese",
    value: "ja",
  },
  {
    label: "Korean",
    value: "ko",
  },
  {
    label: "Nepali",
    value: "ne",
  },
  {
    label: "Polish",
    value: "pl",
  },
  {
    label: "Russian",
    value: "ru",
  },
  {
    label: "Swedish",
    value: "sv",
  },
  {
    label: "Thai",
    value: "th",
  },
  {
    label: "Vietnamese",
    value: "vi",
  },
];

const Translator = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translator;
