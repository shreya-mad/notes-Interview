1.Difference b/w server side rendering(SSR) and client side rendering(CSR)?
ANS:-
CSR-
 browser (client) downloads an empty HTML file and then renders the content using JavaScript — usually from a framework like React, Angular, or Vue.

⚙️ How it works:

Browser gets a basic HTML file (almost empty).

JavaScript loads.

JavaScript fetches data and builds the UI in the browser.


<body>
  <div id="root"></div>
  <script src="bundle.js"></script> <!-- React code -->
</body>
The bundle.js builds everything dynamically in your browser.


SSR:-
The content (HTML) is generated on the server and sent fully rendered to the browser.

⚙️ How it works:

User requests a page.

Server runs code (e.g., React using Next.js or Node.js).

Server sends a ready-made HTML page to the browser.

Browser displays it immediately.


| Feature                | CSR (Client Side) | SSR (Server Side) |
| ---------------------- | ----------------- | ----------------- |
| Where HTML is rendered | Browser           | Server            |
| Initial Load           | Slow              | Fast              |
| SEO                    | Poor              | Excellent         |
| Navigation             | Very Fast         | Slower            |
| Example                | React, Angular    | Next.js, Nuxt.js  |


---------------------------------------------------------------------------------------------------------------------------




2. difference between javascript and typescript?
ANS:- 
| **Point**              | **JavaScript**         | **TypeScript**                    |
| ---------------------- | ---------------------- | --------------------------------- |
| **1. Type System**     | Dynamic                | Static                            |
| **2. Error Detection** | Runtime                | Compile-time                      |
| **3. Browser Support** | Runs directly          | Needs to be compiled to JS        |
| **4. Code Safety**     | Less safe              | More safe due to types            |
| **5. Learning Curve**  | Easy                   | Slightly harder                   |
| **6. Best For**        | Small–medium projects  | Medium–large projects             |
| **7. File Extension**  | `.js`                  | `.ts`                             |
| **8. Tooling Support** | Good                   | Excellent (autocomplete, hints)   |
| **9. Extra Features**  | No extra features      | Interfaces, enums, generics, etc. |
| **10. Compatibility**  | Cannot use TS features | Can use all JavaScript code       |

reason for 3rd point:
TypeScript is a developer-friendly language, not a browser language.
It must convert to JavaScript for execution because browser dont understand typscript.

---------------------------------------------------------------------------------------------------------------------------


3. which one takes large time and how?
ANS:-
   a.typescript check data type at compile time while javascript checks at run time.  
   b.typescript get conveted into js and this is called compilation and that takes time and js dont need any kind of conversion for execution so typescipt takes larger time than js.

   Compile time is when code is checked and converted before execution, while run time is when the code actually runs and produces output.

---------------------------------------------------------------------------------------------------------------------------


4. ways of getting data from user request in api?
ANS:- 
| Term         | Meaning                              |
| ------------ | ------------------------------------ |
| `req`        | The full request from frontend       |
| `req.body`   | The data sent by frontend (POST/PUT) |
| `req.params` | URL parameters (`/user/:id`)         |
| `req.query`  | Query params (`?page=1&limit=10`)    |


---------------------------------------------------------------------------------------------------------------------------


5. purpose of adding middleware "app.use(express.json())"?
ANS:-
It tells Express:
“If the client sends data in JSON format, please parse it and put it inside req.body.”


---------------------------------------------------------------------------------------------------------------------------


6. how to decalre any variable in environment varible file?
ANS:- dont use any quotes inless your value has space.
  like:- PORT=3000
         MONGO_URL=mongodb+srv://shreya19457:KwzezBL2Exo2JyD2@cluster0.nxabzdq.mongodb.net/devTinder

---------------------------------------------------------------------------------------------------------------------------


