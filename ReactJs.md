1. useMemo Hook?
ANS: It is nothing but one of the react hooks.here use meaning its a hook becuase use word is used in all the hooks and memo means Memoisation.
imagine there are two person.person a is teacher and person b is student so teacher asked student ,tell me the ans of 2*3 so student didnt know its ans so calculated its ans and decided to store it somewhere so that if someone will ask later then simply will ans from the stored part  and then replied thats ans to teacher,its ans would be 6.
and similarly for 4*7 and 5+102 as well so here student stores all the ans somewhere so that if it will be asked later then will reply by picking from that location so student dont need to perform operation again and again.
this process of storing value somewhere so that can be used later is called as memoisation.so relate it will with coding  as well.
we commonly use it in DP.
so in simple word,useMemo is a kind of hook which is used to prevent unnecesary expensive operations.we can say expensive opention in terms of memory or time anything.
lets take a example of expensive operation:-

import React, { useState, useMemo } from "react";
function App() {
  const [count, setCount] = useState(0);


  function expensiveTask(num) {
    console.log("Inside Expensive Task");
    <!-- addded below line to make it expensive because it will take some time to interate in the loop as it will interate for 1000000000 times -->
    for (let i = 0; i <= 1000000000; i++) {} 
    return num * 2;
  }

  let doubleValue = useMemo(() => {
    return expensiveTask(4);
  }, []); 

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <div>
        Count: {count}
      </div>

      <div>
        Double: {doubleValue}
      </div>
    </div>
  );
}

export default App;

when we on Increment button then it will increase counter by one so after changing useState ,it will re-render whole component so while rerender it will take some time to run expensiveTask fucntion so if we increase counter multiple times then it will take much time as compare our expectation due to running expensiveTask fucntion on every re-render if counter increses so here we are passing 4 for every time so to make it fast we store(Memomoise) expensiveTask(4) value somewhere so that it will not run on every re-render and our component become faster as comapre without memoisation. but if we chnage value passed inside expensiveTask fucntion then it will take that much time. below one code is for variable input value 


import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0); 

  function expensiveTask(n) {
    console.log("Inside Expensive Task");
    for (let i = 0; i <= 1000000000; i++) {} 
    return n * 2;
  }
  const doubleValue = expensiveTask(num);
  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <div>Count: {count}</div>

      <div style={{ marginTop: "20px" }}>
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(Number(e.target.value))}
          placeholder="Enter a number"
        />
      </div>

      <div>Double of {num}: {doubleValue}</div>
    </div>
  );
}

export default App;

now to make above task fatser ,we need to use useMemo so inside usememo, we need to pass two things one is function for which we want to apply useMemo and then varible by changing that we need to re-call that function so here first we need to import useMemo use useState
like below
import React, { useState, useMemo } from "react";
then simply call  expensiveTask inside useMemo like below mentioned code

 const doubleValue = useMemo(()=>
       expensiveTask(num)
    ,[num]);

if we are thinking that useMemo store result of every varible then that is wrong ,it store response of only last task or variable,like if we have selected 3 then 4 then then 5 and we are expecting that usememo has allready stored value of 3 and 4 both then that is wrong ,i stotred only respnse of 4,not 3. so if we enter 3 after 5 then it recall that function so simple that if value of dependency dones change then it will not call that function and it get changed then will call that function again and store response of last one.

---------------------------------------------------------------------------------------------------------------------------

2.useCallback Hook?
ANS:-it is a kind of hook which memoize function reference so it doesn't get recreated every time  similar to memoization of the value in useMemo.
useCallback is useful when you pass a function down to a child component. Without useCallback, the function reference is recreated on every render, causing the child to re-render even if its props didn’t change.
when page re-renders then reference of any  function used in that component get change like if earlier reference was a then after first re-render it will will be b after third re-render it will be c and so on.
useCallback is used for two things:-

a.unnecessary re-rendering of child component
b.handling expensive operations

Expaliantion of a:-
PARENT COMPONENT CODE
import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);
const handleClick=()=>{
  setCount(count+1);
}
  return (
    <div>
      <div>
        <p>Count: {count}</p>
        <button
          onClick={handleClick}
        >
          Increment
        </button>
      </div>
      <Child buttonName="Click Me" />
    </div>
  );
}
export default Parent;

