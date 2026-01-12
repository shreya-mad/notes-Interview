1. Event Loop?
ANS:-The Event Loop is a mechanism in JavaScript that allows non-blocking, asynchronous code execution by managing the interaction between the call stack, callback queue, and microtask queue.

---------------------------------------------------------------------------------------------------------------------------

2. whats the need of callbak queue?
ANS:- The callback queue (also called the task queue or macrotask queue) is needed to store asynchronous callback functions until the call stack is empty —
so that JavaScript can continue running other code without blocking.

---------------------------------------------------------------------------------------------------------------------------

3. implement callback hell condition?
ANS:-
function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 done");
    callback("Result of step 1");
  }, 1000);
}

function step2(data, callback) {
  setTimeout(() => {
    console.log("Step 2 done with:", data);
    callback("Result of step 2");
  }, 1000);
}

function step3(data, callback) {
  setTimeout(() => {
    console.log("Step 3 done with:", data);
    callback("Res
    ult of step 3");
  }, 1000);
}

// Nested callbacks = CALLBACK HELL
step1(function(result1) {
  step2(result1, function(result2) {
    step3(result2, function(result3) {
      console.log("All steps done:", result3);
    });
  });
});


4.Above code with promise?
ANS:- function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 done");
      resolve("Result of step 1");
    }, 1000);
  });
}

function step2(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 done with:", data);
      resolve("Result of step 2");
    }, 1000);
  });
}

function step3(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3 done with:", data);
      resolve("Result of step 3");
    }, 1000);
  });
}

// Promise chaining
step1()
  .then(result1 => step2(result1))
  .then(result2 => step3(result2))
  .then(result3 => console.log("All steps done:", result3))
  .catch(error => console.error(error));

---------------------------------------------------------------------------------------------------------------------------

4. easiest promiss implementation?
ANS:-  
let promise = new Promise((resolve, reject) => {
  let isPassed = true;

  if (isPassed) {
    resolve("✅ You passed the test!");
  } else {
    reject("❌ You failed the test!");
  }
});

promise
  .then((message) => console.log(message))   // when resolved
  .catch((error) => console.log(error));     // when rejected

---------------------------------------------------------------------------------------------------------------------------

  5. above code with async/await?
  ANS:-

const promiss=new Promise((resolve,reject)=>{
    const isTrue=false;
    if(isTrue){
        resolve("this test passed!!!");
    }
    else
       reject("this test failed!!");
});
async function getData(){
    try{
        const val=await promiss;
    console.log(val);
    }catch (error) {
    console.log("Error:", error);
  }
}
getData();

---------------------------------------------------------------------------------------------------------------------------

5. implementation of Promis.All()?
ANS:- 
const p1=Promise.resolve("p1");
const p2=Promise.resolve("p2");
const p3=Promise.resolve("p3");

Promise.all([p1,p2,p3])
.then(val=>console.log(val))
.catch(val=>console.log(val))

OUTPUT:- [p1,p2,p3];
FOR HANDLING ERROR IN ANY OF ONE 

const p1=Promise.resolve("p1");
const p2=Promise.reject("there is some error in p2");
const p3=Promise.resolve("p3");

Promise.all([p1,p2,p3])
.then(val=>console.log(val))
.catch(val=>console.log(val))
 output:- there is some error in p2

---------------------------------------------------------------------------------------------------------------------------

 6. implementation of allSettled?
 Ans:-
 const p1=Promise.resolve("p1");
const p2=Promise.reject("there is some error in p2");
const p3=Promise.resolve("p3");

Promise.allSettled([p1,p2,p3])
.then(val=>console.log(val))
.catch(val=>console.log(val))

OUTPUT:-
[
  { status: 'fulfilled', value: 'p1' },
  { status: 'rejected', reason: 'there is some error in p2' },
  { status: 'fulfilled', value: 'p3' }
]

---------------------------------------------------------------------------------------------------------------------------

7. implementation of race?
ANS:-
const p1=Promise.resolve("p1");
const p2=Promise.reject("there is some error in p2");
const p3=Promise.resolve("p3");

Promise.race([p1,p2,p3])
.then(val=>console.log(val))
.catch(val=>console.log(val))

OUTPUT:-
p1

---------------------------------------------------------------------------------------------------------------------------

8. Implementation of any?
ANS:-
const p1=Promise.reject("here is some error in p1");
const p2=Promise.reject("there is some error in p2");
const p3=Promise.resolve("p3");

Promise.any([p2,p1,p3])
.then(val=>console.log(val))
.catch(val=>console.log(val))

OUTPUT:-
p3

---------------------------------------------------------------------------------------------------------------------------

9.  What are the different data types present in javascript?
Ans:-
 a.primitive:-immutable and Primitive data types can store only a single value.
 String,Number,BigInt,Boolean,Undefined,Null,Symbol

 b.non-primitive:-mutable and To store multiple and complex values, non-primitive data types are used.
Object,Array,Function,Date, Map, Set, etc.

---------------------------------------------------------------------------------------------------------------------------

10. What are the types of errors in javascript?
ANS:-There are two types of errors in javascript.

a.Syntax error: Syntax errors are mistakes or spelling problems in the code that cause the program to not execute at all or to stop running halfway through. Error messages are usually supplied as well.

b.Logical error: Reasoning mistakes occur when the syntax is proper but the logic or program is incorrect. The application executes without problems in this case. However, the output findings are inaccurate. These are sometimes more difficult to correct than syntax issues since these applications do not display error signals for logic faults.

---------------------------------------------------------------------------------------------------------------------------

11. Explain Implicit Type Coercion in javascript.
Implicit type coercion in javascript is the automatic conversion of value from one data type to another. It takes place when the operands of an expression are of different data types.

String coercion
String coercion takes place while using the ‘ + ‘ operator. When a number is added to a string, the number type is always converted to the string type.

var x = 3;
var y = "3";
x + y // Returns "33" 

---------------------------------------------------------------------------------------------------------------------------

12. Is javascript a statically typed or a dynamically typed language?
JavaScript is a dynamically typed language. In a dynamically typed language, the type of a variable is checked during run-time in contrast to a statically typed language, where the type of a variable is checked during compile-time.

