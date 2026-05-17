# 📘 Next.js Course Overview

## 🚀 What is Next.js?

Next.js is a **full-stack framework** built on top of React.js and Node.js.

- The **frontend part** is based on React  
- The **backend part** runs on Node.js  

---

## 🌍 Industry Usage

Companies like:

- Apple  
- Netflix  
- Walmart  

use Next.js in production.

Even the official React documentation recommends using Next.js when building modern React applications.

---

## ⚡ Rendering Techniques in Next.js

When we use React with tools like Vite, we mostly get **Client-Side Rendering (CSR)**.

But Next.js provides **multiple rendering options**:

- Server-Side Rendering (SSR)  
- Client-Side Rendering (CSR)  
- Static Site Generation (SSG)  

👉 Because of this, performance improves significantly.

---

## 🔍 SEO Benefits

Projects built with Next.js have **excellent SEO support**.

👉 That’s why:
> For projects where SEO matters, developers prefer Next.js.

---

## 🧑‍💻 Language Support

Next.js supports both:

- JavaScript  
- TypeScript  

👉 In this course:
- Basics will be covered in **JavaScript**
- Projects will be built using **TypeScript**

---

## 🛣️ Routing in Next.js

One of the best features of Next.js is **routing**.

### 🔸 In React:
- You need to install `react-router-dom`
- Write extra routing code

### 🔸 In Next.js:
- No extra setup required ❌  
- Uses **file-based routing** ✅  

👉 Routing is handled using the **App Router**

---

## ⚠️ Important Note

> **If you want to study Next.js only for frontend, then study up to Section 5.**

---

## 📚 Agenda of This Course

(To be covered in upcoming sections)

# Next.js Course Syllabus

## Section 1: Introduction to Next.js
1. Next.js Course Syllabus
2. What is Next.js?
3. Creating Our First Next.js App
4. Difference Between React.js and Next.js

---

## Section 2: Routing in Next.js
1. Creating Routes with the App Router
2. Understanding Layouts: layout.js and page.js
3. Nested Routing with App Router
4. Dynamic Routes and Route Groups
5. Catch-All and Optional Routes
6. Building Reusable Layouts using layout.js File
7. Metadata API in Next.js
8. Custom 404 Page in Next.js
9. What are Route Groups?
10. What are Private Routes?

---

## Section 3: Rendering Paradigms in Next.js
1. Understanding Different Rendering Paradigms (SSR & CSR)
2. Static vs Dynamic Rendering
3. Static Site Generation (SSG)
4. Incremental Site Regeneration (ISR)
5. Server Side vs Client Side Components
6. Hydration Demystified: Bringing Pre-Rendered Pages to Life
7. Why Hydration Error Comes?

---

## Section 4: Data Fetching and State Management
1. Data Fetching in the App Router
2. Fetching Server-Side Data with React Server Components
3. Managing State with React Hooks and Context
4. Integrating Third-Party Libraries (Redux)

---

## Section 5: Error Handling in Next.js
1. Error Handling in with `error.js` File
2. How to Recover from Errors Without Hard Reload?
3. Error Handling in Nested Routes
4. Handling Client Side Exceptions
5. Global Error Handling in Next.js

---

## Section 6: Different Ways of Styling in Next.js
1. Adding Styles In Next.js Apps Using CSS
2. Using CSS Modules In Next.js
3. Using SCSS In Next.js
4. Setting Up `Tailwind v4` In Next.js
5. Setting Up `Tailwind v4` In Existing Next.js Project
6. Image Optimization In Next.js

---

## Section 7: Backend Development with Next.js
1. Writing Backend Code In Next.js
2. Creating `GET` Route Handler In Next.js
3. Dynamic Route Handler In Next.js
4. Understanding Request Object In Next.js
5. Handling `POST` Request In Next.js
6. Implementing Edit Todo Functionality
7. Handling `DELETE` Request In Next.js
8. Integrating `GET` And `POST` Todo API
9. Integrating `PUT` And `DELETE` Todo API

---

## Section 8: Working with MongoDB in Next.js
1. Connecting MongoDB in Next.js
2. Creating Mongoose Model in Next.js
3. MongoDB CRUD Operations in Next.js: Create and Read
4. MongoDB CRUD Operations in Next.js: Update and Delete

---