CHILD COMPONENT CODE

import React from "react";
function Child(props) {
  console.log("Child component called");
  return (
    <div>
      <h3>Child Component</h3>
      <button>
        {props.buttonName}
      </button>
    </div>
  );
}
export default Child;

so here if we increase our couter then child coponent get re-render every time and console "Child component called" on every re-render but it was unnesecerry re-rendering so for preventing this re-render we simply wrap-up child coponent in React.memo ...like below code

import React from "react";
const Child=React.memo((props) {
  console.log("Child component called");
  return (
    <div>
      <h3>Child Component</h3>
      <button>
        {props.buttonName}
      </button>
    </div>
  );
});
export default Child;

so by wrapping-up child coponent, it will stop re-rendering the child coponent because by using React.memo child coponent will re-render only when props passed in child coponent get chnaged so here Click me text is not chnaging thats why child component will not re-render but we were studing useCallback then why we came to React.memo and then what is pupose of useCallback.
So if we pass any function in child coponent from parent component then we will observe that child copoment re-rendering hapeen again.
so this happen because as we know that if  child component is wrapped up in React.memo then it re-render when props change so what happen here is that if we increase couter then parent page re-renders and if page re-render then reference of the function get chnaged ,like here we have definend handleClick for increasing couter so on incressing counter value, function reference of handleClick stored in different variable so this  function is passed as props so fucntion get chnaged every time so props is also get changed so due to pros chnage React.memo re-renders child compoent.
so to overcome this issue when we have pass any function as a props we basically freeze that function by wrapping-up in useCallback hook  and then pass dependency and it will not create new function reference for calling function on re-render,it simply store on same refence,like here count is dependency in parent compoent. like below code.if we dont pass depedency like count here then it will simply freeze the function because it will run only once and due to that it will take 0 count value and then increase that by 1 every time and will only 1 for every click for count increament.so simply we pass dependecy and if dependency varible changes then simply it will re-create function every time and child coponenet get re-renders so to avoid this we have to use setCount(pre=>pre+1) rather than setCount(count+1) and then we dont need to pass count as dependency as it will re-create function.concept for dependency in the beginning was bit wrong and this is correct so passing dependency will simply re-create function reference bu chnaging that variable. 

import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);
const handleClick=useCallback(()=>{
  setCount(pre=>pre+1);
},[]);
  return (
    <div>
      <div>
        <p>Count: {count}</p>
        <button
          onClick={handleClick}
        >
          Increment
        </button>
      </div>
      <Child buttonName="Click Me"/>
    </div>
  );
}
export default Parent;


EXPLAINATION of  usecase b of useCallback:-
function will not re-create on every render and you can see by below example,here increment function dont need to recreate on every render when we changre value of count.

import React, { useState, useCallback } from "react";
function App() {
  const [count, setCount] = useState(0);

  // useCallback memoizes the function so it doesn't get recreated on every render
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
}

export default App;

---------------------------------------------------------------------------------------------------------------------------

3. what is Debouncer?

ANS:-Debouncing is the programming technique that limit how often function get executed.it ensures that function get executed once after certain dealay like few miliseconds since last time it was called.
when we search something on google then on every alphabet type it shows some suggection and that comes by api call.so if we type anything like js question the it call api on every alphabet call so here total api call will be 11(like j js js  js i js in.......) but this will not be good practice becuase calling api for 11 only for searching any word is not good so for resolving this issue developer thinks that if user is continuosly typing anything then dont call api and if user stop typing even for some miliseconds as well then simply call api and this concept is called as debouncing.
A debouncer is like a pause button.
It waits until you stop doing something before it runs the function.


When you call a debounced function:
1.It clears any previous timer (if any).
2.It sets a new timer to run the function after delay milliseconds.
3.If another call happens before the delay ends, the timer resets.


When you type “Apple” quickly:

Type “A” → wait 300ms? No, keep typing.
Type “p” → timer resets.
Type “p”, “l”, “e” → timer resets each time.
After typing stops for 300ms → only one API call runs.

