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
A fork in general is used to create child processes. In node it is used to create a new instance of v8 engine to run multiple workers to execute the code.
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


---------------------------------------------------------------------------------------------------------------------------


17. whats the requiement of express if we have node js? 
“We use Express.js over Node.js because it simplifies server creation with features like routing, middleware, and request handling — reducing boilerplate code and making development faster and cleaner.”

---------------------------------------------------------------------------------------------------------------------------




18. server creation using express ,easiest code?
ANS:-

const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("Server is running...");
});
app.listen(5000, () => {
    console.log("Server started on port 5000");
});

---------------------------------------------------------------------------------------------------------------------------


19. How is Node.js better than other frameworks most popularly used?
Node.js provides simplicity in development because of its non-blocking I/O and event-based model results in short response time and concurrent processing, unlike other frameworks where developers have to use thread management. 
 
It runs on a chrome v8 engine which is written in c++ and is highly performant with constant improvement. 
 
Also since we will use Javascript in both the frontend and backend the development will be much faster. 
 
And at last, there are sample libraries so that we don’t need to reinvent the wheel.


---------------------------------------------------------------------------------------------------------------------------

20. Describe the exit codes of Node.js?
ANS:- Exit codes in Node.js indicate how a process ended — whether it finished successfully or failed due to an error.
They are numeric values returned when a Node.js process exits.

Node.js exit codes are numeric values that tell whether a Node.js process exited successfully or due to an error.

Node.js automatically generates exit codes for crashes, signals, and internal errors, while developers explicitly set exit codes only when they want to control program termination.

✅ 0 — Successful execution
Program ran without any error
process.exit(0);

❌ 1 — Uncaught fatal exception
General error
Unhandled exception occurred
throw new Error("Crash");

❌ 2 — Incorrect usage
Invalid command-line arguments
Syntax misuse

❌ 3 — Internal JavaScript parse error
JS engine failed to parse code

❌ 4 — Internal JavaScript evaluation error
Error during JS execution inside Node

❌ 5 — Fatal error
Node.js encountered a critical internal error

❌ 6 — Non-function internal exception handler
Rare internal Node issue

❌ 7 — Internal exception handler run-time failure
Exception handling itself failed

❌ 8 — Invalid argument
Incorrect arguments passed to Node

❌ 9 — Invalid argument type
Wrong data type passed

❌ 128 + signal — Process killed by signal
Example:

130 → terminated by Ctrl + C (SIGINT)
137 → killed by system (SIGKILL, often OOM)


=>that mean if my code will have any kind of error then in that case system will give error automatically with exit code
ANS:-Yes. If your Node.js code has an unhandled error, the system (Node.js runtime / OS) will automatically terminate the process and return a non-zero exit code.
we can write it manually as well for checking error.

---------------------------------------------------------------------------------------------------------------------------

21. For Node.js, why Google uses V8 engine?
ANS:-Well, are there any other options available? Yes, of course, we have Spidermonkey from Firefox, Chakra from Edge but Google’s v8 is the most evolved(since it’s open-source so there’s a huge community helping in developing features and fixing bugs) and fastest(since it’s written in c++) we got till now as a JavaScript and WebAssembly engine. And it is portable to almost every machine known.
Node.js uses Google’s V8 engine because it executes JavaScript very fast, compiles it to native machine code, and is highly optimized and stable for server-side applications.
Uses Just-In-Time (JIT) compilation.
it uses varities of optimisation techniqyes. like ignition interpreter,turbofan compiler,inline compile,coppy ellision.

---------------------------------------------------------------------------------------------------------------------------

22. Why should you separate Express app and server?
ANS:- We separate the Express app and the server to make the code cleaner, reusable, testable, and easier to maintain.

Express app → defines routes, middleware, business logic
Server → only starts listening on a port

What happens when they are mixed ❌
const app = express();
app.get("/", ...);
app.listen(3000);


Problems:
Hard to test routes
Hard to reuse app
Hard to scale (HTTPS, clustering, sockets)

---------------------------------------------------------------------------------------------------------------------------

23. Explain what a Reactor Pattern in Node.js?
ANS:-The Reactor Pattern is a design pattern where a single thread  handles multiple requests using an event loop that listens for events and dispatches them to appropriate handlers without blocking execution.

