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
ANS:- /api/bikes?city=Banglore&battery=50&limit=10&page=1

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



























