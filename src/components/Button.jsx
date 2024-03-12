import React from 'react'

function Button({name}) {
  return (
    <div className='py-2 px-4 shadow-md rounded-md m-2 bg-zinc-50'>
        {name}
    </div>
  )
}

export default Button