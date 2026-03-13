1. How to do blue/green or canary deployments for backend services.
ANS:- in blue/green or canary deployment , we run two identical environments:
      blue:  current live version
      green: new version

 => Only one gets traffic at a time.

 🔁 Flow (Step-by-step)

1️⃣ Blue is live (v1)
2️⃣ Deploy v2 to Green
3️⃣ Test Green (health checks)
4️⃣ Switch traffic Blue → Green
5️⃣ If issue → switch back instantly


🧠 Visual

Users
  |
Load Balancer
  |
  ├── Blue (v1) ✅
  └── Green (v2) ❌

After switch
  Load Balancer
  |
  └── Green (v2) ✅


🛠 How to implement (AWS example)

Option 1: Load Balancer
Two target groups: blue-tg, green-tg
Change listener to point to green

Option 2: Kubernetes
Two deployments
Switch Service selector

Option 3: API Gateway / Lambda
Two Lambda versions
Switch alias


🔁 Flow
1️⃣ Deploy v2
2️⃣ Send 5% traffic to v2
3️⃣ Monitor logs, errors, latency
4️⃣ Increase to 25% → 50% → 100%
5️⃣ If issue → rollback small % only

=====>>>>>
“Blue/green deployment uses two identical environments and switches traffic between them for zero downtime and instant rollback. Canary deployment releases the new version to a small percentage of users first and gradually increases traffic, reducing risk. I choose based on system size, risk level, and monitoring maturity.”


🐦 Canary Deployment
📌 What it is (Simple)
New version is released to small % of users first, then gradually to all.


--------------------------------------------------------------------------------------------------------------------------



2. CI/CD pipeline for MERN app: tests, build, Docker image, deploy to staging/production.

ANS:- CI/CD automates testing, building, and deploying code so changes reach users fast, safely, and without downtime.

Developer Pushes Code --> Developer apna code Git (GitHub/GitLab) me push karta hai.
        
        ↓

CI (Tests + Build) --> System automatically tests run karta hai Aur check karta hai ki app build ho rahi hai ya nahi
       
        ↓

Docker Image Build --> App ko Docker image me pack kiya jata hai,Taaki same app har jagah same chale. docker image coversion simple mean that app + uski saari required cheezein ek packet (image) me band kar dena.

Docker Image me kya hota hai?
✔ App code
✔ Node.js version
✔ npm packages
✔ System settings
       
        ↓

Push Image to Registry --> Docker image ko online storage (Docker Hub / AWS ECR) me upload kiya jata hai

        ↓

Deploy to Staging --> App ko pehle testing environment (staging) me deploy kiya jata hai. Real users se pehle test hoti hai. mostly dummy data pe kam krta hai. aur QA team sab kuch test krti h ki properly work kr rha ya nhi,like login bike booking and all.

        ↓

Approval / Checks --> App sahi chal rahi hai ya nahi. Koi bug ya error to nahi

        ↓

Deploy to Production --> App ko live server par deploy kar diya jata hai. Ab real users use kar sakte hain 🎉


--------------------------------------------------------------------------------------------------------------------------

3. End-to-end testing approach for booking flow (tools and assertions).
ANS:- E2E testing ka matlab real user jaise poora booking flow test karna—UI se lekar backend + DB tak.
E2E checks that user ke click se lekar booking confirm hone tak sab kuch sahi kaam kar raha hai ya nahi.

👉 Unit test = ek function
👉 E2E test = poora flow


🎯 Booking Flow jo test karna hai
Login
 → View bikes
 → Select bike
 → Book bike
 → Payment (test)
 → Booking confirmation

 🧰 Tools (Industry Standard)

✅ Frontend E2E Tools
Cypress (most popular)
Playwright (fast, modern)
👉 Interview-safe answer: Cypress / Playwright

✅ Backend helpers
Test DB (staging DB)
Seed data
Mock payment gateway

Cypress / Playwright is popular, modern JavaScript-based testing frameworks used for end-to-end testing of web applications.

“For end-to-end testing of a booking flow, I use tools like Cypress or Playwright to simulate real user behavior. I test login, bike selection, booking, and confirmation, and assert UI responses, API status codes, and booking state changes. External services like payments are mocked to keep tests reliable.”

