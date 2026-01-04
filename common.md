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