Example: Typing in Search Box
Without debounce:
Every letter you type → sends a request.
Typing "apple" → 5 requests (a, ap, app, appl, apple).

export function app(){
  const handleChnage(e){
    console.log("api called for " +e);
  }
  return (
    <input onChange={(e)=>handleChnage(e.target.value)}/>
  )
}

With debounce (say 500ms):
It waits until you stop typing for 0.5 seconds.
Only 1 request → "apple".

most easiest debounce code mentioed below

import React,{useEffect,useState} from 'react';
function App(){
  const [val,setVal]=useState();
  useEffect(()=>{
    if(val){
      const timer=setTimeout(()=>{
        console.log("api called occur for: "+val);
      },5000);
    }
    return ()=>{clearTimeout(timer)};
  },[val]);
  return (
    <>
      <input type='text' placeholder='type something' onChange={(e)=>{setValue(e.target.value)}}/>
    </>
  )
}
export default App;

in above code,clearTimeout works as debounce,firstly when val chnaged then useEffect runs and due to that consoleing something will occur after 5 milisecond and same useEffect return a function of clearing thats timer so when next time val get chnaged then simply useEffect again runs and in that case function returned by previous useEffect will run first then other function of same useEffect and this done with the help of closure,funcion returned get stored in closure and in second useeffect, function returned by previous useEffect run first and then new timer will be created.

debounce syntax is below but is it not predefined, it is user defined function so If you use a library like lodash → it already has a ready-made debounce function you can import and use.

function debounce(function to which we want some delay,delay time);

below  is the whole code for debounce for searching anything

import React, { useState, useEffect } from "react";
function  funDebounce(value,delay){
  const[debounceText,setDebounceText]=useState(value);
  useEffect(()=>{
     const handle=setTimeout(()=>{
      setDebounceText(value);
     },delay);
        return () => {
      clearTimeout(handler);
    };
  },[value,delay]);
  return debounceText;
}
const debounce=()=>{
  const[text,setText]=useState("");
const TextDebounce=funDebounce(text,5000);
  useEffect(()=>{
    console.log("searching for"+ TextDebounce);
    <!-- here we wil call our api -->
  },[TextDebounce]);
return (
  <input type='text' onChange={(e)=>setText(e.target.value)} value={text} placehoder='please search anything'>
)
}
export default debounce;
---------------------------------------------------------------------------------------------------------------------------
4. useContext hook?
ANS:-it is a kind of hook which is used to sent data from parent compoent to its child most component without passing to the all child component which comes in between parent to child most component.
useContext is used to overcome prop drilling problem so prop drilling simply mean data will be going on all the child coponents same as drill(pechkas).

whole process of useCotext would be in 3 steps-
1.create context
2.provide
3.consume

parent-->Child1-->child2-->child3-->child4(child most)
  |_ _ _ _ _ _ __ _ _ _ _  _ __ _ _ _ _|
parent to child most direct data transfer without passing to other child components
 here parent will provide context and then any child component which want to take that data of parent will become consumer and consume that data

 parent- context provider
 child4(child most)-context consumer

 Simple step for useContext
 FIRST:- create useContext,we can create it as many as we want.....like   
 const UserContext=createContext();
 SECOND:- wrap all the childs inside the provider which wants to become consumer and then pass the value that we want to pass
 like.....
const [user,setUser]=useState({name:"shreya"});
 <UserContext.Provider value={user}> 
    <Child/>
 </UserContext.Provider> 
 if we have created more than one context then simply write code of wrapping up child into provider into another wrapping up into provider....like below
 <UserContext.Provider value={user}>
     <ThemeContext.Provider value=({theme,setTheme})> 
        <Child/>
     </ThemeContext.Provider>
 </UserContext.Provider>
 dont forget to export that created context like here export {UserContext}; 
 we can pass many data as i want like value={{user,setUser}}
 then export that in consumer like 
 const {user,setUser}=useContext(UserContext);
 THIRD:-consume inside the consumer
 first import that UserContext inside the required child then simply take that value with the help of useContext..like below

 import {UserContext} from 'app';
 const user =useContext(UserContext);
 <>this  is {user.name}</>


 below is the code
