we must learn typoescipt only after learning js.
typescipt is simply a programming laungage which we get after providing some super power(data type) to javacript.
js me hame freedom hoti hai to aise me ham kuch bhi code likhte hai. aur ye freedom thodi problem create karti hai.

## Main Difference
| JavaScript                  | TypeScript                |
| --------------------------- | ------------------------- |
| Dynamic typing              | Static typing             |
| Errors at runtime           | Errors during development |
| Less strict                 | More strict               |
| Easier to start             | Better for large projects |
| No compilation              | Compiles to JS            |
| Harder to maintain big apps | Easier to maintain        |


---
Does TypeScript Replace JavaScript?

No.

TypeScript runs on top of JavaScript.

Flow:

TypeScript code
↓
Compiled
↓
JavaScript code
↓
Browser

varible in js
let age = 25

varible in ts
let age: number = 25



function in js

function greet(name){
  return "hellow "+name;
}
console.log(greet("Hello, World!"));

function in ts

function greet(name: string):string{
  return "hellow "+name;
}
console.log(greet("Hello, World!"));

upar ke function me jo bracket ke andar :string likha hai vo input value ka data type batata hai aur bracket ke bahar : string ye batata hai ki ye function ka return value ka datatype kya hoga.

typescript cant run standalone, it runs on the top of js.

JAVACRIPT----> PROCESS----> TYPESCRIPT

agar ham .ts me datatype glt de rhe to ye early warning sign dega but still ye code run hoga kyuki at the end to js hi run hota hai na.

## in depth explaination of conversion of ts to js (This process is called:Transpilation / Compilation)

TypeScript Code
        ↓
Lexer → creates tokens
        ↓
Parser → creates AST
        ↓
Type Checker → validates types
        ↓
Transformer → removes TS syntax
        ↓
JS Generator → creates JS
        ↓
Browser runs JS

1. Source Code
You write:
let age: number = 25
This is raw text initially.
Computer still does NOT understand meaning.

2. Lexer / Tokenizer
The lexer breaks code into small pieces called:
Tokens
Think of tokens as words of programming language.

Example:-
Code:
let age: number = 25

Tokens become:
LET
IDENTIFIER(age)
COLON
TYPE(number)
EQUALS
NUMBER(25)

What Lexer Does
Lexer only identifies:
keywords
variable names
operators
symbols
numbers
strings

It does NOT understand logic yet.

Real Life Analogy
Imagine sentence:
"I love pizza"
Lexer says:
WORD
WORD
WORD

Only splitting pieces.

3. Parser

Now parser checks:
"Does this code follow language grammar?"
Parser converts tokens into:
AST (Abstract Syntax Tree)

What is AST?
AST is a tree representation of your code.

Example

Code:
let age: number = 25
Simplified AST:
VariableDeclaration
 ├── name: age
 ├── type: number
 └── value: 25


4. Type Checker (MOST IMPORTANT IN TS)
This is where TypeScript becomes special.
JavaScript does NOT have this phase. 

Example
let age: number = "hello"
Type checker checks:
Expected: number
Received: string
❌ Error generated.

Example
function add(a: number, b: number) {
  return a + b
}
add("10", 20)

Type checker catches:
❌ string passed instead of number.

Important
Type checker DOES NOT exist in browser.
It only helps during development.

CHECKER HAMAREW CODE SE 2 BAR GO THOROUGT KARTA HAI 

5. Transformer

Now TypeScript removes TS-only syntax.
Example:
let age: number = 25
Transforms into:
let age = 25

Because browser doesn't understand:

: number
interfaces
enums
types

All TS-only features are removed.

6. JavaScript Generator

Finally compiler generates actual JavaScript code.

Example
Input TS
const add = (a: number, b: number): number => {
  return a + b
}
Output JS
const add = (a, b) => {
  return a + b
}


7. Emit Phase

Generated JS files are written to disk.

Example:

index.ts
   ↓
index.js

This is called:

Emit phase

## TYPESCIPT SETUP IN PROJECGT
we can set it in two ways
1.Globally in our system
2.project wise setup 

project wise isliye krte h kyuki iska versions chnage hote rhte hai to ho ksta h ki ham koi bht purana project bana rhe ho jisme typescript ke older version ko use kiya gya hai to aise me ha mkoi new project kpo ts ke new version me nhi bna paynege.

## typscript setup
for globally 
npm install -g typescript for global setup

for project wise
Step 1 — Create Project
mkdir my-app
cd my-app

Step 2 — Initialize Node Project
npm init -y
Creates:
package.json

