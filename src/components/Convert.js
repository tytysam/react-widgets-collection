import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_TRANSLATE_API_KEY;

const Convert = ({ language, text }) => {
  useEffect(() => {
    axios.post(
      `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
      {},
      {
        params: {
          q: text,
          target: language.value,
        },
      }
    );
  }, [language, text]);

  return <div />;
};

export default Convert;