---------------------------------------------------------------------------------------------------------------------------

13. What is NaN property in JavaScript?
NaN property represents the “Not-a-Number” value. It indicates a value that is not a legal number.

typeof of NaN will return a Number.

To check if a value is NaN, we use the isNaN() function,

Note- isNaN() function converts the given value to a Number type, and then equates to NaN.
isNaN("Hello")  // Returns true
isNaN(345)   // Returns false
isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
isNaN(false) // Returns false
isNaN(undefined) // Returns true

---------------------------------------------------------------------------------------------------------------------------

14. Explain passed by value and passed by reference.
In JavaScript, primitive data types are passed by value and non-primitive data types are passed by reference.

---------------------------------------------------------------------------------------------------------------------------

15.  What is an Immediately Invoked Function in JavaScript?
An Immediately Invoked Function ( known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined.

Syntax of IIFE :

(function(){ 
  // Do something;
})();

---------------------------------------------------------------------------------------------------------------------------

16. What do you mean by strict mode in javascript and characteristics of javascript strict-mode?
ANS:- Strict mode is a special mode in JavaScript that helps you write safer, cleaner, and more secure code.
It makes the language behave in a stricter way, catching mistakes that are usually ignored in normal mode.

| 🧩 Feature                                            | 🔍 Description                                                                                              |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **1. No undeclared variables**                        | You must declare variables with `let`, `const`, or `var`. <br> ❌ `x = 5;` → Error                           |
| **2. Read-only properties can’t be modified**         | Trying to change a non-writable property throws an error.                                                   |
| **3. Duplicate parameter names not allowed**          | ❌ `function test(a, a) {}` → Error                                                                          |
| **4. `this` in functions is undefined (not global)**  | In normal mode, `this` refers to the global object; in strict mode, it’s `undefined`.                       |
| **5. `delete` on variables/functions is not allowed** | ❌ `delete x;` → Error                                                                                       |
| **6. Octal literals are not allowed**                 | ❌ `let x = 010;` → Error                                                                                    |
| **7. Reserved keywords are protected**                | Future JS keywords like `implements`, `interface`, `let`, `package`, etc., can’t be used as variable names. |
| **8. Safer eval()**                                   | Variables inside `eval()` don’t leak to outside scope.                                                      |

---------------------------------------------------------------------------------------------------------------------------

14. explain “this” keyword.
The “this” keyword refers to the object that the function is a property of.
this is a special keyword that refers to the object that is currently executing the function.
In simple words:
👉 this means “who is calling the function”.
 a. In the Global Scope
    console.log(this);
    In a browser, it refers to the window object.

 b. Inside a Function (Normal Function)
    function show() {
      console.log(this);
    }
    show();
    In non–strict mode, this → global object (window).
    In strict mode, this → undefined.
 c.const person = {
    name: "Shreya",
    greet: function() {
    console.log("Hi, I’m " + this.name);
    }
    };
    person.greet(); // Hi, I’m Shreya
    Here this → refers to the person object because person is calling the function.
    

---------------------------------------------------------------------------------------------------------------------------

15. Explain call(), apply() and, bind() methods.
ANS:- Let’s break down call(), apply(), and bind() — they are all methods in JavaScript used to control the value of this when calling a function.

A.Call():-directly calls the function and passes arguments one by one.

function greet(city) {
  console.log(`Hello ${this.name} from ${city}`);
}

const user = { name: "Shreya" };

greet.call(user, "Delhi");
);


B.Apply():-directly calls the function and passes arguments one by one as an array.
 above object using Apply
 greet.apply(user, ["Mumbai"]);


C.Bind();-creates a new function to call later (doesn’t call immediately).
above object using bind()

const newGreet = greet.bind(user, "Pune");
newGreet();


| Method    | Calls immediately? | How to pass arguments | Returns      |
| --------- | ------------------ | --------------------- | ------------ |
| `call()`  | ✅ Yes              | Individually          | Result       |
| `apply()` | ✅ Yes              | As array              | Result       |
| `bind()`  | ❌ No               | Individually          | New function |

---------------------------------------------------------------------------------------------------------------------------

16. What is the difference between exec () and test () methods in javascript?
ANS:-both are regular expression in javaScript. regular expressions are pattern used to search,match or replace text in string.

test():- it checks if any percular pattern is present in string or nopt and simly return true/false.
const valSearch=/Hello/;
const ans=valSearch.test("Hello World");
console.log(ans);
OUTPUT:- true

Exec():-2.Searches a string for a match.
Returns an array of match details (if found), or null if not found.

const reg=/Hello/;
const ans=reg.exec('Hellonh World');
console.log(ans);

output:-[ 'Hello', index: 4, input: 'fgfbHellonh World', groups: undefined ]


---------------------------------------------------------------------------------------------------------------------------


17. What is currying in JavaScript?
ANS:-curring is the process of trinsforming function which taken multiple arguiment into series of function, each take one argument at a time.

function add(a){
  return function(b){
    return a+b;
  }
}
console.log(add(2,3));

---------------------------------------------------------------------------------------------------------------------------

18. What are some advantages of using External JavaScript?
ANS:-| ✅ Advantage                               | 💬 Explanation                                                                                      |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **1. Code Reusability**                   | The same `.js` file can be used across multiple web pages. No need to rewrite code again and again. |
| **2. Better Code Organization**           | Keeps HTML, CSS, and JS separate → makes code cleaner and easier to manage.                         |
| **3. Easier Maintenance**                 | You can update one `.js` file, and changes apply everywhere automatically.                          |
| **4. Faster Page Loading (with caching)** | The browser caches external `.js` files, so they don’t need to reload every time.                   |
| **5. Improved Readability**               | Keeping JavaScript separate from HTML makes both easier to read.                                    |
| **6. Collaboration Friendly**             | Multiple developers can work on the same project easily — HTML, CSS, and JS handled independently.  |


---------------------------------------------------------------------------------------------------------------------------


19. Mention some advantages of javascript.
ANS:-
a. follows server side rendering and client side rendering both.
b.we can write frontent and backend both using js.
c.it is syncronous sigle threaded language but with the help of callback function ,we can make it asyncronous.

