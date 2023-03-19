import { useRef, useState, useEffect } from "react";

const Result = (props) => {
  const addEnd = [
    "ly",
    "fy",
    "mify",
    "tzy",
    "tron",
    "free",
    "zone",
    "tros",
    "ist",
    "nee",
    "ant",
  ];

  const addbegin = ["de", "al", "el", "e-", "alfa", "alta", "astro"];

  const [copyStatus, setCopyStatus] = useState(false);

  const result1 = useRef(null);
  const result2 = useRef(null);
  const result3 = useRef(null);
  const result4 = useRef(null);
  const result5 = useRef(null);
  const result6 = useRef(null);

  const addEnding = (input) => {
    var text = "";

    text += addEnd[Math.floor(Math.random() * 10)];

    return input + text;
  };

  const addBeginning = (input) => {
    var text = "";

    text += addbegin[Math.floor(Math.random() * 6)];

    return text + input;
  };

  const copyText = () => {
    setCopyStatus(true);
    setTimeout(() => {
      setCopyStatus(false);
    }, 2500);
  };

  return (
    <>
      <div
        className="output-item"
        onClick={() => {
          navigator.clipboard.writeText(result1.current.innerText);
          copyText();
          alert("copied");
        }}
        ref={result1}
      >
        {props.show ? addBeginning(props.input) : ""}
      </div>
      <div
        className="output-item"
        onClick={(e) => {
          navigator.clipboard.writeText(result2.current.innerText);
          copyText();
          alert("copied");
        }}
        ref={result2}
      >
        {props.show ? addEnding(props.input) : ""}
      </div>
      <div
        className="output-item"
        onClick={(e) => {
          navigator.clipboard.writeText(result3.current.innerText);
          copyText();
          alert("copied");
        }}
        ref={result3}
      >
        {props.show ? addBeginning(props.input) : ""}
      </div>
      <div
        className="output-item"
        onClick={(e) => {
          navigator.clipboard.writeText(result4.current.innerText);
          copyText();
          alert("copied");
        }}
        ref={result4}
      >
        {props.show ? addBeginning(props.input) : ""}
      </div>
      <div
        className="output-item"
        onClick={(e) => {
          navigator.clipboard.writeText(result5.current.innerText);
          copyText();
          alert("copied");
        }}
        ref={result5}
      >
        {props.show ? addEnding(props.input) : ""}
      </div>
      <div
        className="output-item"
        onClick={(e) => {
          navigator.clipboard.writeText(result6.current.innerText);
          copyText();
          alert("copied");
        }}
        ref={result6}
      >
        {props.show ? addBeginning(props.input) : ""}
      </div>
    </>
  );
  // <div className="copy-status">{copyStatus ? <p>copied!</p> : ""}</div>
};

export default Result;
