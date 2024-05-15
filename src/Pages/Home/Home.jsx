import React from 'react'
import Hero from '../../Component/Hero/Hero'
import Services from '../../Component/Services/Services'
import './Home.css'


function Home() {
  return (
    <>
        <div><Hero/></div>
        <div className='homeservices'><Services/></div>
    </>
  )
}

export default Home