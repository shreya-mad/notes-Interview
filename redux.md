10. Redux toolkit(RTK)?
ANS:-
we have  react hooks for state mamangement and that is useState and context API with the help of useReducer hook.but for large scale data management we use redux toolkit.

it is not part of react. 

it is sepaearte library for managing large data for js app. it works in data layer of our application.
redux is a state management library.
it helps us to manage state of our application in a centralised store or we can say global storage instead of spreading it in many components.
state simply mean all the data used by the application.

redux is not manadatory for our application.it depends on our project size.
all the application build using redux can be build without using redux. use it only when it required.

redux is not a only library to mange state,there are are many more libraries...like zustand.
plane redux is also known as vanilla redux.
here we are going to study redux toolkit.

redux team offers two libraries for state management 
1. react-redux - this library is like bridge between react and redux.
2. redux-toolkit

redux-toolkit comes to solve few major issue of redux-
 1.configure a redux store is too complicated.
 2.we need to add a lot of package to get redux to do anything usefull but in redux-toolkit, we just need two libraries @reduxjs/toolkit and react-redux
 3.rdux need to much boilerplate code

redux -toolkit offer very less complicated version of redux.

we are going to make item addition in our cart like swiggy zomato,flipkart etc. we can get all the information of the item by clicking on the cart so we will store all the cart information in redux.

we make parts of redux store to store large data ,which is called as slices.we can imagine slice to be small portion of redux store.

we make slices(parts) in redux which is slice of redux store and there could be many slices. we make logical parts in redux and which is nothing but slices.so if we are going to add cart data in the redux then we maker seperate slice for cart data. like if we are going to store login user info into redux then we make seperate slice for that.similarly for theme.

exa:-
-cartSlice
-userSlice
-themeSlice

if we are clicking on add(+) button on any item then we cannt add that item or modify cartSlice direclty,there is different rule for that.
so when we click on add(+) button of any item then that dispatches (action) and that action calls a function and that function internally modifies the cartSlice.
this called function is nothing but reducer function.

steps of writtting data into redux:--
clicking on add button for adding item----->dispatch(action)----->reducer function----->cartSlice updation

previous one was all about writting data in redux store so come to the reading data from the redux store.
let take example of :-
 showing count of the added item on the top right cart icon(reading data from redux store) we need to perform get(read) operation from the redux.
for that we use something known as selector.then we use selector and that selector will modify the react component like like cart on the top.
when we use selector then this phenomenon is known as subscribing to the store.
this process of updating cart is automatic process.
the is sync with the store like when cart updated then that will automatically update react component,imagine it like utube video , when we subscribe any channel and when some video added that chanel then that automatically reach to our feed rather than searching that video by going to that channel.
cart has subscribed the redux store here.

project is in same folder named redux-project

steps for using redux toolkit
-install react project
-install @reduxjs/toolkit and react-redux
-build our store
-connect our store to our app
-slice(cartSlice)
-dispatch (action)
-reducer function
-selector for reading data

make a folder and then make store inside that folder ,like i have taken name AppStore.js then create store by below code using @reduxjs/toolkit library-

import {configureStore} from '@reduxjs/toolkit';
const AppStore=configureStore();
export default AppStore;

we add slices in () of configureStore() later.

now we will provide this store to our application.
so we need to come to main component of our project and that is app.js

and import Provider from react-readux library for providing redux to our react application by below code
import {Provider} from 'react-redux'; 

so react-redux library is used for providing redux to our application and reduxjs/toolkit is used for creation store.
then simply wrap our whole porject into Provider and for providing redux store to our application,we simply pass our Store created in redux as props inside this Provider
    <Provider store={AppStore}>
      <div>hello</div>
    </Provider>

if there is use context as well so wrap context provider inside redux provider.
we simply need to wrap up inside redux provider to  those compoent which user redux store like context api.
if we dont want to provide redux to whole application then simply wrap that specific component into  Provider only.
wrapping inside Provider is same as Context api provider.

so store creation and store providing to our application stelp DONE.

now we create slice in another file like here cartSlice.js.
 this cartSlice will be created by a function named createSlice and this comes from @reduxjs/toolkit
import  {creatSlice} from '@reduxjs/toolkit';

now make structure of slice. 
name of our store.
intialState of our store which will be empty as our store has 0 item item in cart.
we will write reducer function corresponding to those actions like add items,remove item,clearing the items. we can think it as api to communicate with redux-store.