---------------------------------------------------------------------------------------------------------------------------

24. What is middleware?
ANS:-Middleware is a function that executes between the incoming request and the outgoing response.

When a request comes to a server, it does not go directly to the route.
Common Uses ⭐

Authentication & Authorization

Logging
Request validation
Parsing JSON
Error handling

🔹 Simple Express Example
app.use((req, res, next) => {
  console.log("Request received");
  next(); // pass to next middleware or route
});

🔹 Why next() is important ⚠️
next() → move to next middleware
If you don’t call it → request stops


Types of Middleware ⭐
1️⃣ Application-level
app.use(authMiddleware);

2️⃣ Route-level
app.get("/profile", authMiddleware, handler);

3️⃣ Built-in

express.json()
express.urlencoded()

4️⃣ Error-handling
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});


---------------------------------------------------------------------------------------------------------------------------

25. What are node.js buffers and buffer?
NAS:-Buffers are used in Node.js to store and manipulate binary data.
Files, network data, images, and videos are binary data, and Node.js uses Buffers to store and process this binary data in memory.

Inside a file (image, pdf, video, even text file):
Data is stored as binary (0s and 1s)
JavaScript cannot directly work with raw binary data.

JavaScript normally works with strings and objects, not binary data.
But Node.js often deals with:

files
images
videos
network packets

👉 Buffers allow Node.js to work with this binary data efficiently.

Buffer loads the entire data into memory at once, while Stream processes data piece by piece.


🔹 Buffer

What it is:
Stores all data in memory at once

Example:
fs.readFile("bigfile.txt", (err, data) => {
  // data is a Buffer
});

Pros:
Simple to use
Good for small files

Cons:
High memory usage
Not suitable for large files

🔹 Stream

What it is:
Reads or writes data in chunks (small parts)

Example:
fs.createReadStream("bigfile.txt")
  .on("data", chunk => {
    // chunk is a Buffer
  });

---------------------------------------------------------------------------------------------------------------------------

26. Differentiate between process.nextTick() and setImmediate()?
ANS:- 🔹 Easy Explanation (simple words)

process.nextTick()
👉 Runs immediately after the current operation
👉 Even before timers and I/O callbacks

setImmediate()
👉 Runs after I/O events
👉 In the next cycle of the event loop


Where they run in the Event Loop

process.nextTick() → Microtask queue (runs ASAP)
setImmediate() → Check phase


🔹 Why process.nextTick() is dangerous ⚠️
function loop() {
  process.nextTick(loop);
}
loop();


❌ Can block the event loop
❌ Causes starvation

---------------------------------------------------------------------------------------------------------------------------

27. What is an Event Emitter in Node.js?
ANS:- EventEmitter means: one part of the code says “something happened”, and another part reacts to it.
emit means send.

🛎️ Real-life analogy (this usually clicks)

Think of a doorbell:

🔔 You press the bell → event happens
👂 People listening hear it and react
👉 Bell = EventEmitter
👉 Pressing = emit
👉 Hearing = on / listener


🔹 Step-by-step in Node.js (VERY SIMPLE)

Step 1️⃣ Create an EventEmitter
const EventEmitter = require("events");
const emitter = new EventEmitter();

👉 You created a bell

Step 2️⃣ Listen to an event
emitter.on("orderPlaced", () => {
  console.log("Order received");
});


👉 Someone is waiting/listening

Step 3️⃣ Emit (trigger) the event
emitter.emit("orderPlaced");

---------------------------------------------------------------------------------------------------------------------------

28. Enhancing Node.js performance through clustering.
ANS:- question means “How can we make a Node.js application faster and handle more users by using clustering?”
How do you improve Node.js performance by using multiple CPU cores?
Node.js is single-threaded, so it uses only one CPU core. Clustering allows us to create multiple worker processes that run on different CPU cores, which improves performance and helps the application handle more concurrent requests.

Clustering makes Node.js use all CPU cores instead of just one.

Clustering improves Node.js performance by using multiple CPU cores to run multiple instances of the application and handle more requests in parallel.

---------------------------------------------------------------------------------------------------------------------------

