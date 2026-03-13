1. make one input box with add and remove button just beside the input filed.
if user click on add button then new input box should be added bellow alongwith it own add and remove button.
if user click on remove button ,then input box should be removed.

ANS:-

import React, { useState } from "react";

function App() {
  const [inputs, setInputs] = useState([""]);

  const addInput = () => {
    setInputs([...inputs, ""]);
  };

  const removeInput = (index) => {
    const newInputs = inputs.filter((_, i) => i !== index);
    setInputs(newInputs);
  };

  const handleChange = (value, index) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  return (
    <div style={{ padding: "20px" }}>
      {inputs.map((input, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <input
            type="text"
            value={input}
            onChange={(e) => handleChange(e.target.value, index)}
          />

          <button onClick={addInput}>Add</button>

          <button onClick={() => removeInput(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default App;



---------------------------------------------------------------------------------------------------------------------------




