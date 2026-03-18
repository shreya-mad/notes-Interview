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


