import React from 'react'
import Button from './Button'

const List = ["Bhogol","Samajik","Football" , "Coding" , "Go Lang" , "Kubernetes","DSA", "JS", "React", "More"]


const ButtonList = () => {
  
  
  return (
    <div className='flex overflow-x-scroll'>
      {List.map(item=>(
        <Button name={item} />
        )
      )}
    </div>
  )
}

export default ButtonList