---------------------------------------------------------------------------------------------------------------------------


20. React follows ssr or csr?
ANS:-
🔹 React = CSR by default
🔹 React can do SSR using tools like Next.js or react-dom/server

---------------------------------------------------------------------------------------------------------------------------


21. What is Object Prototype?
AnS:-
In JavaScript, every object has a hidden property called [[Prototype]],
which is a reference to another object — known as its prototype.

That prototype object can have its own properties and methods,
and your object can inherit them.

So basically:

Prototypes are the mechanism by which JavaScript objects inherit features from one another and this is also called as Prototype chaining.

const person={
  greet: function(){
    console.log("Hellow");
  }
}

const person1=Object.create(person);
person1.greet();


---------------------------------------------------------------------------------------------------------------------------


22. What is the use of a constructor function in javascript?
ANS:- A constructor function in JavaScript is a special function used to create multiple objects of the same type with similar properties and methods.

function Person(name,age,gender){
  this.name = name;
  this.age = age; 
  this.gender = gender;
}


var person1 = new Person("Vivek", 76, "male");
console.log(person1);

var person2 = new Person("Courtney", 34, "female");
console.log(person2);

---------------------------------------------------------------------------------------------------------------------------


23. Which method is used to retrieve a character from a certain index?
ANS:- The charAt() function of the JavaScript string finds a char element at the supplied index. The index number begins at 0 and continues up to n-1, Here n is the string length. The index value must be positive, higher than, or the same as the string length.

---------------------------------------------------------------------------------------------------------------------------


24. What do you mean by BOM?
Ans:-It allows JavaScript to interact with the browser window (not the web page itself — that’s the DOM). The BOM provides objects that let you control things like browser history, location, screen size, alerts, etc.

| Object                             | Description                                                                               |
| ---------------------------------- | ----------------------------------------------------------------------------------------- |
| `window`                           | The top-level object representing the browser window. All BOM objects are its properties. |
| `navigator`                        | Gives info about the browser (e.g., name, version, online/offline).                       |
| `screen`                           | Gives info about the user's screen (e.g., width, height, color depth).                    |
| `location`                         | Gives info about the current URL and allows redirection.                                  |
| `history`                          | Allows access to the browser’s history (back, forward, etc.).                             |
| `alert()`, `confirm()`, `prompt()` | Window methods to show popups.                                                            |


---------------------------------------------------------------------------------------------------------------------------


25. what is destructing assingment?
ANs:- it is a  kind of syntax which  introduced in ES6 and  used to unpack the elements of array and method of the object.
cons val=[2,33,43];
const{a,b,c}=val;
console.log(a);
console.log(b);
console.log(c);
OUTPUT:- 
2
33
43

const person={
  name:"shreya",
  greet:function(){
    console.log("this is shreya");
  }
};

const{name}=person;
console.log(name);

---------------------------------------------------------------------------------------------------------------------------


25. Spread and rest operator?
ANS:-

Spread → expands values
Rest → collects values

Think of ... like this 👇

Spread: “Open this box and spread everything out”

Rest: “Put everything into one box”
Rest operator:-
it is a kind of operator which is denoted by three dot(...) and it is used to collects the varible number of arguments into array.
function add(...val){
  return val.reduce((acc,curr)=>acc+curr,0);
};
console.log(add(1,2,4,2,2,13,4,23,2));
console.log(add(1,2,4,2,3,,3,3,33,5,5,48,23423,23423,23,2,13,4,23,2));

Spread operator:-
it a kind of operator which introduced in ES6 and used for expanding array into individual elements.
function add(a,b,c,d,e){
    return a+b+c+d+e;
}
const arr=[1,3,2,3,2];
console.log(add(...arr));  


---------------------------------------------------------------------------------------------------------------------------


26. Difference berween json.stringify and json.parse?
Ans:- 
🧩 1. JSON.stringify():-
✅ Converts a JavaScript object → into a JSON string

Example:
    const obj = { name: "Shreya", age: 22 };
    const jsonString = JSON.stringify(obj);
    console.log(jsonString);

    // Output: '{"name":"Shreya","age":22}'

🧩 2. JSON.parse()
✅ Converts a JSON string → back into a JavaScript object

Example:
const jsonString = '{"name":"Shreya","age":22}';
const obj = JSON.parse(jsonString);
console.log(obj.name); 
// Output: Shreya  

---------------------------------------------------------------------------------------------------------------------------


27. what is deep and shallow copy ?
ANS:-In JavaScript, objects and arrays are reference types — they are stored by reference, not by value.
let obj1 = { name: "Shreya" };
let obj2 = obj1;
Here, obj2 does not get a new copy of the object — it points to the same memory location as obj1.

🪞 1. Shallow Copy

A shallow copy means:
👉 Only the first level of the object or array is copied.
👉 Nested objects or arrays are still shared (not copied).

const person={
    name:"Shreya",
    address:{
        city:"Bahraich",
        pin:201855
    }
};
const copyPerson={...person};
copyPerson.name="XYZ";
copyPerson.address.city="Noida";
console.log(person.name);
console.log(person.address.city);
 OUPUT:- Shreya
         Noida


🧩 2. Deep Copy

A deep copy means:
👉 All levels of the object (including nested ones) are completely cloned.
👉 The new object is independent — changes in one do not affect the other.

const person={
    name:"Shreya",
    address:{
        city:"Bahraich",
        pin:201855
    }
};
const copyPerson=JSON.parse(JSON.stringify(person));
copyPerson.name="Rekha";
copyPerson.address.city="Noida";
console.log(person);
console.log(copyPerson);

OUTPUT:-
{ name: 'Shreya', address: { city: 'Bahraich', pin: 201855 } }
{ name: 'Rekha', address: { city: 'Noida', pin: 201855 } }

---------------------------------------------------------------------------------------------------------------------------