==> 
1.login me check krnege ki user ka email password valid ho aur there will be login button
2.card lenght shlud be greater than zero
3.booking me bike id honi chiaye book now button hona chiaye then after clicking on book button ,ek successfull bike book ka msg ana chaiye.
4.payment me successfull payment ke bad ek successfull payment ka msg ana chiaye
5.new user agr uski bike ko bok knre ka try krta h to allready booked msg ana chiaye.
6.edge cases ko bhi handle krna hoga like paymnet fail hua to successfully rollback ho rha h ya nhix


--------------------------------------------------------------------------------------------------------------------------

4. How to instrument performance metrics (APM, key metrics to watch for a bike rental app).
ANS:-  

APM (Application Performance Monitoring)
app ke health aur speed ko continuously measure karta hai
taaki problems users ko feel hone se pehle pakad li ja sake.

Socho APM = app ka health monitor ❤️

🧰 APM Tools (Interview-safe)

Common tools:
New Relic
Datadog
Elastic APM
Prometheus + Grafana
AWS CloudWatch

👉 Interview me bol sakte ho: “New Relic / Datadog” (safe answer)


🔧 How to instrument (Node.js example – simple)
Step 1: Install APM agent (example: New Relic)
npm install newrelic

Step 2: Import at app start (MOST IMPORTANT)
require("newrelic");
const express = require("express");

👉 Ye automatically:

API response time
Errors
DB queries
External calls track karta hai

🎯 Key Metrics to Watch (Bike Rental App)
FRONTEND SPECiFIC:-
1.Response Time (Latency)->API kitni fast respond kar rahi hai-> ❌ Slow = bad UX
2.no of request per second
3.error rate-> Kitni requests fail ho rahi hain
4.Availability

BACKEND SPECIFIC:-
1.DB performance- Slow queries,Connection count,Query latency

EXTERNAL SERVICE:-
1.Payment gateway latency
2.Notification service failures

INFRASTRUCTURE METRICS
1.CPU usage
2.Memory usage
3.Disk I/O

Example:
Memory leak → app crash

==> successful bookings / total attempts
double booking
payment failure
bike availabity %
Battery-related Alerts --> Low battery bikes count, Missed notifications

--------------------------------------------------------------------------------------------------------------------------

5. Design a scalable bike-rental backend: components, data flow, caching, push notifications.
ANS:-
what should be its goal
1.handle many user at a time
2.no double booking of any bike
3.is fast
4.payment atomicity(fullfill or rollback)
5.can scale when traffic increase

🧩 High-Level Architecture (Big Picture)

Client (App/Web)
     ↓
API Gateway / Load Balancer
     ↓
Backend Services
     ↓
Database + Cache
     ↓
Notifications / Background Jobs

1️⃣ Core Components (Backend Services)
🔹 1. User Service

Handles:

Signup / login

JWT auth

User profile

Tech:

Node.js + Express

JWT + Refresh tokens

🔹 2. Bike Service

Handles:

Bike listing

Location (lat/long)

Battery level

Availability

Important:

Geo queries (find nearby bikes)

Cached heavily (read-heavy)

🔹 3. Booking Service (MOST IMPORTANT)

Handles:

Bike booking

Concurrency control

Prevent double booking

Key rules:

Atomic operations / transactions

Status flow: AVAILABLE → BOOKED

🔹 4. Payment Service

Handles:

Payment initiation

Payment confirmation (webhooks)

Refunds

Notes:

External gateway (Stripe/Razorpay)

Must be idempotent

🔹 5. Notification Service

Handles:

Push notifications

SMS / email

Alerts (battery low, booking confirmed)

Runs mostly async


2️⃣ Data Flow (Booking Example)
🧭 User books a bike
1. User clicks "Book"
2. Request → API Gateway
3. Booking Service:
   - Checks bike availability
   - Locks / updates bike
4. Booking saved in DB
5. Cache updated
6. Notification sent
7. Response to user

🔐 Preventing Double Booking

Approach:

Atomic DB update or transaction

IF bike.status == AVAILABLE
→ BOOK
ELSE
→ FAIL


4️⃣ Caching Strategy (VERY IMPORTANT)
🔹 Why caching?

Bike listing is read-heavy

DB calls are expensive

Faster response time

Background Jobs (Async Processing)

Used for:

Battery level checks

Auto-release expired bookings

