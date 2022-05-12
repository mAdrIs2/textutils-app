import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleUpClick() {
    if (text.length === 0) props.alert("Text Area is empty", "error");
    else {
      let newtext = text.toUpperCase();
      setText(newtext);
      props.alert("Converted to UpperCase", "success");
    }
  }

  function handleLowClick() {
    if (text.length === 0) props.alert("Text Area is empty", "error");
    else {
      let newtext = text.toLowerCase();
      setText(newtext);
      props.alert("Converted to LowerCase", "success");
    }
  }

  function handleClearClick() {
    if (text.length === 0) props.alert("Text Area is empty", "error");
    else {
      setText("");
      props.alert("Text Area is cleared", "success");
    }
  }

  function getWordStat(str) {
    let matches = str.match(/\S+/g);
    return matches ? matches.length : 0;
  }
  function myStyle(mode) {
    return mode === "dark" ? { color: "white" } : { color: "black" };
  }
  return (
    <>
      <div className="container my-3">
        <div className="container" style={myStyle(props.mode)}>
          <h2>{props.heading}</h2>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="mybox"
              rows="8"
              onChange={handleChange}
              value={text}
              placeholder="Enter your text here"
              style={
                props.mode === "dark"
                  ? { color: "white", backgroundColor: "#212529" }
                  : { backgroundColor: "#f8f9fa" }
              }
            ></textarea>
          </div>
          <button className="btn btn-dark me-2 my-2" onClick={handleClearClick}>
            Clear Text
          </button>
          <button className="btn btn-dark me-2 my-2" onClick={handleUpClick}>
            Convert to UpperCase
          </button>
          <button className="btn btn-dark me-2 my-2" onClick={handleLowClick}>
            Convert to LowerCase
          </button>
        </div>
        <div className="container my-3" style={myStyle(props.mode)}>
          <h2>Your Text Summary</h2>
          <p>
            <strong>{getWordStat(text)}</strong> words and{" "}
            <strong>{text.length}</strong> characters.
          </p>
          <p>
            <strong>{0.48 * getWordStat(text)}</strong> seconds to read.
          </p>
          <h2>Preview Text</h2>
          <p>
            {text.length > 0
              ? text
              : "Enter something in the textbox above to preview it here."}
          </p>
        </div>
      </div>
    </>
  );
}
