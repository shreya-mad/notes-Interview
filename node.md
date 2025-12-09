1. What is Node.js and how it works?
Ans: node is open source,run time js environment ,which allows user to run js outside the browser.basically on server.it has event_driven architecture which alllows it to run multiple task at a time.

---------------------------------------------------------------------------------------------------------------------------


2. What tools can be used to assure consistent code style?
ANS:  👉 “Which tools can help developers write clean, uniform, and properly formatted code when working in Node.js projects?”

In a team, everyone writes code differently —
some use double quotes " ", others use single ' ',
some put semicolons ;, some don’t.

To maintain a consistent coding style, we use tools that automatically check or fix such differences.


🧰 Common Tools for Code Style Consistency in Node.js:

a.ESLINT:-

Checks your code for errors and style issues.
Example: It can warn you if you forgot a semicolon or used an unused variable.
Command:
npm install eslint --save-dev
npx eslint yourfile.js


b.PRETTIER:-
Automatically formats your code (indentation, spacing, quotes, etc.).
Makes code look the same for everyone on the team.
Command:
npm install prettier --save-dev
npx prettier --write .

c.EDITONCONFIG:-
Keeps basic settings consistent (like indentation, line endings) across different code editors.

d.Husky + lint-staged:-
Run ESLint or Prettier automatically before every Git commit, ensuring that only clean code is committed.


---------------------------------------------------------------------------------------------------------------------------


3. What is a first class function in Javascript?
ANS:  first class function are those function that have these 3 properties:-
 a. it can be used as variable 
    
const greet = function() {
  console.log("Hello!");
};
greet(); // Output: Hello!

 b.passed as an argument

 function callFunction(fn) {
  fn();
}

function sayHi() {
  console.log("Hi there!");
}

callFunction(sayHi); // Output: Hi there!

 c.returned as an function   

 function outer() {
  return function inner() {
    console.log("Inner function called!");
  };
}

const myFunc = outer();
myFunc(); // Output: Inner function called!


---------------------------------------------------------------------------------------------------------------------------



4. How do you manage packages in your node.js project?
ANS:- 👉 “How do you install, update, remove, and keep track of external libraries (called packages) that your Node.js project uses?”

Packages are reusable code modules created by others (or by you) that add functionality to your project.

Node.js comes with NPM (Node Package Manager) by default.
It is used to manage all packages in your project.

🧩 Common NPM Commands
Action	Command	Explanation
Initialize a project..........npm init or npm init -y........Creates a package.json file (keeps package info)
Install a package..........npm install express..........Installs the express package
Install dev-only package..........npm install nodemon --save-dev..........Used only during development
Remove a package..........npm uninstall..........express	Removes a package
Update packages	npm update..........Updates all packages
Install all dependencies..........npm install..........Installs everything listed in package.json
View installed packages..........npm list..........Shows what’s installed

---------------------------------------------------------------------------------------------------------------------------



5. How is Node.js better than other frameworks most popularly used?
ANS:- 
a.because of its non-blocking I/O ,event-driven architecture.
b.Developer dont need to learn two languages for frontend and backend, he/she can do both in single language and that is js
c.Fast Performance: Node.js runs on Google’s V8 JavaScript Engine.
d.Huge NPM Ecosystem:- Node.js has NPM (Node Package Manager)

---------------------------------------------------------------------------------------------------------------------------


6. Explain the steps how “Control Flow” controls the functions calls?
ANS:- In Node.js (and JavaScript), Control Flow means the order in which the code or functions are executed.

a.Run all synchronous code first.
b.When async operations finish, push their callbacks to the queue.
c.The event loop moves callbacks to the call stack one by one.
d.Continue until all tasks are done.

---------------------------------------------------------------------------------------------------------------------------


7. What are some commonly used timing features of Node.js?
ANS:-  a.setTimeout/clearTimeout – This is used to implement delays in code execution.
       b.setInterval/clearInterval – This is used to run a code block multiple times.
       c.setImmediate/clearImediate- Executes a function immediately after the current event loop phase completes.

console.log("Before");
setImmediate(() => {
  console.log("Inside setImmediate");
});
console.log("After");

🧾 Output:

Before
After
Inside setImmediate


      d.process.nextTick():-Executes a callback before the next event loop iteration, even before setImmediate().

console.log("Start");
process.nextTick(() => {
  console.log("Next Tick callback");
});
console.log("End");

output:-
start
end
Next Tick callback


SUMMARY:-

| Function             | Purpose                             | Runs                           |
| -------------------- | ----------------------------------- | ------------------------------ |
| `setTimeout()`       | Run once after delay                | After specified time           |
| `setInterval()`      | Run repeatedly                      | Every interval                 |
| `setImmediate()`     | Run immediately after current phase | After current event loop phase |
| `process.nextTick()` | Run before next event loop tick     | Before timers and I/O          |
| `clearTimeout()`     | Stop timeout                        | Before it executes             |
| `clearInterval()`    | Stop interval                       | Stop repeating                 |

---------------------------------------------------------------------------------------------------------------------------


8. What are the advantages of using promises instead of callbacks?
ANS:- a.callBack hell ,b.inversion of controll

---------------------------------------------------------------------------------------------------------------------------


9. what is fork in. node.js?
In Node.js, a fork means creating a new child process (a separate instance of the Node.js program) that runs in parallel with the main process.
It is done using the child_process.fork() method.

