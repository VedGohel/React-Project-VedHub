import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  
   const data = useLoaderData()

  /*const [data , setData] = useState([])
   useEffect(()=>{
       fetch('https://api.github.com/users/vedgohel')
       .then (response => response.json)
       .then(data =>{
        console.log(data);
        setData(data)
       })
   },[]) */

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
     <h1>Github Name : {data.name}</h1>
     <h1 className='m-1'>Github Followers : {data.followers} </h1>
    <h1 className='m-1'>Github Reposeitory : {data.public_repos}</h1> 
    <img  className='' src={data.avatar_url}  alt="git photo" width={300} />
    </div>
  )
}

export default Github

export const githInfoLoader = async () => {
  const  response = await fetch('https://api.github.com/users/vedgohel')
  return response.json()
}