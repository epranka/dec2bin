import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [decimalIsValid, setDecimalIsValid] = useState(true);
  const [binaryValue, setBinaryValue] = useState("");
  const [decimalValue, setDecimalValue] = useState("");

  const formatValue = value => {
    return value.replace(/\s+/g, "");
  };

  const handleDecimalValueChange = e => {
    let value = String(e.target.value);
    if (!value) {
      setDecimalValue("");
      setDecimalIsValid(true);
    } else {
      setDecimalIsValid(/^([0-9]+)$/.test(value));
      setDecimalValue(formatValue(value));
    }
  };

  const calculateBinary = decimalNumber => {
    return decimalNumber
      .toString(2)
      .replace(/(\d{4})/g, "$1 ")
      .trim();
  };

  useEffect(() => {
    if (decimalIsValid && decimalValue) {
      const decimalNumber = parseInt(decimalValue.replace(/[^0-9]/g, ""));
      const binaryValue = calculateBinary(decimalNumber);
      setBinaryValue(binaryValue);
    } else {
      setBinaryValue("");
    }
  }, [decimalValue, decimalIsValid]);

  return (
    <div id="dec2bin">
      <h1 id="header">
        <a href="https://bin2dec.now.sh" title="Switch to Bin2Dec">
          Dec2Bin
        </a>
      </h1>
      <input
        id="decimal"
        className={decimalIsValid ? "" : "invalid"}
        type="text"
        placeholder="1234"
        value={decimalValue}
        onChange={handleDecimalValueChange}
      />
      <div id="binary">{binaryValue}</div>
    </div>
  );
}

export default App;