7. node project complete folder structuring?
ANS:- 
    a.  start node project by writting command npm init -y for creating package.json in the folder where we want to   make our prpject
    b.  then install all the required packages by npm i express mongoose nodemon dotenv 
    b.  now comming to proper folder creation so use mkdir for flder creation and touch for file creation 
    c. .env file should be in same folder in which we need to use vaqrible taken in .env. file that means if we have created all the folder and files in src then .env file should also be in same folder (src), not utside the src  folder. 
    d. come to the proper folder creation so first create .gitingore readme.md ,both will be main project and then create main project folder named src and then create app.js and .env inside it ,here app.js will be entry point of the prject and we need to import and connect all the modules in app.js.
    now create route for creating all the routes and then import those in app.js and route will be only  creating route ,thats logic will be in controller and then service inside controller for calling all the service.
    config folder for database connection.
    models folder for creating all the schemas for mongodb.
    middleware folder for all the global middlewares.
    firstly we have to create mongodb connection in config folder then import that in app.js file and use promises for creating server beacuse if we create server and DB connetion seperately then that will results in inexprected result so we have to create DB connection first then server creation so firstly create db conncetion in another file then after importing that in app.js ,we create server in .then of the DB connection function.
    like:-
    ConnectionDB.then(()=>{
      console.log("db connection successfull");
      App.listen(3000,()=>{
        console.log("server is running on port: " +3000)'
      })
    }).catch(err=>{
      console.log("there is some error in DB conncetion: "+err)'
    })
    e. refer below structure for your reference.   


project-name/
│
├── src/
│   ├── config/
│   │   └── database.js          # DB connection, env config
│   │
│   ├── controllers/             # Request handlers (req,res logic)
│   │   └── user.controller.js
│   │
│   ├── routes/                  # All routes
│   │   └── user.route.js
│   │
│   ├── models/                  # Database schemas (MongoDB/Mongoose)
│   │   └── user.model.js
│   │
│   ├── services/                # Business logic
│   │   └── user.service.js
│   │
│   ├── middlewares/             # Auth, validation
│   │   └── auth.middleware.js
│   │
│   ├── validations/             # Joi/Yup/Validator rules
│   │   └── user.validation.js
│   │
│   ├── constants/               # Static values, messages, roles
│   │   └── messages.js
│   │
│   ├── app.js                   # All middlewares, routes combined
│   └── server.js                # Server start file
│   ├── .env                         # Environment variables
|
|
├── .gitignore
├── package.json
└── README.md

  f. now start project by cd src then nodemon app.js

  so by this our all the basic setup for node project is ready.
but allways keep app.js and server.js outside the src as it will work while deploement on aws because if we kleep both the file inside src then that will respond an unexprected issue during delployemnt told by ankur.

---------------------------------------------------------------------------------------------------------------------------


8. what is api?
ANS:- expain and give its live example with waiter in restaurent.
      So an API is like a waiter in a restaurant:
          Customer (Frontend) requests food (Data)
          Kitchen (Database / Backend) prepares it 
          Waiter (API) delivers it back to customer

---------------------------------------------------------------------------------------------------------------------------


9. types of API?
ANS:- 
⭐ REST API (Representational State Transfer):-
A REST API is a web service that uses standard HTTP methods (GET, POST, PUT, DELETE) to access and manipulate resources, which are identified by URLs. It is stateless, uses structured data formats like JSON, and follows a uniform set of rules to make communication simple and scalable.

Stateless ka matlab: server ko aapki previous request ya history yaad nahi rehti.
Har request nayi request jaisi hoti hai.
Aap jo bhi kaam karna chahte ho, har request me saari information dubara bhejni padti hai.


⭐ SOAP API (Simple Object Access Protocol)
A SOAP API is a protocol-based web service that uses XML for sending and receiving data. It follows strict standards defined in the WSDL contract and includes built-in support for security, transactions, and error handling, making it suitable for enterprise systems.
SOAP API ek strict rule-following system hai jo XML me data bhejta/leta hai, WSDL contract follow karta hai, aur security + transactions + error handling built-in deta hai — isliye bade companies ke liye best hota hai.

defined in the WSDL contract
WSDL = Web Service Description Language
Ye ek document hota hai jisme likha hota hai:
service kya karegi
request ka format kya hoga
response kya hoga
errors kya honge
→ WSDL = contract → “Ye rules follow karna hi padega.”

⭐ GraphQL API(“Graph” + “Query Language”)
GraphQL is a query-based API technology that allows the client to request exactly the data it needs from a single endpoint. It provides a strongly typed schema, supports nested queries, and reduces overfetching and underfetching of data.
Give me student name + subjects only.

from a single endpoint meaning

