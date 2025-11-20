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

3. which one takes large time and how?
ANS:-
   a.typescript check data type at compile time while javascript checks at run time.  
   b.typescript get conveted into js and this is called compilation and that takes time and js dont need any kind of conversion for execution so typescipt takes larger time than js.



