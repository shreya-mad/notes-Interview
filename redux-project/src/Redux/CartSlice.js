import  {createSlice} from '@reduxjs/toolkit';
const cartSlice=createSlice({
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

export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;