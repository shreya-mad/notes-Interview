1. Event Loop?
ANS:-The Event Loop is a mechanism in JavaScript that allows non-blocking, asynchronous code execution by managing the interaction between the call stack, callback queue, and microtask queue.

2. whats the need of callbak queue?
ANS:- The callback queue (also called the task queue or macrotask queue) is needed to store asynchronous callback functions until the call stack is empty —
so that JavaScript can continue running other code without blocking.

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
    callback("Result of step 3");
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


9.  What are the different data types present in javascript?
Ans:-
 a.primitive:-immutable and Primitive data types can store only a single value.
 String,Number,BigInt,Boolean,Undefined,Null,Symbol

 b.non-primitive:-mutable and To store multiple and complex values, non-primitive data types are used.
Object,Array,Function,Date, Map, Set, etc.

10. What are the types of errors in javascript?
ANS:-There are two types of errors in javascript.

a.Syntax error: Syntax errors are mistakes or spelling problems in the code that cause the program to not execute at all or to stop running halfway through. Error messages are usually supplied as well.

b.Logical error: Reasoning mistakes occur when the syntax is proper but the logic or program is incorrect. The application executes without problems in this case. However, the output findings are inaccurate. These are sometimes more difficult to correct than syntax issues since these applications do not display error signals for logic faults.


11. Explain Implicit Type Coercion in javascript.
Implicit type coercion in javascript is the automatic conversion of value from one data type to another. It takes place when the operands of an expression are of different data types.

String coercion
String coercion takes place while using the ‘ + ‘ operator. When a number is added to a string, the number type is always converted to the string type.

var x = 3;
var y = "3";
x + y // Returns "33" 

12. Is javascript a statically typed or a dynamically typed language?
JavaScript is a dynamically typed language. In a dynamically typed language, the type of a variable is checked during run-time in contrast to a statically typed language, where the type of a variable is checked during compile-time.

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


14. Explain passed by value and passed by reference.
In JavaScript, primitive data types are passed by value and non-primitive data types are passed by reference.

15.  What is an Immediately Invoked Function in JavaScript?
An Immediately Invoked Function ( known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined.

Syntax of IIFE :

(function(){ 
  // Do something;
})();

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
    

15. Explain call(), apply() and, bind() methods.
ANS:- Let’s break down call(), apply(), and bind() — they are all methods in JavaScript used to control the value of this when calling a function.

A.Call():-directly calls the function and passes arguments one by one.
const person1={
  name:"Shreya",
  greet:function(city,workingCity){
     console.log("this is "+this.name+" and she is from "+city+" and she is working in "+workingCity);
  }
}
const person1={name:"Shreya2"};
person1.greet.call(person1,"Bahraich","Noida");


B.Apply():-directly calls the function and passes arguments one by one as an array.
 above object using Apply
 person1.greet.Apply(person2,["Bahraich","Noida"]);

C.Bind();-creates a new function to call later (doesn’t call immediately).
above object using bind()
const getDataLater=person1.greet.Bind(person1,"Bahraich","Noida");
getDataLater();

| Method    | Calls immediately? | How to pass arguments | Returns      |
| --------- | ------------------ | --------------------- | ------------ |
| `call()`  | ✅ Yes              | Individually          | Result       |
| `apply()` | ✅ Yes              | As array              | Result       |
| `bind()`  | ❌ No               | Individually          | New function |

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


17. What is currying in JavaScript?
ANS:-curring is the process of trinsforming function which taken multiple arguiment into series of function, each take one argument at a time.

function add(a){
  return function(b){
    return a+b;
  }
}
console.log(add(2,3));


18. What are some advantages of using External JavaScript?
ANS:-| ✅ Advantage                               | 💬 Explanation                                                                                      |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **1. Code Reusability**                   | The same `.js` file can be used across multiple web pages. No need to rewrite code again and again. |
| **2. Better Code Organization**           | Keeps HTML, CSS, and JS separate → makes code cleaner and easier to manage.                         |
| **3. Easier Maintenance**                 | You can update one `.js` file, and changes apply everywhere automatically.                          |
| **4. Faster Page Loading (with caching)** | The browser caches external `.js` files, so they don’t need to reload every time.                   |
| **5. Improved Readability**               | Keeping JavaScript separate from HTML makes both easier to read.                                    |
| **6. Collaboration Friendly**             | Multiple developers can work on the same project easily — HTML, CSS, and JS handled independently.  |


19. Mention some advantages of javascript.
ANS:-
a. follows server side rendering and client side rendering both.
b.we can write frontent and backend both using js.
c.it is syncronous sigle threaded language but with the help of callback function ,w e can make it asyncronous.

20. React follows ssr or csr?
ANS:-
🔹 React = CSR by default
🔹 React can do SSR using tools like Next.js or react-dom/server

21. What is Object Prototype?
AnS:-
In JavaScript, every object has a hidden property called [[Prototype]],
which is a reference to another object — known as its prototype.

That prototype object can have its own properties and methods,
and your object can inherit them.

So basically:

Prototypes are the mechanism by which JavaScript objects inherit features from one another.

const person={
  greet: function(){
    console.log("Hellow");
  }
}

const person1=Object.create(person);
person1.greet();


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

23. Which method is used to retrieve a character from a certain index?
ANS:- The charAt() function of the JavaScript string finds a char element at the supplied index. The index number begins at 0 and continues up to n-1, Here n is the string length. The index value must be positive, higher than, or the same as the string length.

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

25. Spread and rest operator?
ANS:-
Rest operator:-
it is a kind of operator which is denoted by three dot(...) and it is used colled the varible number of arguments into array.
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



