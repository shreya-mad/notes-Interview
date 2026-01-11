 for making UI of the dev tinder, we use react+vite
   React + Vite simply means using React (a frontend library) together with Vite 
   (a build tool / bundler) to create fast, modern web applications.


   actually we need a bundler for running react app but when we create react prject using create react app 
   then it simply install a bundler named webPack but here we are using vite which is much faster and 
   trending  bundler 

   bundler in software development is a tool that takes all the pieces of your project—like JavaScript, CSS, images, fonts, and other assets—and combines (bundles) them into optimized files for the browser or runtime environment.

   Think of it as a "packaging machine" for your app.

   🔹 Why You Need a Bundler:

   Modern web apps use many small modules, libraries, and dependencies.

   Browsers prefer fewer, optimized files for performance.

   A bundler automates combining, transforming, and optimizing these files.


   Webpack->	Most popular, highly configurable, used in React/Angular/Vue apps.(this is  by default 
   in react by installing using create react app)
   Vite	-> Next-gen, fast bundler + dev server (uses ESBuild/Rollup).
   Rollup-> 	Focused on library bundling, tree-shaking friendly.
   Parcel->	  Zero-config bundler, beginner-friendly.
   ESBuild->  	Extremely fast bundler, written in Go.

   Here’s the breakdown:
   🔹 React
   A JavaScript library for building UI components.
   Lets you create single-page applications (SPAs).
   Uses concepts like components, props, state, hooks, and virtual DOM.

   🔹 Vite
   A next-generation frontend build tool made by the creator of Vue.js.
   Works as a faster alternative to Webpack, CRA (Create React App), and Parcel.
   Provides:
   ⚡ Super fast development server (starts instantly, no long waits).
   📦 Optimized production build (uses Rollup under the hood).
   🛠️ Hot Module Replacement (HMR) (changes show instantly in the browser without reloading).
   🚀 Lightweight and easy configuration.
   🔹 React + Vite Together
   When you combine them:
   React provides the UI framework.
   Vite provides the development and build tooling.
   👉 Developers often use Vite instead of Create React App (CRA) because it’s much faster and more modern.
   A bundler is a tool that takes all the different files in your project (JavaScript, CSS, images, etc.)
    and combines them into optimized files that browsers can understand and load efficiently.

   and command for creating it is.......npm create vite@latest my-aap-name
   dazy UI library
   DaisyUI is a free, open-source component library built on top of Tailwind CSS.

   DaisyUI is a component library built on top of Tailwind CSS.

   It gives you pre-built, styled UI components (like buttons, modals, cards, navbars, etc.)

   You don’t write raw Tailwind classes for every component — DaisyUI provides ready-to-use class names.

   It also includes themes (light, dark, and custom themes) out of the box.

   In short:

   Tailwind = building blocks (utility classes)
   DaisyUI = pre-designed components using Tailwind


   Without DaisyUI (just Tailwind):

   <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
     Click Me
   </button>


   With DaisyUI:

   <button class="btn btn-primary">Click Me</button>

   matlb ki ham jaise bootstrap me navbar ya sidebar directly bana skgte hai same vaise hi daisyUi ki
   help se navbar ,sidebar,buttons,dropdown ya bahot sare components bana sakte hai 

   child router is the concept in which we write route of any component in another route so that parent 
   will be shown on screen allways if we enter path of child router and for that i need to write
   outlet component inside the parent compoinet page 
   malab simple ye hai ki ham ek body component banayenge aur usme us componet ko import kr denege jisko hame
   hamesha page pe dikhana hai ,like navbar and phir usme react router dom ka outlet component inport krke 
   usko navbar call  ke just neeche  call kr denge phir ham aynege router wale page pe to usme ham parent 
   router ke jagah pe us body componet ko dalnege aur phir child router ke jagah pe baki sare componet dal
    denge like aboout page,login page
   jab ham child router ka poath denge to uske sath uska parent route bhi ayega leking agr hamne parent ka router path diya hai to keval parent router component hi ayega

   aur agr hamne fooltet componet dal diya hai body me to phir vo bhi navbar ki tarah stick rahega if child componet ka router path dal rhe h to 

   code for clling function without passing variable
    <button onClick={sayHello} className="btn btn-primary"></button>
   calling function when passing any variable 
{/* <button onClick={() => greetUser("Shreya")} className="btn btn-secondary"></button> */}


   Why e.preventDefault()?

   Normally, submitting a form would refresh the page.
   Calling e.preventDefault() stops the default browser behavior 

   if we havnt set withCredial:true in api call then it doesnt set jwt token in cookies anddue to that 
   authentication of other api would fail

   const response=await axios.post("http:  localhost:4000/login",{
           email,
           password
         },{ withCredentials: true });

    upar ke code ki tarah jab ham  krenge to phir vo token ko cookies me store kara lega aur tbhi ye 
   cookies
    ko baki api call me automatic send kr dega


   Redux is a state management library that stores your app’s data in a centralized store 
   so components can share 
   state easily without prop-drilling.


   WHOLE CONCEPT OF REDUX

   agar hame react ko brouwser pe kam karana hai to to uske liye react-dom library hai aur agr mobile pe
   karana hai to uske liye react-native library hai
   redux apne aap me ek state management library hai aur agr ham isko  kahi bhi use krna chahte
    hai,like react  to uske liye uska ek saga bhai hota hai like react me react-redux.....to agr hame redux 
   use krna hai to uske liye redux jo ki ek core library hai aur uske sath ek aur llibrary chiaye hoti hai jo
   ki react aur redux ke beech bridge bana pae

   redux se phle stae management ke liye flux use hota tha joki facebook ne banya tha phir redux aya and then 
   redux-toolkit
   isme ek store hota hai global varible type kuch aur iss store ke andar mini stores bhi ho skte hai...
   phir ek reducer hota hai joki ki store ke andar ke chnager ko handle krta hai
   useSelector joki kuch value ko select krna ho tb kam ata
   useDispatcher tab use hota hai jab koi value bhejni ho ya dispath krni ho


   🔑 REDUX CORE CONCEPTS

   Concept                    Meaning	                                                     Example
   Store	   Central place where all your app’s state lives.	                      Like a big “warehouse” for data.
   Action	   An object describing what you want to do.	                          { type: "INCREMENT" }
   Reducer	   A function that decides how the state changes based on an action.	  (state, action) => newState
   Dispatch	   The way to send an action to the store.	                              dispatch({type:"INCREMENT"})
   Selector	   A way to read data from the store.	                                  useSelector((state)=>state.counter)
 

   redux ke implementation me sabse phle banaynege configureStore then reducer aur yaha ham reducer ko hi 
   slice bolenege

   project ke entry point pe ham sare code ko reducer tag ke andar wrap kr denege joki react-redux library 
   se milta h ...taki ham redux store se data ko use kr sake ,simple mean ki ham apne project se uska 
   connection build kr sake

   phle redux install krnege then store banyenege phir project ke entry point pe jakee provider me wrap up 
   krnege then reducer banayenge jiska name createSlice
   install=>configureStore=>Provider=>createSlicer=>add reducer to store
   now we are safe to add data to redux tool


   i have done deployment on render of frontend and backend both
   for backend i have created a express app and pushed it to github and then connected that repo to render
   using web services and then install all dependencies from package.json and 
   then run the start command mentioned in package.json and then it deployed my backend app

   for frontend i have created react app using vite and pushed it to github and then connected that repo to render
   uisnf static site and then install all dependencies from package.json and 
   then run the build command mentioned in package.json and then it deployed my frontend app

   now for connecting frontend and backend we need to change the api url from localhost to render url

   like if my backend render url is https:  dev-tinder-backend.onrender.com
   then i need to change all api url from localhost:4000 to https:  dev-tinder-backend.onrender.com

  give me whole stelp of deployment of react app on render.com

   Step 1: Prepare Your React App
   Make sure your React app is ready for production. You can create a production build by running:
   npm run build
   This will generate a build/ directory with optimized static files.
   Step 2: Push to GitHub
   Push your React app code (including the build/ directory) to a GitHub repository.
   Step 3: Create a Render Account
   If you don’t have one, sign up for a free account at render.com. 
   Step 4: Create a New Static Site on Render
   Log in to your Render dashboard.
   Click on the "New" button and select "Static Site" from the dropdown.
   Step 5: Connect Your GitHub Repository
   Choose "Connect a repository" and authorize Render to access your GitHub account.
   Select the repository where your React app is hosted.
   Step 6: Configure Build Settings
   In the "Build Command" field, enter:
   npm install && npm run build
   In the "Publish Directory" field, enter:
   build
   Step 7: Deploy Your Site
   Click the "Create Static Site" button to start the deployment process.
   Render will clone your repository, install dependencies, build the app, and deploy it.
   Step 8: Access Your Deployed App
   Once the deployment is complete, Render will provide you with a URL where your React app is live.
   You can visit this URL to see your deployed React application in action.
   Step 9: Set Up Custom Domain (Optional)
   If you have a custom domain, you can configure it in the Render dashboard under your static site settings.
   Follow Render’s instructions to point your domain to the Render servers.
   That’s it! Your React app should now be successfully deployed on Render.com.
   give me whole steps of deployment of express js backend on render.com

   Step 1: Prepare Your Express.js App  
   Ensure your Express.js app is ready for deployment. Make sure you have a start script defined in your package.json file:
   "scripts": {
     "start": "node app.js"    or your main server file   
   }
   Step 2: Push to GitHub  
   Push your Express.js app code to a GitHub repository.
   Step 3: Create a Render Account
   If you don’t have one, sign up for a free account at render.com.  
   Step 4: Create a New Web Service on Render  
   Log in to your Render dashboard.
   Click on the "New" button and select "Web Service" from the dropdown.  
   Step 5: Connect Your GitHub Repository  
   Choose "Connect a repository" and authorize Render to access your GitHub account.
   Select the repository where your Express.js app is hosted.  
   Step 6: Configure Service Settings  
   In the "Environment" section, select variables from .env "Node.js" project and put it into that .
   In the "Build Command" field, enter:
   npm install
   In the "Start Command" field, enter:
   npm start

   Step 7: Deploy Your Service
   Click the "Create Web Service" button to start the deployment process.
   Render will clone your repository, install dependencies, and start your Express.js server.  
   Step 8: Access Your Deployed API
   Once the deployment is complete, Render will provide you with a URL where your Express.js API is live.
   You can use this URL to make API requests to your deployed backend.