const cartSlice=creatSlice({
  name:'cart',
  initialState:{
    items:[]
  },
  reducers:{

  }
});


below one is complete cartSlice logic

import  {creatSlice} from '@reduxjs/toolkit';
const cartSlice=creatSlice({
  name:'cart',
  initialState:{
    items:[]
  },
  // we will write reducer function corresponding to those actions like add items,remove item,clearing the items. we can 
  // think it as api to communicate with redux-store.
  // here state is nothing but intial state of our store which is emplty array.
  // now it will modify our state based on the action.
  reducers:{
     addItem: (state,action)=>{
          state.items.push(action.payload);
     },
     removeItem: (state,action)=>{
        //here we have removed first top element only but i actual; we need to pass index of item to be removed.
         state.items.pop();
     },
     clearCart: (state,action)=>{
        //this will make our item array empty so we can avoid weriting action
        state.items.length=0;
     }
  }
});

here addItem,removeItem ,clearCart are action and function corresponds to each actions is knows as reducer function like bellow and this reducer will update our store
(state,action)=>{
          state.items.push(action.payload);
     },

(state,action)=>{
        //here we have removed first top element only but i actual; we need to pass index of item to be removed.
         state.items.pop();
     },     

(state,action)=>{
        //this will make our item array empty so we can avoid weriting action
        state.items.length=0;
     }


now we need to export actions and reducers both by and this syntax is provided by redux toolkit so we are not allowed to modify it.

export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;

upar ka syntax isliye hai kyuki redux toolkit jo createSlice provide krta hai vo ek object return krta hai jiska format kuch aisa hota hai

{
  actions: {
    addItem,removeItem,clearItem
  },
  reducer
}


now we need to add this slice to our store so simply add that inside () of configureStore(). look in the below code.

import {configureStore} from '@reduxjs/toolkit';
import App from '../App';
import cartReducer from './CartSlice';

const AppStore=configureStore({
    reducer:{
        cart:cartReducer 
    }
});

export default AppStore;

so here reduces is whole reducer of our store and cartReducer is one of the part of that reducer. reducer is big reducer and cartReducer is small reducer.

now we will get count of all the items present in the cart from redux store and we do that with the help of selector and that is nothing but hook.
this useSelector hook is coming from react-redux library.

write below code in dsried component ,like here we want to get it in navbar becasue we are showing no og item in cart present in the navbar.
import { useSelector } from "react-redux";

then simply subscribe to the paert of the store that we need by below code,here we have subscribed to item inside the cart only. so simply get count of the items present in the store by cartItems.length
const cartItems = useSelector((store)=>store.cart.items);


now we are going to the part of adding item to the cart redux store 

so for that we simply disptach an action on button which is used for adding any item.
so simple get a dispatch from useDispatch hook which is provided by react-redux library. so useSelector hook is used for reading anf useDispatch hook is used for dispaching an action or we =can say simply for adding state(data) into redux store.

import { useDispatch } from "react-redux";
const dispatch=useDispatch();


then import all the actions created in our redux store into required component.
import {addItem,removeItem,clearCart} from './Redux/CartSlice';

then simply call required reducer function and pass data inside that function.

  const addToCart = (item) => {
   //dispatch an action by clicking on + of any item
   dispatch(addItem(item));
  };

  here item is nothing but action.payload which we wrote in cartSlice component.

  when we dispatch any a ction then in that case redux create an object and that format is like
  {
    payload:item
  }

  and then it pas this object as second argument inside the reducer function that we have created and that is named as action there. and thats why we get sent item in redux by action.payload.

  similarly for other reducer function as well.
  

  rather than subscribing to the some part of the store like below, 
  const cartItems = useSelector((store)=>store.cart.items);

  we can subscribe whole store as well like bellow and then simply extract desired part of the store

  const store = useSelector((store)=>store);
  const cartItem=store.cart.items;

 but this is not good for big and complex project. because if we are chaning any other part of the store then that will reflect to cartItem reload because but we dont want to reload cartItem unnesserarily to miantain application performace.
 we are selecting store thats why it is named as useSelector.


-----------------------------------------------------------------------------------------------------------------------

10. What is middleware in Redux?
ANS:- Redux middleware is a function that runs between action dispatch and reducer, used to handle async logic and side effects.

=> Common Redux middlewares
redux-thunk → async logic (API calls)
redux-saga → complex async flows
redux-logger → logs actions & state changes