Step 3 — Install TypeScript Locally
npm install typescript --save-dev
OR
npm i -D typescript

Step 4 — Initialize TS Config
npx tsc --init
Creates:
tsconfig.json
VERY IMPORTANT file.

## TypeScript is a Development Tool
ham typepecript ko only developement dependecy in install krte hai kyuki ye production me use nhi hota hai,prod me keval js use hota hai.

TypeScript mainly helps developers during coding.

It provides:

type checking
autocomplete
error detection
better editor support


==> Before Production, TS Gets Removed
Very important.
When project builds:
npm run build
TypeScript compiler converts:
let age: number = 25
into:
let age = 25

==> Production Receives ONLY JavaScript

After compilation:
TypeScript ❌
JavaScript ✅
Production server/browser only gets:
.js
optimized bundles
No .ts files are needed anymore.

Developer writes TS
        ↓
TypeScript compiler checks errors
        ↓
Converts TS → JS
        ↓
Production runs JS

==>>> Types Exist Only During Development so in npm i -D typescript.... -D means required only in developement (-D = development dependency)

What Happens in Production Deployment

Suppose you deploy a Next.js app.

During build:

TS checks happen
TS converts to JS

Deployment contains:

JS bundles
CSS
assets

NOT raw TS compiler.



## Real Analogy

Think of TypeScript like:

Grammar checker while writing essay

Once essay is finalized:

grammar checker not needed anymore
only final essay is submitted

## Important Runtime Concept

TypeScript works at:

Compile Time

NOT at:

Runtime

==> TypeScript catches error BEFORE app runs.

Does Production Ever Use TS?

Normally:
❌ No

Production uses:
compiled JS
optimized bundles

## Important Interview Line

TypeScript is a compile-time development tool that provides type safety and gets transpiled into JavaScript before production, because browsers and Node.js execute JavaScript, not TypeScript.

## meaning of -y in: npm init -y
means:
"yes to everything"

Without -y

If you run:

npm init

npm asks many questions one by one:

package name:
version:
description:
entry point:
test command:
git repository:
author:
license:


whenever we run  npx tsc --init then it create tsconfig.json and it will contains default setting of the project so it also have sourse directory and output directory in commented form . 
when we uncomment both so thats simple mean , we have to keep all the our source code in src and whenecer we run our project then it will automatically create dist foldere and put all the js flies inside it after conversion from ts to js.
so csimple ki hame keval src folder create krni h manuaaly , naki dist folder.

.ts me code likhne ke bad jb ham npx tsc krte h to vo pura js me convert hoke dist folder me js file create ho jati hai.

then ham final project ko run karane ke liye node ke command se dist folder ke andar ke project ko run krwa dete hai.

like node dist/index.js

to simple aur  sorted form me ham package.json me jaake start me folder set kr denege  "test": "node dist/index.js" 

phir npm start se run krdo project ke.

agar hamne koi variable bina iske data type ke hi declare kr diya h aur isko value assing kr diya h to phir iss case me ye data type dene ka error nhi hsow krega jabki ye krenga ki agr ham usi variable me koi dusra value assign kr rhe h jiska dat phle se assign variable se different h to phir ye error dega kyuki ye first time me hi varible ka data type decide kr leta h , "shreya" diya hto vo aage bhi string hi acept karega.

## union

whenever we want to keep two different datatyoe of any varible then we simply use enum to allow different datatype to that varible 

like:

let subcriber: number | string ='1M';
subcriber=100;

we can aslo write it as

let size:"small" | "medium" | "large" | number

##  main difference between any and unknown

| any                        | unknown               |
| -------------------------- | --------------------- |
| Disables type checking     | Keeps type safety     |
| Unsafe                     | Safe                  |
| Can do anything directly   | Must check type first |
| Runtime errors more likely | Safer code            |
| Avoid in large projects    | Preferred over any    |

in case of unknown , if we are accessing that value and perorming any operation then we simply provide its type of apply cndition. like if we are appling upper case condition then simply check that thats type is string or not.
in case of any we dont need to assign it datatype at any time but in unknown , we can declare its datatype later.


1. any

any means:
"This variable can be anything.
TypeScript should not check it."
Example:
let data: any = "hello"
data = 25
data = true
Everything allowed.
Dangerous Part
With any, TypeScript stops protecting you.
Example:
let value: any = 10
console.log(value.toUpperCase())
❌ Runtime error possible.
But TypeScript gives NO warning.
Because:

