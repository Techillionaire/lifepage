import React from 'react'
import Navbar from '../Navbar'
import Mainpage from '../Mainpage/Mainpage'
import Featured from '../Featured'

const Home = () => {
  return (
    <>
    <div>
        <Navbar/>
        <Mainpage/>
        <Featured/>
    </div>
    </>
  )
}

export default Home