Sending notifications

Cleanup tasks

Tools:

Cron jobs

Queue (Bull / RabbitMQ / SQS)

--------------------------------------------------------------------------------------------------------------------------

6. How to design real-time updates to show bike availability on the map (WebSockets vs polling).
ANS:- 
User app me map kholta hai 🚲
Aur usko real-time me dekhna hai:
Kaunsi bike AVAILABLE hai
Kaunsi BOOK ho gayi
Kaunsi move ho rahi hai

Matlab:
Map ko automatically update hona chahiye.

two main approach 
1.polling
2.webSockets

1️⃣ Polling (Simple but heavy)
🧠 What is polling?
=> App har X seconds me server ko puchta hai:
“Koi update hai?”

Every 5 sec:
GET /bikes?city=bangalore

Client
   ↓
API call every 5 seconds
   ↓
Server sends updated bike list

✅ Pros

Easy to implement
No special setup
Works everywhere

❌ Cons

Wasteful requests
Delay (max 5 sec lag sakta hai)
High traffic load if users zyada ho

==> scaling problem ho sakti hai like agr user 10k hai to har 5 sec me 10k requestj awegi server ko to isse server load badh jaega



2️⃣ WebSockets (Real-time solution)
🧠 What is WebSocket?

Client aur server ke beech permanent connection ban jaata hai.
Server directly bolta hai:
“Bike updated!” 🚲

Client connects via WebSocket
      ↓
Connection stays open
      ↓
Server pushes updates instantly

✅ Pros

no unnesseray api call
real time data 
better UX

❌ Cons

bit complex
need scaling strategy
continuous connection user memory 


DB ka design aisa rakheneg ki usme status hoga,lication me coordinates honge latitide and longitude ke sath

==>when user book
user book the bike 
booking saved
DB updated like status of that bike will be booked
event emmited
websocket pushes update

so rather than sending update to everyone,it will update only to banglore user

when app size is small then in that case we have to use polling instead of websocket.

for scalling, we will use redis,load balancer



--------------------------------------------------------------------------------------------------------------------------

7. How to handle surge traffic in a city (auto-scaling, queueing requests).
ANS:- 


🎯 Problem: Surge Traffic in a City

Example:

8–9 AM or 6–8 PM
One city suddenly gets 10x traffic

Many users:
Open map
Search bikes
Try booking same bikes

👉 Risks:
Server overload ❌
Slow APIs ❌
Double booking ❌

High-Level Strategy (Yaad rakhna)
=> serverLess architecture - this follow horizontal scaling support 
=> queueing request
      100 users try to book same bike
      You cannot process all at once
   👉 Instead:
      Put requests in a queue and process safely.
   Tool--
    -Redis Queue
    -AWS SQS
  we use queueing request to prevent race around condition
=> caching and rate limiter -> api call ka rate limit set kr denge
   redis se caching krenege to reduce server load


--------------------------------------------------------------------------------------------------------------------------

8. Choosing data stores: fast read paths for map-based queries (Redis, in-memory caches, CDNs).
ANS:- Ye map-based apps (bike rental, delivery, Uber-type) ke liye performance-critical decision hota hai.

we perform write operation in DB and read operation from redis/CDN

data storage option:-
1.Redis
2.CDN- static data(bike image,css,video,map tile(same as google map))
3.in-memory(app memory) - data will be stored in RAM and  this is used for very small scale project aur refresh krne par cache remove ho jaega

--------------------------------------------------------------------------------------------------------------------------

9. Payment integration: steps to integrate gateway (webhook handling, idempotency).
ANS:- 
Payment integration sirf “pay button” lagana nahi hota — interviewers yahin dekhte hain ki tum real-world failures samajhte ho ya nahi.

Main step-by-step, easy language, aur Razorpay/Stripe–generic flow me samjha raha hoon.

1.user click pay
2.backend create order
3.open payment gateway ui
4.user complete payment
5.gateway sends webhook reuquest and signautre verification 
   Webhook = payment gateway ka server tumhare server ko khud call karta hai
   aur bolta hai: “Payment sach me success hua hai.”
   Webhook bina signature verification ke incomplete hai.
6.backend verfiy by signature verification and then update db and then send successfull msg


🧠 Webhook ka internal flow (exact)
Webhook request aayi
   ↓