any disables checking
2. unknown
unknown also accepts any value BUT:
you cannot use it directly
you must check datatype first
Example
let value: unknown = 10
Now this:
console.log(value.toUpperCase())
❌ Error.
TypeScript says:
"I don't know what type this is"
Correct Way with unknown
You must verify type first.
let value: unknown = "hello"
if(typeof value === "string") {
  console.log(value.toUpperCase())
}
✅ Safe.

## what is interface in ts
In TypeScript, an interface is used to define the structure of an object.

Simple meaning:

Interface tells what properties an object should contain and what their datatypes should be.

Why Interfaces Are Used

Suppose you have a user object.

Without interface:

const user = {
  name: "Shreya",
  age: 25
}

Works fine.

But in large projects:

many developers work together
objects become huge
APIs return complex data

So we define a fixed structure using interface.

Basic Syntax
interface User {
  name: string
  age: number
}

Now this interface says:

Any User object must contain:
- name → string
- age → number

## Using Interface
interface User {
  name: string
  age: number
}

const student: User = {
  name: "Shreya",
  age: 25
}

Wrong Example
const student: User = {
  name: "Shreya",
  age: "25"
}

❌ Error.

Because:

age should be number
not string
Missing Property Example
const student: User = {
  name: "Shreya"
}

❌ Error.

Because age missing.

Why Interfaces Are Important

They provide:

type safety
autocomplete
cleaner code
better collaboration
reusable structures


Real Company Example

Imagine API user data:

{
  "id": 1,
  "name": "Rahul",
  "email": "rahul@gmail.com"
}

Interface:

interface User {
  id: number
  name: string
  email: string
}

Now all user objects follow same structure.

Optional Properties

Use ?

interface User {
  name: string
  age?: number
}

Now age is optional.

Example
const user: User = {
  name: "Shreya"
}

✅ Valid.

Readonly Properties
interface User {
  readonly id: number
  name: string
}

Now:

user.id = 10

❌ Not allowed.

Interface with Function
interface Add {
  (a: number, b: number): number
}
Example
const sum: Add = (x, y) => {
  return x + y
}

Interface with Array
interface Numbers {
  [index: number]: number
}
Interface with Class

Very common.

interface Person {
  name: string
  display(): void
}

Class Implements Interface
class Student implements Person {

  name: string

  constructor(name: string) {
    this.name = name
  }

  display(): void {
    console.log(this.name)
  }
}


## Interface in React/Next.js

VERY common.

Example:

interface Props {
  title: string
  count: number
}

Used like:

function Card({ title, count }: Props) {
  return <h1>{title}</h1>
}

Interface vs Type

Both are similar for object structures.

Example:

Interface
interface User {
  name: string
}
Type
type User = {
  name: string
}


Then Why Use Interface?

Interfaces are often preferred for:

object structures
class implementation
scalable applications


Real-Life Analogy

Think of interface as:

Blueprint / Form Structure

Example:

School admission form says:

Name → text
Age → number
Email → text

Every student must follow same structure.

That’s exactly what interface does.

Final Simple Definition

Interface in TypeScript defines the shape/structure of an object, ensuring objects follow a consistent datatype pattern.

classes ke case me allways try ki type na use krke interface use kre.

readOnly values me keval ek bar values assign krnege , uske bad value assign krne par vo eror dene lgega.


## TUPPLE

1. Tuple in TypeScript

A tuple is:

A fixed-size array where datatype and position are predefined.

Normal arrays allow flexible values.

Tuple enforces:

order
datatype
number of values
Normal Array
let data: (string | number)[] = ["Shreya", 25]

This also allows:

[25, "Shreya"]

because order not fixed.

Tuple Example
let user: [string, number]

Meaning:

First value → string
Second value → number
Correct
user = ["Shreya", 25]

✅ Valid.

Wrong Order
user = [25, "Shreya"]

❌ Error.

Because:

first must be string
second must be number
Wrong Length
user = ["Shreya"]

❌ Error.

Because tuple expects 2 values.

Real Example of Tuple

Coordinates:

let location: [number, number] = [28.61, 77.20]

Meaning:

latitude
longitude
Another Example

API response:

let response: [number, string]

response = [200, "Success"]
Tuple with Optional Values
let user: [string, number?]

Second value optional.

Tuple with Rest Operator
let colors: [string, ...string[]]

Example:

["red", "blue", "green"]
Simple Memory Trick for Tuple
Tuple =
Fixed array with fixed datatype order


## ENUM 
2. Enum in TypeScript
Enum means:

A group of constant named values.

Used when values are fixed.

Example
enum Role {  Admin,  User,  Guest}
Now:
Role.AdminRole.UserRole.Guest

