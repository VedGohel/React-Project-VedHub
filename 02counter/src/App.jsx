import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  //useState Hooks Using Counter Update
  //let counter = 0
  let[counter , setCounter] = useState(0)

 
 //addValue functions Woking if Statement 
 // Maximum range is 20 times.
  const addValue = () => {
   if(counter<20){

    //counter = counter + 1 
    setCounter(counter + 1)
    console.log("clicked", counter); 
   }
  }

  //removeValue functions working but prevent 
  // a counter like negative value.
  //ved
  const removeValue = () => {
    if(counter>0){
    setCounter(counter - 1)
    console.log("clicked", counter);  
    }
  }
   
  return (
    <>
      <h1>Chai Aur React | Ved Gohel</h1>
      <h2>Count Value : {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br/>
      <br/>
      <button
      onClick={removeValue}
      >Remove Value</button> 
    </>
  )
}

export default App