PARENT
 import {useState, createContext} from 'react';
 import Child1 from 'child';
 const UserContext=createContext();
 function parent(){
  const [user,setUser]=useState({name:"shreya"});
   return(
    <>
    <UserContext.Provider value={user}>
      <Child1/>
    <UserContext.Provider/>
   )
 }
 export default app; 
 export UserContex;
CHILD1
 import react from 'react';
 function Child1()
 {
return(
  <>
  <Child2/>
  </>
)
 }
 export default Child1;

CHILD2
import react from 'react';
 function Child2()
 {
return(
  <>
  <Child3/>
  </>
)
 }
 export default Child2;

 CHILD3
import react,{useContext} from 'react';
import {UserContext} from '../parent';
 function Child3(){
  const user=useContext(UserContext);
return(
  <>
  data:{use.name};
  </>
)
 }
 export default Child3;

 6.what iss vanilla js?
 ANS:- vanilla js is nothing but javScript without any framework like react js,vue.js,jQuery,Three.js

7.Why use React instead of plain JavaScript (Vanilla JS)?
Ans:- We use React instead of plain JavaScript because:
Easier UI updates (Virtual DOM)
Reusable components
Better state management
Supports SPA (no reload navigation)
Cleaner, maintainable, scalable code


8.What is a Component in React?
Ans:-A component in React is like a small, reusable building block of a user interface (UI).
Each component is independent and manages its own structure, styling, and behavior.
You can combine many components to build a complete application.
types-
a.Functional component(js function which returns JSX).
b.class component


9.what is functional componenet?
ANS:- functional component is nothing but a type of component which is similar to javascript function.it takes props as an input and return JSX.it used Hooks for variour operations like state management,navigation using react router.

10.What is class component?
ANS:-as its name includes class soit totally related to class,so class component is nothing but s class which render() method and return UI similar to functional component.

like below one is using class component
class Hello extends react.Component{
  render(){
    return <>hello {this.props.name}</>
  }
}

so class components used before Hooks.before hooks state mangement and life cycle methods could handled by only class component.
5. What is useSelector?
ANS:-useSelector is a React-Redux hook that allows you to read (access) data from the Redux store inside a React component.
---------------------------------------------------------------------------------------------------------------------------
6. two ways to install. react app?
ANS:- webpack bundler- npx create-react-app my-app
      vite bundler- npm create vite@latest my-app
---------------------------------------------------------------------------------------------------------------------------
7. difference between state and props in react?
ANS:-State is a built-in object that stores data that can change over time within a component.
Props (short for properties) are inputs passed from a parent component to a child component.
state is mutable and props is immutable.
state managed by compoent itself and props is mamanged by parent compoent.
---------------------------------------------------------------------------------------------------------------------------
8. pure and impure compoent in react?
   ANS:-
     🌿 1. Pure Component

     A Pure Component in React:
     Renders the same output for the same props and state
     Does not re-render if props/state are unchanged
     
     PARENT COMPONENT pass below data as props
     <User name="Shreya" />

     CHILD COMPONENT
     
     const User = React.memo(function User({ name }) {
     console.log("Rendered");
       return <h3>{name}</h3>;
    });

    Pure components are all about performance optimization — they skip unnecessary re-renders when input data (props/state) hasn’t changed.

    ⚡ 2. Impure Component

   An Impure Component:
   Always re-renders when its parent re-renders, even if props/state haven’t changed.
   Doesn’t do any comparison — just renders every time.

   exa.:- same example of pure function but child parent without React.memo

   function User({ name }) {
  console.log("Rendered");
  return <h3>{name}</h3>;
}


Quick Tip (Interview Answer)

“A pure component in React re-renders only when its props or state change — it avoids unnecessary re-renders using shallow comparison. An impure component re-renders every time its parent does, even if data hasn’t changed.”