28. what is pure and impure function in js?
ANS:- 
    PURE FUNCTION:-
    A pure function is one that:
    Always gives the same output for the same input
    Does not cause any side effects (like changing a global variable, DOM, file, etc.)

    exa:-
    function add(a, b) {
  return a + b;
}
add(2, 3); // always 5
add(2, 3); // always 5

    IMPURE FUNCTION:-
    An impure function either:
    which returns different value for same input value.
    Modifies something outside itself (has side effects)
    Depends on external data that can change
    Gives different outputs for the same inputs

    exa:-
    let total=0;
    function sum(num){
      return total+num;
    }
    sum(4);  // 4
    sum(4);  // 8

    return 4 for first call and 8 for second call

    function getRandomNumber(num) {
         return Math.random() * num;
    }
   getRandomNumber(2);
   getRandomNumber(2);

   will give unpredictable number on every call


---------------------------------------------------------------------------------------------------------------------------


   
29. How to know that data is fetched in promise?
Ans:- → When the .then() callback runs,
      it means the Promise is resolved → data is fetched ✅

      const pr=new Promise((resolve,reject)=>{
        resolve("promise resolved successfully");
      });
      pr.then((msg)=>{
        console.log("data from promiss fetched succefully");
        console.log(msg);
      })


---------------------------------------------------------------------------------------------------------------------------


30. splice and slice difference?
ANS:-
🟦 1. slice() → DOES NOT change original array
➤ Copy nikalta hai
➤ Original array same rehta hai
Use when you want a portion of array without modifying the original.    
arr.slice(startIndex,endIndex)...here end is exlusive
arr=[1,4,2,22,4,5,3,266];
temp=arr.slice(2,5);  //[2,22,4];

🟦 1. splice() → Changes the original array
➤ Add, remove, replace sab karta hai
➤ Original array ko modify karta hai

array.splice(start, deleteCount, item1, item2, ...);

remove
arr=[1,3,22,5,644,3,2,554,453];
for removing
arr.splice(1,3);  //[1,644,3,2,554,453];
for adding
arr.splice(1,0,7,8,6);  //[1,7,8,9,644,3,2,554,453];
for replacing
arr.splice(1,3,8888);   //[1,8888,644,3,2,554,453];


---------------------------------------------------------------------------------------------------------------------------

31. What is JavaScript?
ANS:-
JavaScript is a programming language used to make web pages interactive and dynamic.
It allows us to add behavior like clicking buttons, form validation, animations, and live data updates on a website.

🔹 Easy Explanation (in simple words)

HTML = structure (text, buttons, images)

CSS = design (colors, layout, styles)

JavaScript = action / logic (what happens when you click, type, or load a page)

Without JavaScript, websites would be static (only text and images, no interaction).

🔹 What JavaScript can do

Handle user actions (click, scroll, type)

Validate forms (email, password, required fields)

Update content without reloading the page

Work with APIs (fetch data from backend)

Build full applications (using React, Node.js, etc.)

JavaScript is a client-side language (runs in the browser)

It can also run on the server using Node.js

It is lightweight, fast, and widely used

Supported by all modern browsers

---------------------------------------------------------------------------------------------------------------------------

32. What are arrow functions?
ANS:-
Arrow functions are a shorter and cleaner way to write functions in JavaScript.
They were introduced in ES6 and help make the code more readable.

---------------------------------------------------------------------------------------------------------------------------

33. What are template literals?
ANS:-it is modern way(itroduced in ES6) of creating an string. we can create dynmic string with the help of tempelate literal.
Writing HTML in JavaScript,like:-

const user = "Admin";
const role = "Developer";
const info = `<div>
  <h1>${user}</h1>
  <p>Role: ${role}</p>
</div>`;


---------------------------------------------------------------------------------------------------------------------------

34. What is the difference between undefined and null?
ANS:- 
undefined means a variable has been declared but no value is assigned.
null means a variable is intentionally assigned an empty value.

let a;
console.log(a); // undefined

let b = null;
console.log(b); // null

---------------------------------------------------------------------------------------------------------------------------

35. What are higher-order functions?
ANS:- Higher-order functions are functions that either take another function as an argument or return a function as a result.

🔹 Easy Explanation (simple words)

In JavaScript, functions are treated like values.
So a function can:

a. be passed to another function, or

function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

calculate(5, 3, add); // 8


b. be returned from another function

function greet(message) {
  return function (name) {
    return `${message} ${name}`;
  };
}

const sayHello = greet("Hello");
sayHello("Shreya"); // Hello Shreya


If a function does any one of these, it is called a higher-order function.

👉 Function that works with another function = Higher-order function

---------------------------------------------------------------------------------------------------------------------------

36. What is event bubbling and capturing?
ANS:- 
Event bubbling and event capturing define the order in which an event travels through the DOM when an element is interacted with.
When you click a child element inside a parent element, the event doesn’t stay on just one element.
It travels through elements in two phases:

Capturing → Parent ➝ Child (top to bottom)
Bubbling → Child ➝ Parent (bottom to top)

🔹 1️⃣ Event Bubbling (Default behavior)

Event bubbling means the event starts from the target element and moves upward to its parent elements.
parent.addEventListener("click", () => {
  console.log("Parent clicked");
});

child.addEventListener("click", () => {
  console.log("Child clicked");
});

Output when child is clicked:-
Child clicked
Parent clicked

🔹 2️⃣ Event Capturing (Trickling phase)

Event capturing means the event starts from the outermost parent and moves down to the target element.
parent.addEventListener("click", () => {
  console.log("Parent clicked");
}, true);

child.addEventListener("click", () => {
  console.log("Child clicked");
}, true);

Output when child is clicked:-
Parent clicked
Child clicked

👉 By default, JavaScript uses bubbling.

🔹 Stopping Event Propagation
    event.stopPropagation();

⭐ One-line interview answer

Event bubbling is when an event propagates from child to parent, while event capturing is when it propagates from parent to child.


| Feature             | Bubbling       | Capturing      |
| ------------------- | -------------- | -------------- |
| Direction           | Child → Parent | Parent → Child |
| Default             | ✅ Yes          | ❌ No           |
| Used in projects    | ✅ Very common  | ❌ Rare         |
| Supports delegation | ✅ Yes          | ❌ No           |
| Performance         | ✅ Better       | ❌ Less useful  |

---------------------------------------------------------------------------------------------------------------------------

