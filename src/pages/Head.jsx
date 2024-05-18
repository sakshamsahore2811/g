import React from 'react'
import school from '../images/gps.jpg'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
export default function Head() {
  return (
    <div>
        <Navbar/>
      <img src={school} className='p-3 relative w-full max-w-2xl mx-auto'/>
      <div className='flex justify-center gap-3'>
      <div className='bg-orange-700 text-white p-3 times rounded-lg'>Admissions</div>
      <div className='bg-orange-700 text-white p-3 times rounded-lg'>Queries</div>
      </div>
      <Footer/>
    </div>
  )
}
