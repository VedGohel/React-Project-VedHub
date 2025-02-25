import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName :"Ved Gohel",
    age:21,

  }

  let newArr = [1,2,3,4]

  return (
    <>
    <Card />


  
    </>
  )
}

export default App