Signature verify ki  ✅
   ↓
Agar valid ho
   ↓
Payment / booking update



🧠 Idempotency ka simple meaning
Same request agar baar-baar aaye,
toh result hamesha ek hi ho.

Matlab:
Ek kaam dobara-dobara effect na kare

✅ Idempotency ka solution

Ek unique ID se check karo:
“Ye kaam pehle ho chuka hai ya nahi?”

Agar ho chuka hai → ignore karo


🧩 Real-life analogy (BEST)

ATM example 🏧

Tumne withdraw kiya
Cash mil gaya
ATM ko confirmation nahi mila
ATM retry karta hai

Idempotency bolta hai:
“Is transaction ID ka cash pehle hi diya ja chuka hai — dubara mat do.”


simple hai ki gateway har payment ka ek unique id deta hai aur ham usko apne db me store kr lete hai to jab bhi webhook ata hai to ham phle check krte h ki vo id hamare db me exist to nhi krti aur agr nhi krti hogi to hi payment proceed krmege otherwise ham msg de denege ki payment allreay succeefull ho chuka hai. 

--------------------------------------------------------------------------------------------------------------------------

10. How to design geo-partitioning for multi-city deployment and reduce latency.
ANS:- geo partitioning ka matlb hai ki data traffic ko region ya location ke base pe alag alag rkhna taaki..
latency kam ho 
booking process fast ho 
ek region ya area ke traffic se dusre area pe koi effect na pade.

geo-partitioning ka simple solution hai ki kisi region ya area ka data aur service uske paas rakho.

we will do it using geo-aware load balancer. jisse jo bhi city hoga uske pas usi city ka data ,service na caching hoga.

isse failure isolation hoga. like mumbai me koi issue ata h to banglore ko affect nhi krega.

🔹 Geo-aware Load Balancing

Tools:
Route53 (Geo DNS)
Cloudflare
Global Load Balancer


--------------------------------------------------------------------------------------------------------------------------

11. Create an API endpoint to list bikes with pagination and filters (city, battery level).
ANS:-

   /api/bikes?city=Banglore&battery=50&page=1&limit=10

   here skip =(page-1)*limit;

   its db will be 

const mongoose=require('mongoose');
const bikeSchema=new mongoose.Schema({
    name:String,
    City:String,
    batteryLevel:Number
});
module.exports=mongoose.model('bike',bikeSchema);

then it controller will be like bellow=====>>>>

const bike=require('../model/bike');
const bikeController=async(req,res)=>{
const {City,bateryLevel,page=1,limit=10}=req.query;
const filter={};
if(City){
    filter.City=City;
}
if(bateryLevel){
    filter.batery=Number(bateryLevel);
}
let skip=(page-1)*limit;
const BikeData=await bike.find(filter).skip(skip).limit(Number(limit));
res.status(200).json({
    success:true,
    data:BikeData
})
};

frontend call will be like bellow, in which we send all the data in params
useEffect(() => {
    axios.get("/api/bikes", {
      params: {
        city: "Mumbai",
        battery: 40,
        page: 1,
        limit: 5
      }
    }).then(res => {
      console.log(res.data);
    });
  }, []);



--------------------------------------------------------------------------------------------------------------------------

12. Fix a CORS error in a local dev setup (explain why browser throws it and how to fix server-side).
ANS:- 
 -insall cors
 -app.use(cors({
    origin:[
          "localhost/3000",
          "https://devconnectui.onrender.com",
          "http://localhost:5173",
          "https://devtinderui-4vjs.onrender.com"
          ]
    }));

 

--------------------------------------------------------------------------------------------------------------------------

13. Given a JSON of bookings, return total revenue per day (write code).
ANs:- data will be like
const data=[
    {date:'12/09/2026',value:100},
    {date:'12/09/2026',value:100},
    {date:'14/09/2026',value:100},
    {date:'14/09/2026',value:100},
    {date:'13/09/2026',value:100},
    {date:'13/09/2026',value:100},
    {date:'13/09/2026',value:100},
    {date:'16/09/2026',value:100}
];

function findRevenue(data){
    const result={};
    data.forEach((data)=>{
        const date=data.date;
        const value=data.value;
        if(result[date]){
            result[date]+=value;
        }
        else
        result[date]=value;
    })
    return result;
}

