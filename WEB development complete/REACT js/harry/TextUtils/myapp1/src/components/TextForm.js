import React, { useState } from "react";
import PropTypes from "prop-types";

function TextForm(props) {
  const handleUpper = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClear = () => {
    setText("");
  };
  const textonChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <form
      style={{
        backgroundColor: props.mode === "light" ? "white" : "#2D383C",
        color: props.mode === "light" ? "black" : "white",
      }}
    >
      <h1>{props.heading}</h1>
      <div className="form-group">
        <textarea
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#2D383C",
            color: props.mode === "light" ? "black" : "white",
          }}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
          value={text}
          onChange={textonChange}
        ></textarea>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleUpper}>
        convert to Uppercase
      </button>
      <button
        style={{ marginLeft: "2px" }}
        type="button"
        className="btn btn-primary"
        onClick={handleLower}
      >
        convert to Lowercase
      </button>
      <button
        style={{ marginLeft: "3px" }}
        type="button"
        className="btn btn-danger"
        onClick={handleClear}
      >
        clear
      </button>

      <h1>Summary</h1>
      <p>
        there are total {text.split(" ").length - 1} character and {text.length}{" "}
        words
      </p>
    </form>
  );
}

export default TextForm;
