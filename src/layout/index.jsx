import React from 'react'
import Navbar from '../components/Navbar'
import Routes from '../routes'

function DefaultLayout () {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center mt-14 ">
        <Routes />
      </div>
    </div>
  )
}

export default DefaultLayout