| Feature                       | Pure Component                     | Impure Component               |
| ----------------------------- | ---------------------------------- | ------------------------------ |
| Re-render on same props/state | ❌ No                                ✅ Yes                          |
| Performance                   | ⚡ Faster                           | 🐢 Slower                      |
| Used for                      | Optimization                       | Regular behavior               |
| Example (Class)               | `class User extends PureComponent` | `class User extends Component` |
| Example (Functional)          | `React.memo(MyComponent)`          | `function MyComponent()`       |

---------------------------------------------------------------------------------------------------------------------------

9. Difference Between Redux and Redux Toolkit (RTK)
ANS:-Think of Redux as the old manual way
and Redux Toolkit as the new easy smart way of using Redux.

🔵 1. Redux
✔ It is a state management library
✔ Pure, original Redux
✔ Requires a lot of boilerplate code
✔ You write everything manually:
actions
action types
reducers
store configuration
immutable logic
thunk setup (middleware)
👉 More code, more chances of mistakes.

🟣 2. Redux Toolkit (RTK)

✔ It is also a library, but it is built on top of Redux
✔ Officially recommended way to use Redux
✔ Makes Redux much easier and faster
✔ Gives built-in helpers:
createSlice() → automatically makes actions + reducers
configureStore() → store setup becomes simple
createAsyncThunk() → easy async API calls
Removes 70–80% boilerplate code
👉 Less code, fewer errors, super developer-friendly.
---------------------------------------------------------------------------------------------------------------------------
10. Redux toolkit(RTK)?
ANS:-
we have  react hooks for state mamangement and that is context API with the help of useReducer hook.but for large scale data management we use redux toolkit.
it is not part of react. it is sepaearte library for managing large data. it works in data layer of our application.
redux is a state management library.it helps us to manage state of our application in a centralised store or we can say global storage instead of spreading it in many components.
state simply mean all the data used by the application.

redux is not manadatory for our application.it depends on our project size.
all the application build using redux can be build without using redux. us eit only when it required.

redux is not a library to mange state,there are are many more libraries...like zustand.
plane redux is also known as vanilla redux.
here we are going to study redux toolkit.
we are going to make item addition in our cart like swiggy zomato,flipkart etc. we can get all the information of the item by clicking on the cart so we will store all the cart information in redux.

we make slices in redux which is slice of redux store and there could be many slices. we make logical parts in redux and which is nothing but slices.so if we are goin to add cart data in the redux then we maker seperate slice for cart data. like if we are going to store ligin user info into redux then we make seperate slice for that.similarly for theme.

exa:-
-cartSlice
-useSlice
-themeSlice

if we are clicking on + button on any item then we cannt add that item or modify cartSlice direclty,there is different rule for that.
so when we click on + of any item then that dispatches (action) and that action calls a function and that function modifies cartSlice.
this called function is nothing but reducer function.

steps of writtting data into redux:--
clcking on add button for adding item----->dispatch(action)----->reducer function----->cartSlice updation

now for showing count of the added item on the top right cart icon we need to perform get(read) operation from the redux.for that we use something known as selector. then thsi selector will cart count on the cart icon. when we use selector then this phenomenon is known as subscribing to the store.
this process of updating cart is automatic process.

project is in same folder named redux-project

steps for using redux toolkit
-install @reduxjs/toolkit and react-redux
-build our store
-connect our store to our app
-slice(cartSlice)
-dispatch (action)
-reducer function
-selector for reading data

make a folder and then make store inside that folder ,like i have taken name AppStore.js then create store by below code using @reduxjs/toolkit library-

import {configureStore} from '@reduxjs/toolkit';
const AppStore=configureStore();

we add slices in () of configureStore() later.

now we will provide this store to our application.
so we need to come to main component of our project and that is app.js

and import Provider from react-readux library for providing redux to our react application by below code
import {Provider} from 'react-redux'; 

so react-redux library is used for providing redux to our application and reduxjs/toolkit is used for creation store.
then simply wrap our whole porject into Provider and for providing redux store to our application,we simply pass our Store created in redux as props inside this Provider
    <Provider store={AppStore}>
      <div>hello</div>
    </Provider>

if we dont want to provide redux to whole application then simply wrap that specific component into  Provider only.
wrapping inside Provider is same as Context api provider.

