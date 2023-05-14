import React, { useState } from "react";
import "../App.css";

function Calculator() {
  const [input, setInput] = useState("");

  const addNumber = (num) => {
    setInput(input + num);
  };

  const addDecimal = () => {
    if (input.indexOf(".") === -1) {
      setInput(input + ".");
    }
  };

  const clearInput = () => {
    setInput("");
  };

  const deleteInput = () => {
    setInput(input.slice(0, -1));
  };

  const calculatePercentage = () => {
    const percentage = parseFloat(input) / 100;
    setInput(percentage.toString());
  };

  const evaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="App">
      <div className="calculator-wrapper">
        <div className="input-wrapper">
          <input type="text" value={input} disabled />
        </div>
        <div className="button-wrapper">
          <button className="button button-number" onClick={() => addNumber("7")}>7</button>
          <button className="button button-number" onClick={() => addNumber("8")}>8</button>
          <button className="button button-number" onClick={() => addNumber("9")}>9</button>
          <button className="button button-operator" onClick={() => setInput(input + " / ")}> ÷</button>
          <button className="button button-number" onClick={() => addNumber("4")}>4</button>
          <button className="button button-number" onClick={() => addNumber("5")}>5</button>
          <button className="button button-number" onClick={() => addNumber("6")}>6</button>
          <button className="button button-operator" onClick={() => setInput(input + " * ")}>×</button>
          <button className="button button-number" onClick={() => addNumber("1")}>1</button>
          <button className="button button-number" onClick={() => addNumber("2")}>2</button>
          <button className="button button-number" onClick={() => addNumber("3")}>3</button>
          <button className="button button-operator" onClick={() => setInput(input + " - ")}>–</button>
          <button className="button button-decimal" onClick={addDecimal}>.</button>
          <button className="button button-number" onClick={() => addNumber("0")}>0</button>
          <button className="button button-operator" onClick={calculatePercentage}>%</button>
          <button className="button button-operator" onClick={() => setInput(input + " + ")}>+</button>
          <button className="button button-reset" onClick={clearInput}>C</button>
          <button className="button button-reset" onClick={deleteInput}>DEL</button>
          <button className="button button-evaluate" onClick={evaluate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