37. What is async/await?
ANS:- combination of is used for handling asyncronous operation.
How It Works
async → makes a function return a Promise
await → pauses the function until the Promise is resolved or rejected

---------------------------------------------------------------------------------------------------------------------------

38. Difference between map(), forEach(), filter()?
ANS:- 
map() → change every item and get a new array
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
// [2, 4, 6]

forEach() → just loop and do something (no return)
const nums = [1, 2, 3];
nums.forEach(n => {
  console.log(n * 2);
});

filter() → select some items and get a new array 
const nums = [1, 2, 3, 4];
const even = nums.filter(n => n % 2 === 0);
// [2, 4]

---------------------------------------------------------------------------------------------------------------------------

39. What is an IIFE (Immediately Invoked Function Expression)?
ANS:-
An IIFE is a function that is executed immediately after it is defined.
Normally, we define a function first and call it later.
With an IIFE, we define and run the function at the same time.

IIFE with Parameters
(function (name) {
  console.log(`Hello ${name}`);
})("Shreya");

✅ Why do we need IIFE if we already have normal functions?
We need IIFE to execute code immediately and to create a private scope, which a normal function does not provide by default.
An IIFE:

Runs immediately
Creates its own private scope
Prevents variables from leaking into global scope.

🔹 Problem with Normal Function ❌
function test() {
  var x = 10;
}
test();
console.log(x); // ❌ undefined or error (but var can still pollute scope in some cases)
With var, variables can still cause global pollution in older code.

🔹 How IIFE Solves This ✅
(function () {
  var x = 10;
  console.log(x);
})();
✔ x is completely private
✔ No global pollution
✔ Runs immediately

🔹 Key Reasons Why IIFE Is Needed ⭐
1️⃣ Immediate Execution
You don’t need to call it separately.
(function () {
  console.log("Runs once");
})();

2️⃣ Avoid Global Namespace Pollution

---------------------------------------------------------------------------------------------------------------------------

40. What is lexical scoping?
ANS:- “Lexical” means location in code.
Lexical scoping means a function can use variables that are written outside it, and this access is decided by where the function is written in the code.


---------------------------------------------------------------------------------------------------------------------------

41. What is the difference between stack and heap?
ANS:-
Stack and Heap are two different memory areas used by JavaScript to store data.
Stack stores simple and fixed-size data
Heap stores complex and dynamic data

Stack stores primitive values and function calls, while Heap stores objects and reference types.
Stack = value, Heap = reference

---------------------------------------------------------------------------------------------------------------------------

42.  How to clone an object in JavaScript?
ANS:-
it is done in two ways:-
shallow copy and deep copy.

---------------------------------------------------------------------------------------------------------------------------

43. What is event delegation in JavaScript?
ANS:-
Event delegation is a technique where we attach a single event listener to a parent element instead of adding listeners to multiple child elements.
Instead of adding click events to every child, we add one event to the parent
and detect which child was clicked.

WIthout Delegation

function List() {
  return (
    <ul>
      <li onClick={() => alert("Item 1")}>Item 1</li>
      <li onClick={() => alert("Item 2")}>Item 2</li>
      <li onClick={() => alert("Item 3")}>Item 3</li>
    </ul>
  );
}


With Delegation

function List() {
  const handleClick = (e) => {
    if (e.target.tagName === "LI") {
      alert(e.target.innerText);
    }
  };

  return (
    <ul onClick={handleClick}>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  );
}

Why Event Delegation Is Important ⭐

1️⃣ Better Performance
Fewer event listeners
Less memory usage

2️⃣ Handles Dynamic Elements
New child elements work automatically

3️⃣ Cleaner Code
Easy to manage and scale


---------------------------------------------------------------------------------------------------------------------------

44. ✅ What is a Promise Chain?
ANS:- A promise chain is a sequence of .then() calls where the result of one promise is passed to the next promise.
It is used to run multiple asynchronous operations one after another.
A promise chain is a sequence of .then() calls where each promise waits for the previous one to resolve.

---------------------------------------------------------------------------------------------------------------------------

45. What is optional chaining (?.)?
ANS:- Normally, if you try to access a property that doesn’t exist, JavaScript throws an error ❌
Optional chaining stops the error and returns undefined instead.

🔹 Without Optional Chaining ❌
const data = {};
console.log(data.user.address.city); // ❌ Error

🔹 With Optional Chaining ✅
const data = {
  user: {
    address: {
      city: "Delhi"
    }
  }
};
console.log(data.user?.address?.city); // Delhi


---------------------------------------------------------------------------------------------------------------------------

46. What is nullish coalescing (??)?
ANS:- Nullish coalescing (??) is an operator that returns a default value only when the left side is null or undefined.

null ?? "default"        // "default"
undefined ?? "default"   // "default"
false ?? true            // false
"" ?? "text"             // ""

const username = user.name ?? "Guest";

---------------------------------------------------------------------------------------------------------------------------

47. What is a thunk?
ANS:- A thunk is a function that wraps an operation so it can be executed later instead of immediately.

Normally:
Code runs immediately

With a thunk:
Code is put inside a function
That function is called later
👉 Thunk = delay the execution

const add = (a, b) => a + b;   // runs immediately
const addThunk = () => add(2, 3); // thunk

You can call any function later instead thunk but
We create a thunk only when someone else needs to decide when to call it.
Redux needs thunks because Redux decides when to execute your code, not you.

You can’t write:
dispatch(fetchData()); // ❌ runs immediately

You must write:
dispatch(fetchData); // ✅ Redux calls it later

We create thunks when execution timing is controlled by another system, not by our own code.



---------------------------------------------------------------------------------------------------------------------------

48. Difference between for...of and for...in?
ANS:- for...of is used to loop over values, while for...in is used to loop over keys (property names).

for...of → gives value
for...in → gives key / index

🔹 1️⃣ for...of (Values)
Used mainly with arrays, strings, maps, sets.
const arr = [10, 20, 30];
for (let value of arr) {
  console.log(value);
}
Output: 10 20 30

🔹 2️⃣ for...in (Keys / Indexes)
Used mainly with objects.
const obj = { a: 1, b: 2 };
for (let key in obj) {
  console.log(key, obj[key]);
}
Output:
a 1
b 2

