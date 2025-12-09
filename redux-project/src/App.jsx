import { useState } from 'react'
import {Provider} from 'react-redux'; 
import AppStore from './Redux/AppStore';
import Navbar from './Navbar';
import Items from './AllItems';
function App() {
  
  return (
    <>
    <Provider store={AppStore}>
      <Navbar />
      <Items/>
    </Provider>
    </>
  )
}

export default App
