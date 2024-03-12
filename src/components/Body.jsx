import React from 'react'
import Sidebar from './Sidebar'
import MainConatiner from './MainConatiner'

function Body() {
  return (
    <div className='flex'>
        <Sidebar/>
        <MainConatiner/>
    </div>
  )
}

export default Body