---------------------------------------------------------------------------------------------------------------------------

49. What is Debouncing and Throttling?
Both debouncing and throttling are techniques used to control how often a function is executed, especially for frequent events like scroll, resize, and input typing.

Easy Explanation (simple words)
Debouncing → Run only after the user stops
Throttling → Run at fixed time intervals
Debouncing ensures a function runs only after a certain time has passed since the last event.
Throttling ensures a function runs at most once in a specified time interval.


| Feature   | Debouncing              | Throttling               |
| --------- | ----------------------- | ------------------------ |
| Execution | After delay             | At fixed interval        |
| Trigger   | After user stops        | While user continues     |
| Best for  | Search input, auto-save | Scroll, resize           |
| API calls | Minimal                 | Controlled               |
| Runs      | Once                    | Multiple times (limited) |


---------------------------------------------------------------------------------------------------------------------------

50. What are data attributes in HTML/JS?
ANS:- Data attributes are custom attributes in HTML used to store extra information directly on elements, which can be accessed using JavaScript.

<button data-id="101" data-user="Shreya">
  Click Me
</button>

const btn = document.querySelector("button");
console.log(btn.dataset.id);     // "101"
console.log(btn.dataset.user);   // "Shreya"


---------------------------------------------------------------------------------------------------------------------------

51. What are the different types of errors in JS?
ANS:- Syntax → writing mistake
Runtime → execution problem
Logical → wrong output
Built-in error objects exist
Errors can be handled using try...catch
JavaScript errors are mainly Syntax errors, Runtime errors, and Logical errors.

---------------------------------------------------------------------------------------------------------------------------

52. What is a generator function?
ANS:-
A generator function is a special function in JavaScript that can pause its execution and resume later, returning values one by one instead of all at once.

🔹 Super-easy explanation (plain words)
Normal function → runs once → returns one value → finishes
Generator function → stops, resumes, stops again → gives values step-by-step
👉 It works like a pause–play function ⏯️
it uses  yield keyword to return  one at a time. it Uses yield instead of return.

function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}
🔹 How it works

const gen = numbers();
gen.next(); // { value: 1, done: false }
gen.next(); // { value: 2, done: false }
gen.next(); // { value: 3, done: false }
gen.next(); // { value: undefined, done: true }
yield → pauses the function
next() → resumes from where it stopped


| Normal Function | Generator Function |
| --------------- | ------------------ |
| Runs once       | Runs in steps      |
| Uses `return`   | Uses `yield`       |
| One value       | Multiple values    |
| No pause        | Can pause & resume |


---------------------------------------------------------------------------------------------------------------------------

53. real life Example of closure?
ANS:- 
1. Button Click Counter (Frontend)
🧠 Real life
Every time you click a button for liking any post on insta,utube,facebook
Count increases
Count is not reset
💻 Code
function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const clickCounter = createCounter();
clickCounter(); // 1
clickCounter(); // 2
clickCounter(); // 3

2.Login System (Real App Example)
🧠 Real life
You log in once
App remembers you
You don’t enter password again on every page
💻 Code (JavaScript)
function login(username) {
  return function checkUser() {
    console.log("Welcome " + username);
  };
}
const userSession = login("Shreya");
userSession(); // Welcome Shreya

➡️ checkUser() remembers username
➡️ This is closure used for session handling

3. Shopping Cart (E-commerce)
🧠 Real life
Add items
Cart remembers previous items
Cart total updates
💻 Code
function cart() {
  let total = 0;
  return function add(price) {
    total += price;
    console.log("Total:", total);
  };
}
const myCart = cart();
myCart(500); // Total: 500
myCart(300); // Total: 800
➡️ This is how cart state is preserved

4. API Rate Limiter (Backend Concept)
🧠 Real life
App allows 5 requests per minute
After limit → block
💻 Code
function rateLimiter(limit) {
  let count = 0;

  return function () {
    if (count < limit) {
      count++;
      console.log("Request allowed", count);
    } else {
      console.log("Limit exceeded");
    }
  };
}
const apiCall = rateLimiter(3);
apiCall();
apiCall();
apiCall();
apiCall(); // Limit exceeded

➡️ Closure stores request count
➡️ Used in Node.js backend

5. setTimeout with Closure (Very Common Interview)
🧠 Real life
Message sent after delay
Uses old data
💻 Code
function delayedMessage(msg) {
  setTimeout(function () {
    console.log(msg);
  }, 2000);
}
delayedMessage("Hello after 2 sec");

6. login limit set,if that is more than 3 time then we block that user for 12hr or 24hr
7. bank balance s

---------------------------------------------------------------------------------------------------------------------------

54. what is query selector?
ANS:- querySelector is a JavaScript method used to select the first HTML element that matches a given CSS selector.

Select by ID
const box = document.querySelector("#box");

Select by class
const item = document.querySelector(".item");

Select by tag
const heading = document.querySelector("h1");

Nested selector
const btn = document.querySelector(".card button");


---------------------------------------------------------------------------------------------------------------------------

55. how useEffect works?
ANS:- useEffect is a React Hook that lets you run side-effect code after a component renders.
Side effects include API calls, subscriptions, timers, and DOM updates.

How It Works

Component renders
React updates the DOM
useEffect runs
If dependencies change → effect runs again
Cleanup runs before next effect (if provided)

3 Most Important Cases (Interview GOLD ⭐)
1️⃣ Run once (on mount)
useEffect(() => {
  console.log("Component mounted");
}, []);


✔ Runs only once
✔ Used for API calls

2️⃣ Run on dependency change
useEffect(() => {
  console.log("count changed");
}, [count]);


✔ Runs when count changes

3️⃣ Run on every render (not recommended)
useEffect(() => {
  console.log("Runs every time");
});

🔹 Cleanup Function (Very Important ⭐)
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);



A cleanup function runs ONLY for the same useEffect before that effect runs again or when the component unmounts.
It does NOT run because some other useEffect runs.

🔹 Important rule (MOST IMPORTANT ⭐)

Each useEffect manages its own cleanup.
One useEffect has NOTHING to do with another useEffect.