## Section 9: Mastering Authentication in Next.js
1. Understanding Auth Flow In Next.js
2. Implementing Register User In Next.js
3. Working With Cookies In Next.js
4. Implementing Login User In Next.js
5. Protecting Todo Endpoints With Reusable Functions In Next.js
6. Signing Cookies In Next.js
7. Session Based Authentication in Next.js
8. Adding User Profile Feature
9. Implementing Logout Functionality
10. Hashing Passwords in Next.js

---

## Section 10: Deployment and Production
1. Preparing Our Next App for Deployment
2. Managing Environment Variables
3. Custom Domain Setup for Our Next.js Application

---

## Section 11: Mastering Server Actions in Next.js
1. What are Server Actions in Next.js?
2. Using Server Actions in Client Component
3. Understanding `useActionState` Hook
4. Calling Server Action Manually
5. Form Validation with Zod
6. Adding Register Feature Using Server Action
7. Implementing Login Feature Using Server Action
8. Using Server Actions without Forms

---

## Section 12: Advanced Next.js Features
1. Understanding Middlewares in Next.js
2. Rewrite a Request using NextResponse
3. What is Edge Runtime in Next.js?
4. Internationalization (i18n) in Next.js
5. Implementing Google Login with `NextAuth.js`

---

## Section 13: Industry Level Next.js Project Setup with TypeScript
1. ESLint Deep Dive with Next.js
2. Using ESLint as Formatter in Next.js
3. Prettier Setup in Next.js
4. Setting Up Lint-Staged in Next.js
5. Husky Pre-Commit Hook Setup in Next.js
6. Course Completed

---  

********* Vercel(deployemnt comapnay) created NextJs ***********
this is open source framework

# Next.js Overview

## What is Next.js?

- **React and node based Open-Source Full-Stack Framework**: For building fast, production-ready web.
- **Hybrid Rendering**: SSR, SSG, ISR, CSR support.
- **Developer-friendly**: Simplified routing, built-in optimizations.
- **Developed By**: Vercel


---

## Key Features
- **File-based Routing**: Routes match file structure.
- **Image Optimization**: Lazy loading, resizing, WebP support.
- **API Routes**: Backend capabilities within the app.
- **SSR**: Server-rendered pages for SEO and speed.
- **SSG**: Static content at build time.
- **ISR**: Update static pages without full rebuilds.
- **CSR**: UI interaction
- **CSS/Sass Support**: Global styles, CSS modules.
- **TypeScript**: Built-in support.
- **Middleware**: Pre-render logic.
- **Edge/Serverless Deployment**: Scalable, fast.

---


## Benefits

- **SEO Optimized**: Pre-rendered pages for better indexing.
- **Fast Performance**: Faster TTFB(time to first bind), lazy loading.
- **Better UX**: Seamless navigation, Fast Refresh.
- **Scalable**: Hybrid rendering, serverless-ready.
- **Developer Productivity**: Easy setup, rich ecosystem.
- **Flexibility**: Custom configs, headless CMS support.
- **Rich Ecosystem**: Large community, React compatibility.

---

## Use Cases

- **E-commerce**: SEO, fast loading boosts conversions.
- **Content Sites**: Blogs, docs with SSG/ISR.
- **Enterprise Apps**: Scalable with APIs and hybrid rendering.
- **Real-time Apps**: SSR + CSR for interactivity.

---

## Conclusion

Next.js = Fast, flexible, production-ready React framework. Ideal for SEO, performance, and scalable web apps.


## first next app 

it need node installed in our project

so install nextjs by bellow command
- npx create-next-app@latest

our main project will be inside app folder provided after installing next js project.

if we have installed any extestion in our browser ,which is trying to modify dom then in tht browser this next  app will not run.
as utuber open it in edge and he installed mode changing extension on the brouwser that why next js defalt application was throwing error(hydration error).

this is not issue of next js , this error comes for all the server side rendered framework.

## difference between react app using vite and nextJs application

react with vite used CSR while nextJs application used SSR. you can check this by checking what is returned by server by going to view page source  of that application. you can see whole html content returned in next js application while blank html in case of react application using vite.

react with vite ke case me ham network section me jake bhi check kr skte hai ki kaun kaun si file server ne di hai. to network me jao aur simply page refresh krdo to server se sari rendered file vha dikh  jaegi to usme localhost me jaake dekho to vha resonse me dikhega ki server ne blank file return ki hai. aur js bhi deta h to phir jb js file run hogi tb sb kuch dikhega hamare screen pr.