console.log(findRevenue(data));


--------------------------------------------------------------------------------------------------------------------------

14. Small DSA: implement search for matching items from array (filter by prefix).
ANs:- 
const arr=["apple","banana","fruit","ba"];
const pre="ba";
function findPre(arr,pre){
const ans=arr.filter(data=>data.startsWith(pre));
return ans;
}
  console.log(findPre(arr,pre));

--------------------------------------------------------------------------------------------------------------------------

15. Debugging task: app is slow when rendering 1000 items — propose solutions.
Ans:- 1.pagination
      2.memoisation using useMemo , useCallabck + react.memo
      3.Lazy load
      4.virtualization(screen pe jo hoga vahi dikhega ,mtlb jo cheeech dikh nhi rhi vo nhi dikhegi like only 10 bike screen pe visible h to bas vhi dikhega aur vaki scroll krne par dikhega)
      5.keep static data in CDN server

--------------------------------------------------------------------------------------------------------------------------

16. Short SQL problem: write a query to get counts per user / per bike.
Ans:- 
data structure would be like
id.  user_id  bike_id

count per user
select user_id,COUNT(*) as riderCount from rider group by user_id

count per bike
select bike_id,COUNT(*) as riderCount from rider group by bike_id

--------------------------------------------------------------------------------------------------------------------------

17. Short Node task: write Express middleware for auth token validation.
ANS:- 
const jwt=require('jsonwebtoken');
const Authorization=(req,res,next)=>{
    try{
         const token=req.header.authorization;
    if(!token)
    return es.status(401).json({message:"toekn is not present"});

    const finalToken=token.split(" ")[1];
    const autho=jwt.verify(token,process.env.secretKey);
    req.user=autho;
    next();
    }
    catch(err){
        console.error("there is some error",err);
    }
};
module.exports=Authorization;

in the api end point

const Authorization=require('./auth');
Rounter.get("/bike",Authorization,(req,res)=>{
    res.send("authorised");
});
module.exports=Router;

--------------------------------------------------------------------------------------------------------------------------

18. Difference between class components and functional components; why hooks?
ANS:- 
class compoent is a component in which code is older way of writting react code in which everything is based on classes while functional compeont is newer way of writting code in react.
 in class compent managing life cycle method is complex and class compoent code is complex .
 in functional compoent ,hooks is introduced to manager lifecycle method. like useefect se phle timer banante h to creation ho gaya lifecycle method ka aur usko phir se return kr dete h taki next cycle me uska timer hata saker to ye lifecycle deletion ho gya.
 claas compent me this bht confusiing hota hai jabki functional me nhi .
 class compo me code reuse krna thoda muskil tha.


 | Feature     | Class Component  | Functional Component |
| ----------- | ---------------- | -------------------- |
| Syntax      | Complex          | Simple               |
| State       | `this.state`     | `useState`           |
| Lifecycle   | Multiple methods | `useEffect`          |
| `this`      | Required         | ❌ Not needed         |
| Code reuse  | Hard             | Easy (custom hooks)  |
| Performance | Same             | Same                 |


--------------------------------------------------------------------------------------------------------------------------

19. How would you design a “bike listing” component that lazy-loads images?
ANS:- 
  1.use loading='lazy' in image. iska mtlb hai ki. “Image tab load karna jab viewport ke paas aaye”.
  like:- 
  function BikeCard({ bike }) {
  return (
    <div className="bike-card">
      <img
        src={bike.image}
        alt={bike.name}
        loading="lazy"
        width="200"
        height="150"
      />
      <h3>{bike.name}</h3>
      <p>City: {bike.city}</p>
    </div>
  );
};

“I design the bike listing using a parent BikeList and reusable BikeCard components. To optimize performance, I lazy-load images using the browser’s native loading='lazy' attribute, so images load only when they come into view. For larger lists, I can further optimize using Intersection Observer.”
bellow is the intersection observer code.

import { useEffect, useRef, useState } from "react";
function LazyImage({ src, alt }) {
  const imgRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    });

    observer.observe(imgRef.current);
  }, []);

  return (
    <img
      ref={imgRef}
      src={visible ? src : ""}
      alt={alt}
    />
  );
}


--------------------------------------------------------------------------------------------------------------------------

