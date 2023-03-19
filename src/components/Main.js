import React, { useState, useRef, useEffect } from "react";
import "./Main.css";
import Result from "./result";

const Main = () => {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");

  return (
    <main>
      <div className="input">
        <input
          type="text"
          placeholder="keyword"
          onChange={(typing) => {
            setInput(typing.target.value);
            setShow(false);
          }}
        ></input>
        <button
          onClick={() => {
            setShow(true);
          }}
        >
          Enter
        </button>
      </div>
      <div className="output">
        {show ? <Result input={input} show={show} /> : ""}
      </div>
    </main>
  );
};

export default Main;
