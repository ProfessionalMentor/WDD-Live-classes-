import React from 'react'
import video from "../assets/videos/main.mp4"
import {useNavigate} from "react-router-dom"
import OurLatestStories from "./OurlatestStories"
const Home = () => {

  const navigate = useNavigate()

  const handleClick = () => {
 
    navigate("/ourcompany")

  }
  return (
    <>
    
    <video src={video} autoPlay loop muted className='w-full h-[70vh]  object-fill '></video>
    <button className = 'absolute -mt-22 ml-56 text-3xl font-bold text-blue-600' onClick={handleClick}>Discover More</button>
    
   <div className = " flex justify-center">
     <hr className='w-[70vw]  bg-gray-500 mt-30 mb-20' />
   </div>
   
   <OurLatestStories/>
    </>
  )
}

export default Home