REST me normally bahut endpoints hote:
/users, /users/5/orders, /products, etc.

GraphQL me sirf ek endpoint hota hai:
/graphql

→ Pure system ka data ek hi link se mil jata hai using queries

GraphQL ek smart API system hai jisme client ek hi endpoint se bilkul utna hi data manga sakta hai jitna usse chahiye — na zyada, na kam — aur wo nested, typed, clean format me milta hai.

⭐ WebSocket API

A WebSocket API enables a persistent, full-duplex connection between client and server, allowing both sides to send data at any time. It is used for real-time features such as chat, notifications, and live updates.

⭐ Webhook

A webhook is a server-to-server callback mechanism in which one system sends an automatic HTTP request to another system when a specific event occurs. It is used for event notifications without requiring polling.


---------------------------------------------------------------------------------------------------------------------------


10. what is fucntion overloading and function overridding?
ANS:- function overloading is came function with different number of parameter, different parameter type in same class.

class Demo {
public:
    void add(int a, int b) {
        cout << a + b;
    }

    void add(double a, double b) {     // different type
        cout << a + b;
    }

    void add(int a, int b, int c) {    // different number
        cout << a + b + c;
    }
};




and function overridding is nothing but when child class redefine function of parent class with same name + same parameters + same return type then it is called function overrriding.


class Parent {
public:
     void show() {
        cout << "Parent function";
    }
};

class Child : public Parent {
public:
    void show() override {   // same signature
        cout << "Child function";
    }
};

---------------------------------------------------------------------------------------------------------------------------

11. it is about calling authorised api call after login successfull.
    If cookie missing होती → Chrome API call को BLOCK कर देता। 
    request गई है → मतलब cookie गई है।
   
  Production pe below code kam nhi krega cookies ko store krne ke liye ,iski jagah uske neeche wala syntax kam. krega kyuki devTinder wale me isi vajah se feed api connection api aur baki api kam nhi kr rhi thi

    res.cookie("token",token);
      res.cookie("token", token, {
  httpOnly: true,
  secure: true,       // Render पर जरूरी
  sameSite: "none",   // Cross-site के लिए जरूरी
});

---------------------------------------------------------------------------------------------------------------------------

12. how to remove environment varible from github alter if i mistkaenly pushed that into github at first? WHY your .env is still visible on GitHub even after adding it to .gitignore?
ANS: 
Because .gitignore does NOT delete already-tracked files.

Means →
Agar .env file pehle commit ho chuki थी GitHub pe,
phir chahe aap 100 baar .gitignore me daal do…

👉 Git still remembers it.
👉 Git STILL tracks it.
👉 Git STILL pushes it to GitHub.

.gitignore only stops future tracking — not old tracking.

to resolve this issue put below code in .gitignore

node_modules
.env
.env.local
.env.production
.env.development


and then push and commit chnage then this will ignore .env file


---------------------------------------------------------------------------------------------------------------------------

13. Why should we hire you?
ans:- You should hire me because I have hands-on experience with the MERN stack—MongoDB, Express, React, and Node.js—and I’ve worked on real-world applications end to end.
I can build REST APIs, integrate frontend with backend, manage databases, and write clean, reusable React components.
I’m comfortable debugging issues, learning quickly, and delivering features as per business requirements while maintaining code quality.

---------------------------------------------------------------------------------------------------------------------------

14. What are your strengths and weaknesses?
ANS:- im quick learner and always curiors to learn new technologies. and if i talk about my weakness then somthimes i want to solve issue by myself and took longer time as usual rather than taking jelp from seniors and reason behind that is i hesitate sometime if my issue doesnt loooks bigger.

---------------------------------------------------------------------------------------------------------------------------

15. Where do you see yourself in 3–5 years?
ANS:- In the next 3–5 years, I see myself as a skilled MERN developer and llm with strong ownership of projects.
I want to deepen my expertise in scalable backend systems, performance optimization, and clean frontend architecture.
I also aim to take more responsibility—mentoring juniors, contributing to design decisions, and delivering high-quality solutions that add real business value.

---------------------------------------------------------------------------------------------------------------------------

16. Difference between abstract class and interface.
Ans:- An abstract class is used when classes are related and we want to share common code.
An interface is used when classes are different but must follow the same rules.
Abstract classes can have implemented methods, while interfaces only define what methods must exist.

