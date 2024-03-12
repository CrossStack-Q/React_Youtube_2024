import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <div>
        <h2>
          ...
        </h2>
        <ul>
          <li>
            Home
          </li>
          <li>
            Shorts
          </li>
          <li>
            Subscriptions
          </li>
          <hr />
          <li>
            You
          </li>
          <li>
            History
          </li>
          <hr />
          <p>
            Sign In to <br/> like , subscribe
          </p>
          <button className='shadow-md rounded-full px-4 py-2 border m-2'>
            Sign In
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar