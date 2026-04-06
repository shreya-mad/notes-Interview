1. what is border-box and content box?
ANS:-
What is box-sizing:- 
It controls how width and height of an element are calculated.

✅ 1. content-box (default)
👉 This is the default behavior in CSS.

How it works:
width = only content
Padding and border are added on top of it

div {
  width: 200px;
  padding: 20px;
  border: 10px solid black;
}

👉 Actual width becomes:

200 (content) + 40 (padding) + 20 (border) = 260px

💥 Problem: Layout breaks easily because size increases unexpectedly.

✅ 2. border-box (most used 👍)

👉 This is what developers prefer.

How it works:
width = content + padding + border (everything included)

div {
  width: 200px;
  padding: 20px;
  border: 10px solid black;
  box-sizing: border-box;
}

👉 Actual width stays:

200px total (no increase!)

🔥 Much easier to manage layouts.