vite aur next dono hi case me server run ho rha hai.like node ka use krke ek http server create  kiya gya hai.

node_modules ke andar search directly kam nhi krta hai. we need to enable that and usme hi hamara port jispe hamara project run hota hai usse related sab kuch likha hota hai. like 'localhost' , port name etc and we are to change it.

vite ke case me static(normal ) server hota hai. ye ek port par start ho gya hai aur files(htmls,css,js) ko serve kr rha hai bas.

agar ham vite ke project me inspect me jake js ko disable kr denge aur phir page ko refresh krnege to phir ye blank white page show karega.
but next js project ke case me aisa nhi hoga.vo complete website ko dikhaega after refresh kyu next js ke case me pura html server se aya hai jabki vite ke case me aisa nhi tha.

next js ke case me app fiolder ke andar ka sara important file hota hai aur usem bhi sabse main hota hai page.js
mtlb ki ye page.js hi project ka entry point hota hai.

jab ham react ke project me app.js me kuch console krte h to vo browser ke consoled data dikhta hai but jb same cheej ham next js me krte h to ye consoled data hamare terminal me dikhta hai kyuki isme pura code server ope run hota hai naki client pe. isme hota ye h ki ham brouwser pe refresh krte h to hamara browser next js ke server pe ek request bhejta hai.
to next ke case react ka pura code server pe execute ho rha hai using react server component.
yha pe bable jsx ko compile karega aur ise react.createElement  me convert krega taki plain js ban jae. to vite ke case me ye hota tha ki vite ise browser ko send kr deta tha aur brouwser iska pura dom element create krta tha  but next js ke case me ise html string me convert kiya jata hai. phir is html file ko brouser ko send kr dita jata hai.

next js ke case me console ko ham browser me get kr skte hai aur us datat ke aage server likhke ayega but onlyiin developement mode. production mode me ye brouwser me nhi dikhega.producgion mode mtlb jab ham buld krke start krte h project.

agr hame chaiye ki ki koi code ko client(browser) ke andar run karana hai to uske liye hame page.js me ekdm top pe 'use client'; likh dena hoga. to aise me consoled dat ke aage jo server lilhke a rha tha vo nhi ayega. aur phir data 2 bar run hpoga kyuki developer mode on krne par consoled data 2 bar dikhta hai. mtlb ye hai k iuse client likh dene se ye client component ban gya, iska ye mtlb nhi ki ye server pr run nhi hoga, ye client aur server dono pe hi run hoga.

agr hame koi bhi click event lagana hai h to hame isko client componet banana padega nhi to error thorught karewga. ham code ke kuch part ko bhi client component bana kste hiai.
click event jo h vo brouwser event hai to isko ham server comonent me run nhi kra skte. similarly console.log(window) pe bhi error dega kyu ye cvlient event h naaki server. client compoent bna denege to windows ko console krne ka code phle error dega kyuki phle server pe chlta hai then run kr jawga aur windows ko print krega kyuki second tine me ye clinet pe run kr rha hai.

next js ka server hai vo static server nhi hai , ye dynamic server hai joki pure code ko serever pe run krta hai to iske jo benefit h vo ham aagde padhenge.
iske mainly 2 benefit hai
 -SEO improve becuase search ingine mainly html ke cotent ko dekhte hai.
 -faster load time kyuki vite ke case me phle plain html at h  to ye phle blank page dikhata hai then content ko load krta h jabki next js je case me blank page nhi dikhega to isak html jaldi load hota hai.
 - client load reduce ho jata hai 


==> to hame ek ye task krnah ki next ke project me port name(localhost) aur number(3000) chnage krna hai to 3000 ko search krne pr to ye bht jagah mil jaega but starting... wale pe jaake chnage krna hai.

-nextJs me aisa hota hai ki jo page exist nhi krta hai uske liye ek eror 404 ka default error page show kr deta hai.

-next me page.js main page hota hai but react me index.js ki tarah layout.js hota hai to layout.js ko delete krne par error ayega.
 to agar ham layout.js me kiuch likh rhe like h1 tag p tag or any other tag then vo hamare page pe bhi visible hoga.

 agr ham js use kr rhe h to ham sare file .js ya .jsx likhenege but agar ham typescipt use kr rhe h to .ts or .tsx use krnege.

 The biggest thing to understand is:

In Next.js, routing is mostly file-based.

That means:

You create folders/files
Next.js automatically converts them into routes (URLs)

No need to manually configure routes like in React Router.

1. How Routing Works in Next.js

Suppose you have this structure:

app/
 ├── page.js
 ├── about/
 │    └── page.js
 ├── contact/
 │    └── page.js


 Then routes become:

 | File                  | URL        |
| --------------------- | ---------- |
| `app/page.js`         | `/`        |
| `app/about/page.js`   | `/about`   |
| `app/contact/page.js` | `/contact` |

2. app Router (Modern Next.js)

In latest versions of Next.js, routing mainly happens inside the app folder.

app/
 ├── dashboard/
 │    ├── page.js
 │    ├── users/
 │    │    └── page.js


 /dashboard
/dashboard/users

3. Every Route Needs page.js

A route becomes visible only when that folder contains:
page.js

Example:

app/profile/page.js
export default function Profile() {
  return <h1>Profile Page</h1>
}

Now:

localhost:3000/profile

---

## navigating from one route page to another

we can write:
 <a href='/profile'>About<a>
but this will reload the whole page so to avoid this ,we will use 
<Link href='profile'>About<Link>

write all the a,bove code in page.jhs of main app folder
in bellow code moving by anchor tag will results in refresh the whole page but using Link tag will not result in page refresh, it will redirect to that page without relaod.  react me ham link me to me route ka path dete hai but next me href me route ka path dete hai.

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1 className="text-3xl font-bold underline">Welcome to nextJs home page</h1>
    <a className="text-3xl font-bold underline" href="/dashboard">Go to Dashboard</a>
    <Link className="text-3xl font-bold underline" href="/dashboard">Go to Dashboard</Link>
    </>
    
  );
}

## nested routing

it is nothing but nesting of route so we simply write as folder1/folder2 so on

## dynamic route 
like if we want to create non fixed no of route ,like route for blogs on facebook then we will not make it manuaaly , like blog1,blog2.....so on.

we simply make a folder inside any required folder by name [nameOfFolder]
and here nameOfFolder is the variable which holds dynamic value which we pas in route name(url) and we simply get that in sireced blog page by param by bellow code.

async function Blog({params}){
  const {nameOfFolder}=await param;
  return (<> Blog 1 {nameOfFolder}</>)
}


in case of nested dynamic route we will have  access of all the param of parent compnent.

## catch all the route and its type

In Next.js, Catch-All Routes are used when you don’t know how many URL segments will come after a route.

Types of Catch-All Routes in Next.js

| Type                     | Syntax        |
| ------------------------ | ------------- |
| Catch-All Route          | `[...slug]`   |
| Optional Catch-All Route | `[[...slug]]` |


1. Catch-All Route → [...slug]

This captures all segments, but at least one segment is required.

app/
 ├── docs/
 │    ├── [...slug]/
 │    │    └── page.js


 URLs That Work
/docs/react
/docs/react/hooks
/docs/react/hooks/useEffect

URL That DOES NOT Work
/docs

export default function DocsPage({ params }) {
  return (
    <div>
      <h1>{JSON.stringify(params.slug)}</h1>
    </div>
  )
}

Outputs

If URL is:

/docs/react

Output:

["react"]

If URL is:

/docs/react/hooks

Output:

["react", "hooks"]

If URL is:

/docs/react/hooks/useEffect

Output:

["react", "hooks", "useEffect"]


2. Optional Catch-All Route → [[...slug]]

This is similar BUT:

segments are optional
route also works without parameters


app/
 ├── docs/
 │    ├── [[...slug]]/
 │    │    └── page.js


 URLs That Work
/docs
/docs/react
/docs/react/hooks


export default function DocsPage({ params }) {

  console.log(params.slug)

  return <h1>Docs Page</h1>
}


Outputs
URL:
/docs

Output:

undefined
URL:
/docs/react

Output:

["react"]
URL:
/docs/react/hooks

Output:

["react", "hooks"]


Visual Difference
[...slug]

Requires at least one value.

/docs ❌
/docs/react ✅

[[...slug]]

Everything optional.

/docs ✅
/docs/react ✅












  