WHAT HAPPEN WHEN WE WANT TO USE MORE THAN ONE USEEFFECT
useEffect hooks run asynchronously after render, and when multiple effects exist, React executes them sequentially in the order they are defined.

---------------------------------------------------------------------------------------------------------------------------

56. Difference between useEffect and useLayoutEffect
ANS:- Both hooks are used for side effects in React.
useEffect runs after the browser Shows  UI, while useLayoutEffect runs before the browser shows the UI.

useLayoutEffect is used for calculating DOM size.

Easy Explanation (no jargon)

useEffect
👉 UI is shown first
👉 Then your effect runs
👉 Non-blocking, smooth UI

useLayoutEffect
👉 Effect runs before UI is shown
👉 UI waits for it
👉 Can block rendering

🔹 Rendering Timeline (Very Important ⭐)
useEffect
Render → DOM updated → Browser paints → useEffect runs

useLayoutEffect
Render → DOM updated → useLayoutEffect runs → Browser paints

Render does NOT mean showing UI.
Render means “preparing what the UI should look like.”
Render means React calculates the UI and creates a virtual description of it.


---------------------------------------------------------------------------------------------------------------------------

57. what is the prmblem of over memory cunsumption in case of closre because not clearing that variable in closure.
ANS:- Over memory consumption means the application is using more memory than needed.
This leads to several serious problems.

🔹 1️⃣ Application Becomes Slow 🐌
🔹 2️⃣ UI Freezing / Lag (Very Common in JS & React) ❄️
🔹 3️⃣ Application Crash 💥
🔹 4️⃣ Increased Load Time ⏳
🔹 5️⃣ Battery Drain (Mobile Devices) 🔋
🔹 6️⃣ Browser “Page Unresponsive” Warning ⚠️
🔹 7️⃣ Server Cost Increase (Backend / Node.js) 💰

Over memory consumption leads to slow performance, UI freezes, application crashes, and poor user experience.

---------------------------------------------------------------------------------------------------------------------------

58. ES6 features?
ANS:-ES6 is the 2015 version of JavaScript that added modern features for writing cleaner and more efficient code.
1️⃣ let and const
2️⃣ Arrow Functions (=>)
3️⃣ Template Literals
4️⃣ Destructuring
5️⃣ Spread & Rest Operator (...)
6️⃣ Promises
7️⃣ Modules (import / export)

---------------------------------------------------------------------------------------------------------------------------

59. What is a Cron Job?
ANS:-A cron job is a time-based scheduler used to run tasks automatically at fixed times or intervals.
In Node.js, cron jobs are usually handled using libraries like node-cron

---------------------------------------------------------------------------------------------------------------------------

60. What is a Bundler?
A bundler is a tool that combines multiple files (JavaScript, CSS, images, etc.) into one or more optimized files so the browser can load the application efficiently.
A bundler combines and optimizes multiple project files into a small number of files for faster loading in the browser.
Bundler packs everything together for the browser.

---------------------------------------------------------------------------------------------------------------------------

61. What is the new keyword in JS?
ANS:- The new keyword is used to create a new object from a constructor function or a class.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person("Shreya", 22);

---------------------------------------------------------------------------------------------------------------------------

62.  What are template engines?
ANS:- Template engines are tools that help us generate dynamic HTML by combining static templates with data.

Template
<h1>Hello {{name}}</h1>

Data
{ name: "Shreya" }

Output HTML
<h1>Hello Shreya</h1>


---------------------------------------------------------------------------------------------------------------------------

63. Difference between innerHTML and textContent?
ANS:-innerHTML reads or writes HTML content, while textContent reads or writes only plain text.

innerHTML
const div = document.getElementById("box");
div.innerHTML = "<b>Hello</b>";
Result on page:
👉 Hello (bold)

textContent
js
Copy code
div.textContent = "<b>Hello</b>";
Result on page:
👉 <b>Hello</b> (shown as text)

---------------------------------------------------------------------------------------------------------------------------

64.  What is Object.freeze()?
ANS:-Object.freeze() is a JavaScript method that makes an object completely immutable, meaning you cannot add, delete, or change its properties.
Object.freeze() prevents any modification to an object’s properties.

const user = {
  name: "Shreya",
  age: 22
};

Object.freeze(user);

user.age = 25;      // ❌ Not allowed
user.city = "Delhi"; // ❌ Not allowed
delete user.name;  // ❌ Not allowed

console.log(user);
// { name: "Shreya", age: 22 }


---------------------------------------------------------------------------------------------------------------------------

65.  What is a Symbol?
ANS:- A Symbol is a unique and immutable primitive value used as an object property key.

const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2); // false

Symbol as Object Key (Main use ⭐)

const user = {
  name: "Shreya",
  [Symbol("id")]: 101
};


const obj = {};
obj.id = 1;
obj.id = 2; // overwritten ❌


---------------------------------------------------------------------------------------------------------------------------

66. What are Rest Parameters?
ANS:-
Rest parameters allow a function to accept any number of arguments and store them in an array.

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}
sum(1, 2, 3, 4); // 10


---------------------------------------------------------------------------------------------------------------------------

67. What is typeof null?
ANS:-
typeof null returns "object" — this is a well-known bug in JavaScript.

---------------------------------------------------------------------------------------------------------------------------

68. What are falsy values?
ANS:- In JavaScript, falsy values are values that are treated as false when evaluated in a boolean context (like inside an if condition).

✅ List of falsy values

false
0 (number zero)
-0
0n (BigInt zero)
"" (empty string)
null
undefined
NaN

---------------------------------------------------------------------------------------------------------------------------

69. How to check if a variable is an array?
ANS:- with the help of Array.isArray(value);

let a = [1, 2, 3];
let b = { x: 1 };
let c = "hello";
Array.isArray(a); // true
Array.isArray(b); // false
Array.isArray(c); // false


---------------------------------------------------------------------------------------------------------------------------

70.  What is a tagged template literal?
ANS:- A tagged template literal allows a function to process a template literal by receiving the static strings and dynamic values as arguments.

function tag(strings, value) {
  console.log(strings);
  console.log(value);
}
let name = "Shreya";
tag`Hello ${name}!`;