---------------------------------------------------------------------------------------------------------------------------

17. What is exception handling?
ANS:- Exception handling is a way to handle runtime errors so that the application does not crash and can continue running gracefully.

---------------------------------------------------------------------------------------------------------------------------

18. What is MVC architecture?
ANS:- In MERN, MVC architecture separates the application into Model for database, View using React for UI, and Controller using Express for handling business logic and API requests.

---------------------------------------------------------------------------------------------------------------------------
19. What is normalization?
ANS:-Normalization is a technique to organize database data by reducing redundancy and improving data integrity.

---------------------------------------------------------------------------------------------------------------------------

20. Difference between primary key and foreign key.
ANS:-A primary key uniquely identifies a record, while a foreign key creates a relationship between tables.
| Primary Key                  | Foreign Key                   |
| ---------------------------- | ----------------------------- |
| Uniquely identifies a record | Links one table to another    |
| Cannot be NULL               | Can be NULL                   |
| One per table                | Can be multiple               |
| Ensures entity integrity     | Ensures referential integrity |


---------------------------------------------------------------------------------------------------------------------------


21. What is indexing?
ANS:- Indexing is a database technique used to speed up data retrieval.

---------------------------------------------------------------------------------------------------------------------------

22. Write a query to find the second highest salary.
ANS:-INNER JOIN returns only matching records, while LEFT JOIN returns all records from the left table.

---------------------------------------------------------------------------------------------------------------------------

23. can we get data from post method?
ANS:-es, we can get data from a POST request, but the data is sent in the request body instead of the URL, making it more secure than GET.

---------------------------------------------------------------------------------------------------------------------------

24. What is a stored procedure?
ANS:- A stored procedure is a precompiled SQL code stored in the database that can be executed whenever needed.


---------------------------------------------------------------------------------------------------------------------------

25. what are the meajor issue that you get during making mern stack prject and how you tackle with that
ANS:- cors error,highchart version chnge required as per cleint request but our 50% porject was allready prepared so we asked client for bit more time for that i re write all the code in new version.
api speed was too shlow.

---------------------------------------------------------------------------------------------------------------------------
26. steps for pushing any project on github?
ANS:- 
| Step No. | Command / Action                   | What You Do                                                  | Why This Step Is Needed                                 |
| -------- | ---------------------------------- | ------------------------------------------------------------ | ------------------------------------------ |
| 1        | Create GitHub Repo                 | Create a new repository on GitHub (no README, no .gitignore) | Creates an empty **remote location** to store your code |
| 2        | `cd project-folder`                | Open terminal inside your project directory                  | Git works only inside the project folder                |
| 3        | `git init`                         | Initialize Git in the project                                | Converts folder into a **Git repository**               |
| 4        | `git status`                       | Check current file state                                     | Shows untracked, modified, staged files                 |
| 5        | `git add .`                        | Add all files to staging area                                | Tells Git which files should be saved                   |
| 6        | `git commit -m "Initial commit"`   | Create first commit                                          | Saves a **snapshot** of your project                    |
| 7        | `git remote add origin <repo-url>` | Link local repo to GitHub                                    | Connects local project to GitHub                        |
| 8        | `git branch -M main`               | Rename branch to main                                        | Matches GitHub default branch                           |
| 9        | `git push -u origin main`          | Push code to GitHub                                          | Uploads code to GitHub for the first time               |
| 10       | Open GitHub Repo                   | Refresh repository page                                      | Confirms code is successfully pushed                    |



---------------------------------------------------------------------------------------------------------------------------

27. What is the Staging Area?
ANS:- The staging area is a temporary holding place where you decide which changes should go into the next commit.


---------------------------------------------------------------------------------------------------------------------------

28. What does ERP mean?
ANS:-
ERP = Enterprise Resource Planning
ERP is one big software system that manages all important data and processes of an organization in one place.


=> Why your company’s college software is called an ERP 🎓

Since your company provides data management services to colleges, their product is called an ERP because it combines many college activities into a single system instead of using separate software for each task.


=>Why it’s called Enterprise Resource Planning

Enterprise → an organization (college, school, company)
Resources → students, teachers, money, courses, classrooms, time
Planning → managing, tracking, and reporting all of it efficiently