20. Explain React Router: dynamic routes, route params, nested routes.
ANS:- react router is used for navigating fro one page to another page in react using react library react-rounter-dom.

dymanic rounting means when one part of the route is dynamic oir chnageable like
path='/bike/:id'

/bike/101
/bike/1019

dynamic routing ke andar dynamic value jo bhejte h uske hi route params bolte h.

ham us route param ko useParam hook ki help se access kr skte hai

const {useParam} from 'react-router-dom';
function app(){
 {id}=useParam();
 return(
  <>THis is: {id}</>
 )
}
export default app;


nested routing me ek router ke andar sub router daal dete hai like bellow

/dashboard
/dashboard/profile
/dashboard/settings

<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>

aur ye tbhi kam krega jab ham dahsboard page me <Outlet/> decalre karenge return me

import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}

jab ham navbar aur footer fix rkhna chah rahe ho sabme to simply us navbar aur footer ko dahsboard me Outlet ke upar aur neeche declare kr denge jisse navbar aur footer sare page me fixed dikhne lagega.

--------------------------------------------------------------------------------------------------------------------------

21. How to implement optimistic UI updates for booking a bike (UX + error rollback).
ANs:-  
optimistic ui ka mtlb hai ki user ke action se pahle hi success dikha dena.
that mean ki without server ke response ke hi dikha de hi bike successfully book ho gayi hai.

aur agr API fail ho jae to rollback(undo) kr dete hai .

normally kya hota hai ki user book bike button pe click krta hai phir api call hota hai aur phir api response ke aane ka wait krta hai aur response aane par success ka msg  deta hai ,like bike booked succesfully.
but ye bad UX represent krta hai kyui isme user ka wait time jada hoga.

to ham krenge aisa ki user book bike botton pe click krnega to simply ham instantly success msg de deneg aur background me. api call hota rahega aur agr api fail hota hai to phir ham rollback kr denge aur msg dikha dnege ki failed in bike booking.
this represents best UX as user will not have to wait for api response.

🔁 Optimistic UI Flow (Very Important)
1️⃣ User clicks Book
2️⃣ UI me bike = BOOKED (optimistic update)
3️⃣ API call sent
4️⃣ If success → keep UI
5️⃣ If error → rollback UI + show error



import React,{useState} from "react";
import './App.css';

function App(){
const [bikes,setBikes]=useState([
  {id:1,name:"yulu1",book:false},
   {id:2,name:"yulu2",book:false},
    {id:3,name:"yulu3",book:false},
     {id:4,name:"yulu4",book:false},
      {id:5,name:"yulu5",book:false},
       {id:6,name:"yulu6",book:false},
]);

function fakeBikeBook(id){
   setTimeout(()=>{
    return new Promise((resolve,reject)=>{
      Math.random()>0.2?resolve():reject()
    })
   },1000);
};

 async function handleBikeBook(id){
   const prevBike=[...bikes];
   setBikes(bikes=>
    bikes.map(bike=>
      bike.id===id
      ?{...bike,book:true}
      :bike
    )
  );
   try{
    await fakeBikeBook(id);
    alert("bike Booked successfully");
   }
   catch{
    setBikes(prevBike);
    alert("Booking failed. Rolled back!");
   }
};
return(
  <div>
    <h2>bike list</h2>
    {bikes.map(data=>(
      <div key={data.id}>
          <h3>{data.name}</h3>
          <button
             disabled={data.book}
             onClick={()=>handleBikeBook(data.id)}
          >
            {data.book?"booked":"book bike"}
            </button>
      </div>
    ))}
  </div>
)
};
export default App;




--------------------------------------------------------------------------------------------------------------------------

22. How do you handle form validation and accessibility in React?
ANS:- there is many wasy to handle form validation 
   1.manually using controllered component
   2.using in-build libraries

import React,{useState} from "react";
function App(){
  const[errors,setErrors]=useState({});
  const [form,setForm]=useState({
   userName:"",
   password:""
  });

function  handleChnage(e){
  setForm({...form,[e.target.name]:e.target.value})
} ;
function handleSubmit(e){
  e.preventDefault();
  const error={};
  if(!form.userName)
    error.userName="this field is required";
  if(!form.password)
    error.password="this field is required";
  setErrors(error);
  if(errors)return;
  else
  alert('form submitted asuccefully')
};



return (
<form onSubmit={handleSubmit}>
  <label>user Name</label>
  <input 
  type="text"
  name="userName"
  value={form.userName}
  onChange={handleChnage}
  />
  {errors.userName && <p>{errors.userName}</p>}
  <label>password</label>
  <input  type="password"
  name="password"
  value={form.password}
  onChange={handleChnage}
  />
{errors.password && <p>{errors.password}</p>}
<input type="submit" />
</form>
);

};
export default App;

