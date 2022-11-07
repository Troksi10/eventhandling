import React from "react";
import { useState } from "react";

function NameApp() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeading(name);

    event.preventDefault();
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default NameApp;
