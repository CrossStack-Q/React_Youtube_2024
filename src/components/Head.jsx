import React from 'react'
import menu from "../assets/menu.png"
import youtube from "../assets/youtube.png"
import userIcon from "../assets/user.png"

function Head() {
  return (
    <div className='flex justify-between shadow-lg p-4'>
        <div className='flex'>
            <img src={menu} alt="Menu" width="40" height="40" />

            <img src={youtube} alt="youtube icon" width="40" height="40" />
            <p className='text-3xl'>MyTuve</p>
        </div>

        <div className='flex-grow text-center'>
          <input className='p-1 border-l-2 border-t-2 border-b-2 border-gray-400 rounded-l-full w-2/5' type="text" name="search" id="search" />
          <button className='p-1 border-r-2 px-4  border-t-2 border-b-2 border-gray-400 rounded-r-full'>Search</button>
        </div>

        <div>
          <img src={userIcon} alt="userIcon" width={40} height={40} />
        </div>
    </div>
  )
}

export default Head