email and password validation 

password validation 

What This Means:

(?=.*[a-z]) → at least one lowercase
(?=.*[A-Z]) → at least one uppercase
(?=.*\d) → at least one number
(?=.*[@$!%*?&]) → at least one special char
{8,} → minimum 8 characters

✅ React Example Validation
function validatePassword(password) {
  if (!password) return "Password is required";

  if (password.length < 8)
    return "Password must be at least 8 characters";

  if (!/[A-Z]/.test(password))
    return "Must contain one uppercase letter";

  if (!/[a-z]/.test(password))
    return "Must contain one lowercase letter";

  if (!/[0-9]/.test(password))
    return "Must contain one number";

  if (!/[!@#$%^&*]/.test(password))
    return "Must contain one special character";

  return "";
}


email validation 
A valid email generally must have:

✅ Some text before @
✅ @ symbol
✅ Domain name
✅ Dot (.)
✅ Domain extension (like .com, .in)

function validateEmail(email) {
  if (!email) return "Email is required";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return "Invalid email format";
  }

  return "";
}

--------------------------------------------------------------------------------------------------------------------------

23. How to implement infinite scroll or “load more” for lists?
ANS:- 
infinte scroll ya load more ke 3 ways hai 1. pagination se jisme load more pe click hon har baki data at hai 2.auto scroll using using joki insta utube me use hota hai jisme ham manually check krte h ki kahi hamara screen heigh jo h vo data display wale height se jada to nhi ho rhi agr hgo rhi to us case me kuch fixed px. height phle hi ham data ko load kr denge 3.ham insection observer ki help se karneg jisme ham ek dummy div bottom pe rkh deneg phir insection observer ki help se karnege ki kya ham us div tk pahich gye h kyaaur agr ha to us case me data load hone ka api call ho jaega.


   1.pagination(doing manuaaly)
         Idea (Simple)
         First load 10 items
         User clicks Load More
         Load next 10 items


import { useEffect, useState } from "react";
function LoadMoreList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchItems(page);
  }, [page]);

  const fetchItems = async (pageNo) => {
    const res = await fetch(
      `/api/items?page=${pageNo}&limit=10`
    );
    const data = await res.json();

    setItems(prev => [...prev, ...data]);
  };

  return (
    <div>
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}

      <button onClick={() => setPage(page + 1)}>
        Load More
      </button>
    </div>
  );
}

export default LoadMoreList;    
   2.Infinite Scroll (AUTOMATIC)- autoScroll using scroll
        🧠 Idea 
          User scrolls down
          When near bottom → load more automatically
          No button
          Used in:
            Instagram
            LinkedIn
            Twitter



            import { useEffect, useState } from "react";

function InfiniteScrollList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchItems(page);
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200;

      if (nearBottom) {
        setPage(prev => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchItems = async (pageNo) => {
    const res = await fetch(
      `/api/items?page=${pageNo}&limit=10`
    );
    const data = await res.json();

    setItems(prev => [...prev, ...data]);
  };

  return (
    <div>
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </div>
  );
}

export default InfiniteScrollList;



3. Infinite Scroll with Intersection Observer (BEST PRACTICE)
     🧠 Idea
      Watch a sentinel div at bottom
      When it becomes visible → load more

import { useEffect, useRef, useState } from "react";

function InfiniteScrollIO() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef();

  useEffect(() => {
    fetchItems(page);
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPage(prev => prev + 1);
        }
      },
      { threshold: 1 }
    );

    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, []);

  const fetchItems = async (pageNo) => {
    const res = await fetch(
      `/api/items?page=${pageNo}&limit=10`
    );
    const data = await res.json();

    setItems(prev => [...prev, ...data]);
  };

  return (
    <div>
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}

      <div ref={loaderRef}>Loading...</div>
    </div>
  );
}

export default InfiniteScrollIO;