Output:
["Hello ", "!"]
"Shreya"

---------------------------------------------------------------------------------------------------------------------------

71.  How do you compare objects and array in JS?
ANS:- objects are not compared by value, they’re compared by reference.Even though they look the same, they’re stored in different memory locations.

do it with with lodash as below or simply write manually 
const a = { x: 1 };
const b = { x: 1 };
_.isEqual(a, b);


MANUAL

Shallow comparison (most common)

const a = { x: 1 };
const b = { x: 1 };
function shallowEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  return keys1.every(key => obj1[key] === obj2[key]);
}

shallowEqual(a, b); // true ✅


---------------------------------------------------------------------------------------------------------------------------

72.  Difference between == and Object.is()?
ANS:- == compares values after type coercion.
0 == "0"        // true
null == undefined // true
false == 0      // true

Object.is() (SameValue comparison)
Object.is() compares values using strict, predictable rules.
Object.is(5, 5);        // true
Object.is("a", "a");    // true
Object.is({}, {});      // false


Why Object.is() exists

JavaScript already had:

== → too loose
=== → almost perfect
But === still fails in 2 cases:
NaN === NaN      // false ❌
+0 === -0        // true ❌


👉 Object.is() fixes both.

Object.is() is like === but more accurate

---------------------------------------------------------------------------------------------------------------------------

73. What are optional parameters?
ANS:- Optional parameters in JavaScript are function parameters that do not require a value when the function is called.
👉 If an argument is not passed, the parameter becomes undefined (unless a default value is provided).

function greet(name, message) {
  console.log(name, message);
}

greet("Shreya"); 
// name = "Shreya"
// message = undefined


---------------------------------------------------------------------------------------------------------------------------

74. How to convert a string to number?
ANS:- 
| Method         | Handles decimals | Strict | Stops at text |
| -------------- | ---------------- | ------ | ------------- |
| `Number()`     | ✅                | ✅      | ❌             |
| `parseInt()`   | ❌                | ❌      | ✅             |
| `parseFloat()` | ✅                | ❌      | ✅             |
| `+`            | ✅                | ✅      | ❌             |


---------------------------------------------------------------------------------------------------------------------------

75. What is the instanceof operator?
ANS:- The instanceof operator in JavaScript is used to check whether an object is an instance of a specific constructor or class.

function Person(name) {
  this.name = name;
}

const p = new Person("Shreya");

p instanceof Person; // true
p instanceof Object; // true

---------------------------------------------------------------------------------------------------------------------------

76. What is destructuring with aliasing?
ANS:- Destructuring with aliasing in JavaScript means extracting values from objects or arrays and assigning them to variables with different names.

const user = {
  name: "Shreya",
  age: 22
};

const { name: userName, age: userAge } = user;

console.log(userName); // Shreya
console.log(userAge);  // 22


---------------------------------------------------------------------------------------------------------------------------

77. How to flatten an array?
ANS:- 
const arr = [1, [2, [3, 4]], 5];

arr.flat();      // [1, 2, [3, 4]]
arr.flat(2);     // [1, 2, 3, 4, 5]
arr.flat(Infinity); // fully flat


---------------------------------------------------------------------------------------------------------------------------

78. What is dynamic typing?
ANS:- it is nothing but dynamically typed.like js is dynamically typed language.

---------------------------------------------------------------------------------------------------------------------------

79. What is a factory function?
ANS:- A factory function in JavaScript is a function that creates and returns objects, instead of using the new keyword or classes.


---------------------------------------------------------------------------------------------------------------------------

80. What is a polyfill?
ANS:- A polyfill is JavaScript code that provides modern functionality in older browsers that don’t support that feature natively.
It “fills the gap” for missing features.

Polyfill:
if (!Array.prototype.includes) {
  Array.prototype.includes = function (value) {
    return this.indexOf(value) !== -1;
  };
}


Now:

[1, 2, 3].includes(2); // works everywhere

---------------------------------------------------------------------------------------------------------------------------

81. Difference between Object.seal() and Object.freeze()?
ANS:- 🔹 Object.seal()

👉 Prevents adding or deleting properties,
👉 Allows modifying existing property values.

Example:
const user = { name: "Shreya", age: 22 };

Object.seal(user);

user.age = 23;      // ✅ allowed
user.city = "Delhi"; // ❌ not allowed
delete user.name;   // ❌ not allowed

🔹 Object.freeze()

👉 Prevents adding, deleting, AND modifying properties.

Example:
const user = { name: "Shreya", age: 22 };

Object.freeze(user);

user.age = 23;      // ❌ not allowed
user.city = "Delhi"; // ❌ not allowed
delete user.name;   // ❌ not allowed


---------------------------------------------------------------------------------------------------------------------------

82. How to prevent object modification?
ANS:- by Object.freeze() and Object.seal();

---------------------------------------------------------------------------------------------------------------------------

83. How to generate random numbers?
ANS:-  Math.random();  // e.g. 0.348927

---------------------------------------------------------------------------------------------------------------------------

84. How to merge arrays?
ANS:- by spread operator, concat();

---------------------------------------------------------------------------------------------------------------------------

85. why do we use the word “debugger” in javascript?
ANS:- “debugger” for the browser must be activated in order to debug the code. Built-in debuggers may be switched on and off, requiring the user to report faults. The remaining section of the code should stop execution before moving on to the next line while debugging.

---------------------------------------------------------------------------------------------------------------------------

86. Explain Implicit Type Coercion in javascript.
Implicit type coercion in javascript is the automatic conversion of value from one data type to another. It takes place when the operands of an expression are of different data types.

var x = 3;
var y = "3";
x + y // Returns "33" 

---------------------------------------------------------------------------------------------------------------------------

87. What is a WeakSet?
ANS:- 
A WeakSet is a special collection in JavaScript that stores only objects and holds them weakly, meaning they can be garbage-collected if there are no other references.

---------------------------------------------------------------------------------------------------------------------------

88. What is a WeakMap?
ANS:-
A WeakMap is a special type of Map where keys must be objects and those keys are held weakly, so they can be garbage-collected when no longer needed.