Normally, when you run a Node.js app (like node app.js),
➡️ only one single process (one program) runs —
and it can use only one CPU core of your computer.

So, if your app has to do something heavy (like a big calculation or data processing),
it can slow down your main app because everything runs in one process.

✅ fork() lets you create a second Node.js process (called a child process) from your main app —
so that both can run at the same time (in parallel).


👉 main.js
const { fork } = require('child_process');

// Create a new process that runs "child.js"
const child = fork('./child.js');

console.log("Main app is running...");

// Send message to child
child.send('Start the task');

// Receive message from child
child.on('message', (msg) => {
  console.log('Message from child:', msg);
});

👉 child.js
process.on('message', (msg) => {
  console.log('Child received:', msg);
  
  // Do some heavy work
  let sum = 0;
  for (let i = 0; i < 1e9; i++) sum += i;

  // Send result back
  process.send('Task completed! Sum = ' + sum);
});


🧾 Output:

Main app is running...
Child received: Start the task
Message from child: Task completed! Sum = 499999999500000000

---------------------------------------------------------------------------------------------------------------------------



10. Why is Node.js single-threaded?
Node.js is single-threaded because it uses one main thread to handle all requests using the event loop and non-blocking I/O operations.
This design helps Node.js handle many requests efficiently without creating multiple threads for each request.

Why it’s designed this way:

Lightweight and Fast:
Creating and managing multiple threads (like in Java or .NET) adds overhead.
A single thread with an event loop is faster and uses less memory.

Non-blocking I/O:
Node.js relies on asynchronous operations.
Instead of waiting for one task to finish (like reading a file), it moves on to the next — and when the first one finishes, it uses a callback or promise to handle the result.

Scalability:
A single-threaded event loop can handle thousands of concurrent connections using minimal resources.


---------------------------------------------------------------------------------------------------------------------------



11. How do you create a simple server in Node.js that returns Hello World?


const express=require('express');
cosnt App=express();

app.get('/',(req,res)=>{
    res.send("hello  world");
});

app.lister(3000,()=>{
    console.log("sever is running on port 3000");
})


---------------------------------------------------------------------------------------------------------------------------



12. How many types of API functions are there in Node.js?

| Type             | Description                         | Uses                           |
| ---------------- | ----------------------------------- | ------------------------------ |
| **Asynchronous** | Non-blocking, uses event loop       | Preferred for server apps      |
| **Synchronous**  | Blocking, waits for task completion | Used in setup or small scripts |


---------------------------------------------------------------------------------------------------------------------------


13. What is REPL?

ANS:- 👉 Read — Eval — Print — Loop

It’s a built-in Node.js environment that allows you to run JavaScript code interactively, line by line, directly from your terminal.


| Term      | Meaning                                   |
| --------- | ----------------------------------------- |
| **Read**  | Reads the user’s input (JavaScript code)  |
| **Eval**  | Evaluates (executes) the code             |
| **Print** | Prints the output or result               |
| **Loop**  | Goes back to waiting for the next command |


🧠 Example

Open your terminal and type:

node


You’ll see something like:

Welcome to Node.js
>


Now you can type JavaScript commands directly:

> 5 + 10
15

> console.log("Hello World")
Hello World

> const name = "Shreya"
undefined

> name
'Shreya'


It will read, execute, print, and then wait for the next input — that’s the “loop”.


---------------------------------------------------------------------------------------------------------------------------



14. List down the two arguments that async.queue takes as input?
Ans:-In Node.js, when using the async.queue() method (from the async library), it takes two main arguments as input 👇

⚙️ 1. worker (Function)

This is a function that defines what task to perform for each item in the queue.

It receives two parameters:

The task to process

A callback to signal completion

🧠 Example:

const worker = (task, callback) => {
  console.log('Processing task:', task.name);
  callback();  // Signals that the task is done
};

⚙️ 2. concurrency (Number)

This defines how many tasks can be processed at the same time.

Example: if you set concurrency = 2, it means two tasks will run in parallel.

🧠 Example:

const queue = async.queue(worker, 2);


---------------------------------------------------------------------------------------------------------------------------




15. What is the purpose of module.exports?
ANS:-💡 module.exports in Node.js is used to export code (like variables, functions, or classes) from one file so it can be imported and used in another file.

📁 math.js

function add(a, b) {
  return a + b;
}

// Export the function
module.exports = add;


📁 app.js

// Import the function
const add = require('./math');

console.log(add(5, 3));  // Output: 8

---------------------------------------------------------------------------------------------------------------------------



16. Explain the concept of stub in Node.js?
ANS:-💡 Stub (in Node.js) — simple meaning:

A stub is a fake function you create for testing, so you don’t have to use the real one.

You tell the stub:

“When someone calls you, just return this fixed value.”

That way, you can test your code safely without connecting to databases, APIs, or external systems.


| Real Function                    | Stub Function     |
| -------------------------------- | ----------------- |
| Connects to real database or API | Returns fake data |
| Slower                           | Faster            |
| Used in real app                 | Used in testing   |

🗣 In simple words:
A stub is a temporary fake function that helps you test your code without running the real one.

2.whats the requiement of express if we have node js? 
“We use Express.js over Node.js because it simplifies server creation with features like routing, middleware, and request handling — reducing boilerplate code and making development faster and cleaner.”

---------------------------------------------------------------------------------------------------------------------------




17. server creation using express ,easiest code?
ANS:-

const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("Server is running...");
});
app.listen(5000, () => {
    console.log("Server started on port 5000");
});
