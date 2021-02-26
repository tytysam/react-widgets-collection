import React from "react";

const Header = () => {
  return (
    <div
      className="ui secondary pointing menu"
      style={{ marginBottom: "50px" }}
    >
      <a href="/" className="item">
        Accordion
      </a>
      <a href="/search" className="item">
        Search
      </a>
      <a href="/dropdown" className="item">
        Dropdown
      </a>
      <a href="/translator" className="item">
        Translator
      </a>
    </div>
  );
};

export default Header;