Default Values
Enums start from:
0
Internally:
Admin = 0User = 1Guest = 2

Example
enum Status {  Success,  Error,  Loading}console.log(Status.Success)
Output:
0

Custom Values
enum Status {  Success = 200,  Error = 500,  NotFound = 404}

String Enum
Very common in real projects.
enum Role {  Admin = "ADMIN",  User = "USER",  Guest = "GUEST"}

Usage
let userRole: Role = Role.Adminconsole.log(userRole)
Output:
ADMIN

Real World Example
User roles:
enum UserRole {  Admin = "ADMIN",  Teacher = "TEACHER",  Student = "STUDENT"}
Very common in:


dashboards


authentication


SaaS apps



Why Enums Used
Instead of writing:
if(role === "admin")
You use:
if(role === Role.Admin)
Safer and typo-proof.

Enum vs Tuple Difference
TupleEnumFixed array structureGroup of constantsStores multiple ordered valuesStores named constant valuesExample: [string, number]Example: Admin, UserPosition mattersConstant names matter

Real-Life Analogy

Tuple
Think:
Student Record:[Name, Age]
Position fixed.

Enum
Think:
Traffic Signal:REDGREENYELLOW
Fixed constant options.

Complete Example Together
enum Role {  Admin = "ADMIN",  User = "USER"}let employee: [string, Role]employee = ["Shreya", Role.Admin]console.log(employee)
Output:
["Shreya", "ADMIN"]

Most Common Usage in Companies

Tuple
Less commonly used, mostly for:


coordinates


API responses


fixed datasets



Enum
Very common for:


roles


status


permissions


API states


constants



Final Short Definitions

Tuple

Tuple is a fixed-length array with predefined datatypes and order.


Enum

Enum is a collection of named constant values used to represent fixed options.


## What Are Generics?

Generics allow you to write:

reusable
flexible
type-safe code

without hardcoding datatype.

Problem Without Generics

Suppose function works for numbers.

function getData(data: number): number {
  return data
}

Works only for numbers.

What if you want:
string
boolean
object

You’d need multiple functions.

Bad approach.

Generics Solve This
Generic Syntax
function getData<T>(data: T): T {
  return data
}

T means:

temporary datatype
placeholder type
Usage
getData<string>("hello")

getData<number>(10)

getData<boolean>(true)
Why Powerful?

Same function works for ALL datatypes safely.

Example
function identity<T>(value: T): T {
  return value
}

console.log(identity<string>("Shreya"))

console.log(identity<number>(25))
Generic Array
function getItems<T>(items: T[]): T[] {
  return items
}
Usage
getItems<number>([1, 2, 3])

getItems<string>(["A", "B"])
Generic Interface

VERY common in APIs.

Example
interface ApiResponse<T> {
  success: boolean
  data: T
}

Now data can be anything.

Usage with User
interface User {
  name: string
  age: number
}

const response: ApiResponse<User> = {
  success: true,
  data: {
    name: "Shreya",
    age: 25
  }
}
Generic Multiple Types
function pair<T, U>(value1: T, value2: U) {
  return [value1, value2]
}

Usage:

pair<string, number>("Shreya", 25)
Real React Example

Very common.

const [users, setUsers] = useState<User[]>([])

Here:

User[] is generic type
Real API Example
async function fetchData<T>(): Promise<T> {

}

Used heavily in company projects.

## In TypeScript, type declaration means:

Explicitly telling TypeScript what datatype something should have.

You are basically “declaring the type”.

1. Simple Type Declaration
let name: string = "Shreya"

Here:

:string

is the type declaration.

## Declaration Files (.d.ts)

Another VERY important meaning.

In TypeScript, declaration files describe types for JavaScript libraries.

File extension:

.d.ts

hamare project me ke .d.ts file hoti hai jisse sare hints aur errors aate hai
node_modukles folder ke anadar typscript me lib ke andar mostly sari files hot ih jisme sare defintions aur rules likhe hote hai jisse basis pe hame error aur hints milta hai aur ye keval ts ke case me hi nhi hota hai, ye sare hi tech stack ke case me hita hai like if you install axios then uska bhi definition, rulkes aur function node_modules ke andar hota hai.


## Real Meaning  @types/library_name in npm i -D @types/library_name :

A big collection of TypeScript definitions
for any library like Node.js, axios,react js features 

react js aur next js ke sath typescript ka setup krne ke liye jada kuch nhi krna hai bas vo installation ke time pe js chaiye ya ts ye question puchta hai to usme hi ts de dena hota hai.