--------------------------------------------------------------------------------------------------------------------------

24.How to unit test a React component (what to assert, tools you’d use).
ANS:- Unit testing ka matlab,ek single component ko isolation me test karna bina poori app chalaye.

✅ 1️⃣ Jest
Test runner
Assertions (expect())

✅ 2️⃣ React Testing Library (RTL)
Component render karne ke liye
User ke jaise test likhne ke liye

“I use Jest with React Testing Library to test components from the user’s perspective.”

To check whether the actual result matches the expected result.

function add(a, b) {
  return a + b;
}

Now in unit test:

test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});

Here bellow one is assert :

expect(add(2, 3)).toBe(5);

--------------------------------------------------------------------------------------------------------------------------

25. Explain handling file upload (images) from React to backend (presigned URLs vs multipart).
ANS:- 
   User React app se:

Image select karta hai

Backend / storage (S3, Cloudinary, etc.) me upload hoti hai

👉 Do common approaches hain:
1️⃣ Multipart upload (file goes via backend)
2️⃣ Presigned URL upload (file goes directly to storage)


🔹 1️⃣ Multipart Upload (Traditional Way)
❓ Kya hota hai?
Image pehle React → Backend jaati hai
Backend us image ko store / forward karta hai

🔹 2️⃣ Presigned URL Upload (Modern & Scalable)
❓ Kya hota hai?
Backend sirf temporary upload URL deta hai
Image direct storage (S3) pe upload hoti hai


multipart easy to implement hota h but backend(server) pe load badha deta hai.


“For file uploads, I use multipart uploads when the application is simple and files are small. For scalable systems, I prefer presigned URLs where the backend generates a temporary upload URL and the frontend uploads the file directly to cloud storage, reducing server load and improving performance.”

--------------------------------------------------------------------------------------------------------------------------

26. Implement rate limiting / protect endpoints from abuse — approaches and middleware.
ANS:- 

🔹 1️⃣ IP-based Rate Limiting (Most common)
Client ke IP address ke basis par limit
Easy & effective

👉 Used for:
Public APIs
Login endpoints

🔹 2️⃣ User-based Rate Limiting
Logged-in user ke userId ke basis par
JWT ke saath use hota hai

👉 Used for:
Authenticated APIs
Paid users vs free users

🔹 3️⃣ API-key based Rate Limiting
Har client ko ek API key
Enterprise / partner APIs

🔹 4️⃣ Distributed Rate Limiting (Advanced)
Redis / cache use karke
Multiple servers ke liye
👉 Used in:
Production
Microservices

✅ Most Common Solution: express-rate-limit


Step 2: Create Rate Limit Middleware
const rateLimit = require("express-rate-limit");

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,                // max 100 requests
  message: {
    error: "Too many requests, please try again later."
  }
});
🔹 Step 3: Apply Middleware
👉 Global (all APIs)
app.use("/api", apiLimiter);
👉 Or Specific Route (Best practice)
app.post("/api/login", loginLimiter, loginController);
🔹 Login-specific limiter (Interview Bonus)
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, // only 5 login attempts
  message: "Too many login attempts"
});



🚀 Advanced: Redis-based Rate Limiting (Production)

⚠️ Important for multiple server instances

const RedisStore = require("rate-limit-redis");

const limiter = rateLimit({
  store: new RedisStore({
    sendCommand: (...args) => redisClient.call(...args),
  }),
  windowMs: 15 * 60 * 1000,
  max: 100
});

👉 Sab servers same Redis use karte hain
👉 Consistent limits


“To protect APIs from abuse, I implement rate limiting using middleware like express-rate-limit. I apply stricter limits on sensitive endpoints like login and use Redis-backed rate limiting in production to handle distributed systems.”


--------------------------------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------------------------------



--------------------------------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------------------------------



--------------------------------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------------------------------



--------------------------------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------------------------------



--------------------------------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------------------------------



--------------------------------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------------------------------



--------------------------------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------------------------------



--------------------------------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------------------------------



--------------------------------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------------------------------



--------------------------------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------------------------------



--------------------------------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------------------------------



--------------------------------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------------------------------



--------------------------------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------------------------------



--------------------------------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------------------------------



--------------------------------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------------------------------



--------------------------------------------------------------------------------------------------------------------------

























