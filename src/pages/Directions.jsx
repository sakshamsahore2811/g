import React from 'react'
import map from '../images/map.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Directions() {
  return (
    <div>
        <Navbar/>
      <img src={map} className='items-center p-10'/>
      <div className='times text-3xl text-center'>Vill. Dukli , Tehsil Nangal, District Rupnagar, Punjab 140125</div>
      <Footer/>
    </div>
  )
}