so store creation and store providing to our application stelp DONE.

now we create slice.
 this cartSlice will be created by a function named createSlice and this comes from @reduxjs/toolkit
import  {creatSlice} from '@reduxjs/toolkit';

now make structure of slice. 
name of our store.
intialState of our store which will be empty as our store has 0 item item in cart.
we will write reducer function corresponding to those actions like add items,remove item,clearing the items. we can think it as api to communicate with redux-store.

const cartSlice=creatSlice({
  name:'cart',
  initialState:{
    items:[]
  },
  reducers:{

  }
});


below one is complete cartSlice logic

import  {creatSlice} from '@reduxjs/toolkit';
const cartSlice=creatSlice({
  name:'cart',
  initialState:{
    items:[]
  },
  // we will write reducer function corresponding to those actions like add items,remove item,clearing the items. we can 
  // think it as api to communicate with redux-store.
  // here state is nothing but intial state of our store which is emplty array.
  // now it will modify our state based on the action.
  reducers:{
     addItem: (state,action)=>{
          state.items.push(action.payload);
     },
     removeItem: (state,action)=>{
        //here we have removed first top element only but i actual; we need to pass index of item to be removed.
         state.items.pop();
     },
     clearCart: (state,action)=>{
        //this will make our item array empty so we can avoid weriting action
        state.items.length=0;
     }
  }
});



now we need to export actions and reducers both by and this syntax is provided by redux toolkit so we are not allowed to modify it.

export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;

upart ka syntax isliye hai kyuki redux toolkit jo createSlice provide krta hai vo ek object return krta hai jiska format kuch aisa hota hai

{
  actions: {
    addItem,removeItem,clearItem
  },
  reducer
}


now we need to add this slice to our store so simply add that inside () of configureStore(). look in the below code.

import {configureStore} from '@reduxjs/toolkit';
import App from '../App';
import cartReducer from './CartSlice';

const AppStore=configureStore({
    reducer:{
        cart:cartReducer 
    }
});

export default AppStore;

so here reduces is whole reducer of our store and cartReducer is one of the part of that reducer. reducer is big reducer and cartReducer is small reducer.

now we will get count of all the items present in the cart from redux store and we do that with the help of selector and that is nothing but hook.
this useSelector hook is coming from react-redux library.

write below code in dsried component ,like here we want to get it in navbar becasue we are showing no og item in cart present in the navbar.
import { useSelector } from "react-redux";

then simply subscribe to the paert of the store that we need by below code,here we have subscribed to item inside the cart only. so simply get count of the items present in the store by cartItems.length
const cartItems = useSelector((store)=>store.cart.items);


now we are going to the part of adding item to the cart redux store 

so for that we simply disptach an action on button which is used for adding any item.
so simple get a dispatch from useDispatch hook which is provided by react-redux library. so useSelector hook is used for reading anf useDispatch hook is used for dispaching an action or we =can say simply for adding state(data) into redux store.

import { useDispatch } from "react-redux";
const dispatch=useDispatch();


then import all the actions created in our redux store into required component.
import {addItem,removeItem,clearCart} from './Redux/CartSlice';

then simply call required reducer function and pass data inside that function.

  const addToCart = (item) => {
   //dispatch an action by clicking on + of any item
   dispatch(addItem(item));
  };

  here item is nothing but action.payload which we wrote in cartSlice component.

  when we dispatch any a ction then in that case redux create an object and that format is like
  {
    payload:item
  }

  anf then it pas this object as second argument inside the reducer function that we have created and that is named as action there. and thats why we get sent item in redux by action.payload.

  similarly for other reducer function as well.
  

  rather than subscribing to the some part of the store like below, 
  const cartItems = useSelector((store)=>store.cart.items);

  we can subscribe whole store as well like bellow and then simply extract desired part of the store

  const store = useSelector((store)=>store);
  const cartItem=store.cart.items;

 but this is not good for big and complex project. because if we are chaning any other part of the store then that will reflect to cartItem reload because but we dont want to reload cartItem unnesserarily to miantain application performace.
 we are selecting store thats why it is named as useSelector.



