29. What is a thread pool and which library handles it in Node.js?
ANS:- it is container for performing async operation and it is handled by libuv library.

---------------------------------------------------------------------------------------------------------------------------

30. What is WASI and why is it being introduced?
ANS:- WASI (WebAssembly System Interface) is a standard that allows WebAssembly programs to safely interact with system resources like files, network, and environment outside the browser.
WASI stands for WebAssembly System Interface.
It defines a standard way for WebAssembly (Wasm) code to talk to the operating system.

🔹 Why WASI is being introduced? (MOST IMPORTANT ⭐)
1️⃣ Run WebAssembly outside the browser

Before WASI:

Wasm only worked well in browsers

After WASI:

Wasm can run on servers, Node.js, edge, CLI tools

---------------------------------------------------------------------------------------------------------------------------

31. How are worker threads different from clusters?
ANS:-Worker threads use multiple threads inside one Node.js process, while clusters use multiple Node.js processes.

Cluster
👉 Creates multiple Node.js processes
👉 Each process runs on a different CPU core

Worker Threads
👉 Creates multiple threads inside one process
👉 Threads share memory

---------------------------------------------------------------------------------------------------------------------------

32. How to measure the duration of async operations?
ANS:-We measure the duration of async operations by recording the start time before the async task and the end time after it completes, then calculating the difference.

const start = Date.now();

await fetchData();

const end = Date.now();
console.log("Time taken:", end - start, "ms");


---------------------------------------------------------------------------------------------------------------------------

33.  How to measure the performance of async operations?
ANs:- Async performance is measured by calculating execution time and monitoring system metrics such as latency, memory usage, and event loop delay.

---------------------------------------------------------------------------------------------------------------------------

34. what is meant by creating api with jwt authentication?
ANS:-  creating api with endpoint is one of method of securing endpoint so user need  authentication for accessing the response of that 
api. so in case of jwt authentication user need to  authenticate only once while login and and authenticate other api with the help of a token that is jwt toekn generated from server while login instead of checking username/password on each request. 

🧠 Simple Idea

Instead of checking username/password on every request, you:

Login once ✅
Get a token (JWT) 🔑
Send that token with every API request


after authenticated login Server generates a token like:

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

👉 This token contains:

User ID
Expiry time
Signature (for security)


Implementation :- 


const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(cookieParser());

const secret_key = 'sm1234';

const user = {
    id: 1,
    userName: 'smadeshiya',
    password: "1234"
};

app.post('/api/login', (req, res) => {
    const { userName, password } = req.body;

    if (userName === user.userName && password === user.password) {
        const token = jwt.sign(
            { id: user.id, userName: user.userName },
            secret_key,
            { expiresIn: '1h' }
        );

        res.cookie('token', token, { httpOnly: true });

        return res.status(200).json({ message: "login successful!!" });
    }

    return res.status(401).json({ message: "invalid credential!!" });
});


const authenticateToken = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) return res.status(401).send("No token");

    jwt.verify(token, secret_key, (err, user) => {
        if (err) return res.sendStatus(403);

        req.user = user;
        next();
    });
};


app.get('/api/protected', authenticateToken, (req, res) => {
    res.json({
        message: "this is authenticated data",
        user: req.user
    });
});

app.listen(3000, () => {
    console.log("server is running on port: 3000");
});




🔹 1.
const cookieParser = require('cookie-parser');

👉 Meaning:

You are importing the cookie-parser library
This library helps your server read cookies sent by the browser

👉 Without this:

req.cookies   // ❌ undefined

👉 With this:

req.cookies   // ✅ { token: "abc123" }
🔹 2.
app.use(express.json());

👉 Meaning:

This tells Express to convert incoming JSON data into JavaScript object

👉 Example:
Client sends:

{
  "userName": "shreya",
  "password": "1234"
}

👉 Without this:

req.body   // ❌ undefined

👉 With this:

req.body   // ✅ { userName: "shreya", password: "1234" }
🔹 3.
app.use(cookieParser());

👉 Meaning:

This activates the cookie-parser middleware
It reads cookies from request and puts them into:
req.cookies

---------------------------------------------------------------------------------------------------------------------------

