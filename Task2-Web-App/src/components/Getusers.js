import React, { useState } from 'react'
import Result from './Result';
function Getusers() {
  let [data,setdata]=useState([]) 
 let [loading,setloading]=useState(false)
  async function getdata(){
    setloading(true)
   const res= await fetch('https://reqres.in/api/users?page=1')
    const final= await res.json();
    console.log(final.data)
    setdata(final.data)
    setloading(false)
  }
  return (
    <>
       <nav className='cont1'>
          <h1>Users</h1><button onClick={getdata}>Get Users</button>
       </nav>
        <Result data={data} loading={loading}/>
    </>
  )
}

export default Getusers;