So ERP = 👉 Software that plans and manages all organizational resources together.

---------------------------------------------------------------------------------------------------------------------------

29. What happens when you paste a URL into a browser and press Enter?
ANS:- 
 
 1. url parsing
     Example: https://example.com/page
       Browser breaks it into:
          Protocol → https
          Domain → example.com
          Path → /page
 2. DNS lookup for finding ip address of that url ==> 👉 Browser asks to DNS : “What is the IP address of this domain?”
 3. after finding the ip address , browser connects to that server
 4. browser asks to the server for that page like home page
 5. server sends files like html,css,js
 6. browser shows the page ===>> Reads HTML → builds structure.....Applies CSS → adds styling.....Runs JS → adds functionality


---------------------------------------------------------------------------------------------------------------------------

30. how http and https protocol works?
ANS:- 
What is HTTP / HTTPS?
👉 Both are rules (protocols) for how browser and server talk
HTTP = normal communication
HTTPS = secure (encrypted) communication 🔒

🧠 First understand HTTP (simple)
📦 How HTTP works
1️⃣ Browser sends request
GET /home

👉 Means: “Give me homepage”

2️⃣ Server responds
<h1>Hello</h1>

👉 Server sends data back

3️⃣ Browser shows it

👉 Page appears on screen

⚠️ Problem with HTTP

👉 Everything is plain text

If someone intercepts it:

Can read your data ❌
Can steal passwords ❌


🔒 Now HTTPS (secure version)

👉 HTTPS = HTTP + Security (TLS/SSL)

🪜 How HTTPS works (simple)
1️⃣ Browser connects to server

👉 But before sending data, it says:

“Let’s make this connection secure”

2️⃣ TLS Handshake happens 🤝

This is the main magic step

👉 They:

Verify server identity (certificate)
Agree on a secret key
  
       1. You open a website

     Example:
     https://google.com

    👉 Browser wants to talk to server

     2. Before talking, they agree on a secret 🤝

    Browser says:

    “Let’s talk in a secret language”
    Server agrees
    👉 This step is called handshake

    3️. Server proves it is real ✅

   Server shows a certificate
   👉 Like:
   “Yes, I am real google.com, not fake”
   4️. Secret key is created 🔑
   👉 Both browser & server now share a secret key

   5. Communication starts (encrypted)
    Instead of:
      password=1234
    It becomes:
    xk29@!#as
    👉 Even if someone sees it → useless
    6️. Server understands it
    Server decrypts data
    Sends encrypted response back
   7️. Browser decrypts it
  👉 You see normal page


  HTTPS makes communication between browser and server secure by encrypting data using a secret key.
  HTTPS works by first establishing a secure connection using a TLS handshake, where a secret key is shared. After that, all communication between the browser and server is encrypted and secure.


  if there is tls handshake then what is ssl certification

  👉 SSL Certificate = Identity (who are you?)
  👉 TLS Handshake = Process (how we connect securely)


🔒 What is SSL Certificate?

👉 It’s like an ID card of a website

Example:

When you open https://google.com

Server shows a certificate saying:

“I am really Google, not a fake website”

📌 What it contains:
Website name (domain)
Public key 🔑
Issued by trusted authority (like DigiCert)

👉 So its job = Trust establish karna


🤝 What is TLS Handshake?

👉 It’s the process of starting secure communication

It uses the certificate to:

Verify server identity
Create a secret key
Start encrypted communication



🪜 Full flow (VERY IMPORTANT)
Step 1️⃣ You open HTTPS site
Step 2️⃣ Server sends SSL Certificate 📄

👉 Browser checks:

Is it valid?
Is it trusted?
Step 3️⃣ TLS Handshake happens 🤝

👉 Using certificate’s public key, browser:

Creates secret key
Shares it securely
Step 4️⃣ Secure communication starts 🔐

👉 Now everything is encrypted


🎯 Simple analogy

Think:

SSL Certificate = Aadhaar Card / ID proof 🪪
TLS Handshake = Conversation to agree on secret language 🤝

⚡ Ultra simple memory trick

👉 Certificate = “Who are you?”
👉 Handshake = “Let’s talk securely”


