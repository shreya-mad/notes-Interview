what is docker:- docker is a tool that let you run your application in small portable box called container.
Docker is a tool that packages your application and all its dependencies into a container so it runs the same everywhere.

that box conatins
- your code
- node js
- database
- all dependency
- any other thing needed to run the application

just imagine that your one application is running on your computer peefectly but when your friend tried to run it on his computer then thats not running and thows some error...
- node version mismatch
- postGre not installed
- some libraries are missing

docker comes to solve the famous problem of "it is working on my machine"

docker solves this:- 
put everything in container and it will work the same on every computer.


🧳 A suitcase
You pack everything inside it
You can carry it anywhere
And it works the same everywhere

Docker container = suitcase for your app.


HOW DOCKER WORKS
-we write instruction in file named dockerFile
-docker create and image
-that image runs as container
-container runs your app


###### without docker, you need to
-install postgre
-node 
-all required libraries
-set environment varible
-start server

###### with docekr , you need to run only
-docker-compose up

docker-use docker software
compose-its docker feature.Ek saath multiple cheeze chalao. Ex: 1.Ek API,  2.Ek Database--> Dono ko ek saath start karega.
up-start all the services

🎯 Toh “docker-compose up” ka Full Meaning:

Docker ko bolo ki docker-compose.yml file padhe
Usme jo services likhi hain (API + Database)
Unhe build kare
Aur unhe start kare

And automatically:
Database starts
API starts
Everything connects
App runs


🔥 Very Important

Docker is NOT:

A programming language
A framework
A database
It is a container tool.

Dockeer run in every machine irrespective of operating system. wether it is running on windows,linux or mac.

VirtualBox vs Docker ===>>
VirtualBox ek software hai jo tumhare computer ke andar poora ek naya computer bana deta hai.
Isko bolte hain 👉 Virtual Machine (VM)

🧠 Example

Tum Mac use kar rahi ho.
But tumhe Windows chahiye.
Toh VirtualBox me:
Windows install karo
Wo Windows tumhare Mac ke andar chalega
Bilkul real Windows jaisa.

📦 What is Docker (Quick Reminder)

Docker poora naya computer nahi banata.
Wo sirf:
Tumhari app ko chalane ke liye chhota environment banata hai.
Poora OS nahi.
Docker me extra OS layer nahi hoti.
Production me companies Docker use karti hain, VirtualBox nahi.

| Feature              | VirtualBox          | Docker             |
| -------------------- | ------------------- | ------------------ |
| Kya banata hai?      | Poora naya computer | Sirf app container |
| OS install hota hai? | Haan                | Nahi               |
| Heavy ya light?      | Heavy               | Light              |
| Speed                | Slow                | Fast               |
| RAM use              | Zyada               | Kam                |
| Use case             | Full OS testing     | App deployment     |



jab ham apna application ko containarise karte hai to phir ham isko docker registry pe psuh kr dete hai jaise apne code ko ham github pe push krte hai aur phir jiskp bhi vo chiaye vo vaha se pull kr egasimilar to pulling from github.
simply docker registry docker ka github hai.



STEP TO SET DOCKER IN OUR PROJECT
-we csn use inbuild node project by just running command docker pull node so this will pull node and then we have to simply run it by docker run -it node

-if we want to create container for our own project then we have to firstly crate project in our local ,lik we have created server 
  -> we make a fil in our porject with the name Dockerfile without any extention so it will be created with ship logo. then we will write code of what we want to use like 
    FROM ubuntu:latest  or  FROM node:latest
  -> uske bad hame Dockerfile me hi sari file ko copy krnaa padega like
     index.js,package.json, and all rermaing required files.
     COPY index.js /home/app/index.js 
     package.json /home/app/package.json
       yaha hamne apne project ke index.js ko docker ke hom ke andar app ke andar index.js me copy krdi hai aur same hi ham package.json ke sath karnege
  -> then ham work directory batayernge,mtlb ki docker me kis work dir me jana hai 
     WORKDIR /home/app
  ->phir ham us working directory me kya run krenge vo batayenge 
      RUN npm install
  ->phir final kya run krna hai vo hma CMD me denege
     CMD ['node','src/index']


     
              



