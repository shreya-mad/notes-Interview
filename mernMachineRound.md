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

2. traffic light ?
ANS:-

  import React,{useState,useEffect} from 'react';

  const App=()=>{
    const [lightColour,setLightColour]=useState('red');
    useEffect(()=>{
      const interval=setInterval(()=>{
        setLightColour(prev=>{
          if(prev==='red')
           return 'yellow'; a
          if(prev==='yellow')
            return 'green';
          return 'red';   
        })
      },1000);
      return ()=>clearInterval(interval);
    },[]);
    const getColour=(colour)=>{
      return colour===lightColour?lightColour:"#ccc";
    }
    return (
      <div>
         <div style={{backgroundColor:getColour('red'), height:"50px",width:"50px"}} />
         <div style={{backgroundColor:getColour('yellow'), height:"50px",width:"50px"}} />
         <div style={{backgroundColor:getColour('green'), height:"50px",width:"50px"}} />
      </div>
    );
  };

  export default App;


---------------------------------------------------------------------------------------------------------------------------


3. make to do list?
ANS:-

 import React, { useState } from "react";

const App = () => {
  const [task, setTasks] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    if (task.trim() === "") return;
    setList([...list, task]);
    setTasks("");
  };

  const handleRemove = (index) => {
    const newList = list.filter((_, idx) => idx !== index);
    setList(newList);
  };

  return (
    <>
      <input
        placeholder="write, whatever you want to ask"
        value={task}
        onChange={(e) => setTasks(e.target.value)}
      />
      <button onClick={addItem}>Add</button>

      {list.map((value, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "10px",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        >
          <p style={{ margin: 0 }}>{value}</p>

          <button onClick={() => handleRemove(index)}>Remove</button>
        </div>
      ))}
    </>
  );
};

export default App;


---------------------------------------------------------------------------------------------------------------------------



3. implement counter with bellow mention instruction?
Level 1 Requirements:
Display a number on the screen (initial value should be 0)
Provide:
An Increment button → increases the count by 1
A Decrement button → decreases the count by 1
A Reset button → resets the counter to 0
Use React functional components
Use React Hooks (useState) for state management
Keep the UI simple and clean (no need for styling libraries)

Level 2 Requirements:
Add these requirements after completing the basic counter:
Increment / decrement by a dynamic step value
Step value is controlled by an <input />
Counter value must never go below 0
Show an error message if the user enters an invalid step (negative, empty, or non-numeric)


ANS:--

import React, { useState } from "react";
const App = () => {
  const [value, setValue] = useState(0);
  const [stepValue, setStepValue] = useState(1);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue === "" || inputValue < 0 || isNaN(inputValue)) {
      setError("entered invalid value");
      setStepValue(0);
    } else {
      setError("");
      setStepValue(Number(inputValue));
    }
  };
  const handleIncrease = () => {
    setValue(value + stepValue);
  };
  const handleDecrease = () => {
    setValue((val) => (val - stepValue >= 0 ? val - stepValue : 0));
  };
  const Reset = () => {
    setValue(0);
  };
  return (
    <div>
      <h2>{value}</h2>
      <input
        type="text"
        placeholder="please enter value"
        onChange={handleChange}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Deccrease</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};
export default App;


---------------------------------------------------------------------------------------------------------------------------

4. same above question but disable dreasement and reset button when value is equal to or less than 0.
ANS:- 
import React, { useState } from "react";
const App = () => {
  const [value, setValue] = useState(0);
  const [stepValue, setStepValue] = useState(1);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue === "" || inputValue < 0 || isNaN(inputValue)) {
      setError("entered invalid value");
      setStepValue(0);
    } else {
      setError("");
      setStepValue(Number(inputValue));
    }
  };
  const handleIncrease = () => {
    setValue(value + stepValue);
  };
  const handleDecrease = () => {
    setValue(val - stepValue);
  };
  const Reset = () => {
    setValue(0);
  };
  return (
    <div>
      <h2>{value}</h2>
      <input
        type="text"
        placeholder="please enter value"
        onChange={handleChange}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleIncrease}>Increase</button>
      <button disabled={value <= 0 ? true : false} onClick={handleDecrease}>
        Deccrease
      </button>
      <button disabled={value <= 0 ? true : false} onClick={Reset}>
        Reset
      </button>
    </div>
  );
};
export default App;


---------------------------------------------------------------------------------------------------------------------------

5. password Show Hide?
ANS:- 

import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <label>Enter password</label>
      <input type={show ? "text" : "password"} />

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default App; 

---------------------------------------------------------------------------------------------------------------------------

6. make custon hook which works same as useEffect but skip first rendering?
ANS:-

import { useEffect, useRef } from "react";

const useUpdateEffect = (callback, dependencies) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    return callback();
  }, dependencies);
};

export default useUpdateEffect;



import React, { useState } from "react";
import useUpdateEffect from "./useUpdateEffect";

const App = () => {
  const [count, setCount] = useState(0);

  useUpdateEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;

---------------------------------------------------------------------------------------------------------------------------

7. ✅ 2. DOM Tree Height

Define the height of a tree as the maximum depth from the root node.

Empty root node → height = 0.

Input: A DOM tree (e.g.,

<div>
  <div>
    <p><button>Hello</button></p>
  </div>
  <p><span>World!</span></p>
</div>

Output: An integer representing the height of the tree (e.g., 4 for the above example).

ANS:- 
  

  <!DOCTYPE html>
<html>
<head>
  <title>DOM Tree Height</title>
</head>
<body>

<div id="root">
  <div>
    <p><button>Hello</button></p>
  </div>
  <p><span>World!</span></p>
</div>

<script>
  function getHeight(node) {
    if (!node) return 0;

    // if no children → height = 1
    if (node.children.length === 0) {
      return 1;
    }

    let max = 0;

    for (let child of node.children) {
      max = Math.max(max, getHeight(child));
    }

    return max + 1;
  }

  const root = document.getElementById("root");

  const height = getHeight(root);

  console.log("Tree Height:", height);
</script>

</body>
</html>

---------------------------------------------------------------------------------------------------------------------------

---------------------------------------------------------------------------------------------------------------------------

---------------------------------------------------------------------------------------------------------------------------

---------------------------------------------------------------------------------------------------------------------------

---------------------------------------------------------------------------------------------------------------------------

---------------------------------------------------------------------------------------------------------------------------

---------------------------------------------------------------------------------------------------------------------------

---------------------------------------------------------------------------------------------------------------------------

---------------------------------------------------------------------------------------------------------------------------