---------------------------------------------------------------------------------------------------------------------------

31. why we use express js if we have node js 
ANS:- Node.js provides the runtime to build servers, while Express.js is a framework that simplifies server development by providing routing, middleware, and better structure. 

👉 Issues:
Too much manual work 😓
Routing is messy
No built-in middleware
Hard to scale 

---------------------------------------------------------------------------------------------------------------------------

32. difference between react js and next js?
ANS:- 

| Feature         | React.js ⚛️ | Next.js 🚀         |
| --------------- | ----------- | ------------------ |
| Type            | Library     | Framework          |
| Routing         | Manual      | Built-in           |
| Rendering       | CSR         | SSR + CSR          |
| SEO             | ❌ Poor      | ✅ Good             |
| Backend support | ❌ No        | ✅ Yes (API routes) |
| Setup           | More work   | Ready setup        |


---------------------------------------------------------------------------------------------------------------------------

33. how to solve cors error?
ANS:- 

✅ 1. Fix from Backend (Best way)

If using Express:

npm install cors
const cors = require("cors");

app.use(cors());

👉 This allows all origins (for testing)

✅ 2. Allow specific origin (Better)
app.use(cors({
  origin: "http://localhost:3000"
}));


✅ 3. Manual headers (without package)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});


⚠️ Important (Interview point)

👉 CORS is controlled by browser, not server

👉 Server just allows or denies

---------------------------------------------------------------------------------------------------------------------------

34. find secong largest in array in O(n)
ANS:- 
function findSecondHighest(arr){
  let largest=-Infinity;
  let secondHighest=-Infinity;
  for(let item of arr){
    if(item>largest){
      secondHighest=largest;
      largest=item;
    }
    else if(item<=largest && item>secondHighest )
    secondHighest=item;
  }
  return secondHighest;
}
const arr=[7,9,45,21,56,78,87];
console.log(findSecondHighest(arr));

---------------------------------------------------------------------------------------------------------------------------

35. Whats the most challenging part while working?
ANS:- i get variour chalenges while working.......
so firstly i will explain about chaleneges while making dashboard
  we made dasshborad suceefully and everything was fine except user Enxerince and good user expeince is one of the most imp thing about creating any website. like it was taking too much time on initial load and after applying filter, it was taking again that much of time.
  and reason behind that was unecesary re-rendering, showing data which is not nencesary at that time.
  what i did for that is optimisation like
   memoiation of function reference and varilae using useCallback and use Memo, pagination, used lazy loading on compoenents,use redux and context api for state mamangement becuase earlier we were using only useState for state management,showed data only on the screen which is visible by calculating screen size and showed more data after scrolling,used debouncing and throatling.
   our client asked for a data representation way , that was not suppported by highcart library version used by us so after lots ofr research and analysing we decided to  upgrade all the other data to new highcart version and during mgration code were breaking at many point so  fixed that by debugging.
  on backend part we applied indexing ,otmitised query, pagination,caching using reddis.

  during rag chatbot i was not able to create embedding of the data. so after analysing and dugugging i get tot know that i was creating embeding of all the data at a time and used wrong llm model so for that i break down the data into chunks then generated embedding of those chunked data.





---------------------------------------------------------------------------------------------------------------------------

36. how would you migrate from angular to react ?
ANS:- i havent worked on angulaer to ract mingration but i have full idea of react js application like component based architecture. so if i get  work on this migration firstly i will will break angular modules into reusable compoents. replace  services with api calls using hook , manage state using statestate , context api and redux. amgular routing iwth react routing.


---------------------------------------------------------------------------------------------------------------------------
37. machanism available for caching rest response
ANS:- we can cahce rest reposnse from brouser caching and server side caching like
1. HTTP caching- 👉 Browser stores response → no need to call API again
2. server side caching(Redis)
3. clinet side caching usinf various react library
4. CDN caching- 👉 Static API responses cached on CDN, 👉 Faster global access

---------------------------------------------------------------------------------------------------------------------------

38. karma and jasmine?
ANS:- both are used for tesing poupose in angular.
Jasmine is a testing framework used to write test cases, and Karma is a test runner used to execute those tests in a browser.

---------------------------------------------------------------------------------------------------------------------------


---------------------------------------------------------------------------------------------------------------------------









