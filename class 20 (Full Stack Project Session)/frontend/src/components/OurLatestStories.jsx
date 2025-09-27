import React from 'react'
import {useNavigate} from "react-router-dom"
const OurlatestStories = () => {

    const navigate = useNavigate()

    const handleClick = () => {
     
      navigate("/ourStories")
    }

  return (
    <>
    
    <h1 className='text-3xl font-bold ml-55 -mt-10 mb-20'>Our Latest Stories</h1>
    <button onClick = {handleClick} className= 'absolute right-50 -mt-30 text-3xl font-bold text-blue-600 hover:underline' >Read our latest articles</button>
    
    </>
  )
}

export default OurlatestStories