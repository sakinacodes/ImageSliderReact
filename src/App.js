import React from 'react'
import './css/main.css'
import { useState } from 'react'
const link = [
  'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
]

let count = 0
const App = () => {
  const [currenIndex, setCurrentIndex] = useState(0)
  const handleOnPrevClick = () => {
    const linkLength = link.length
    count = (currenIndex + linkLength - 1) % linkLength
    setCurrentIndex(count)
  }
  const handleOnNextClick = () => {
    count = (count + 1) % link.length
    setCurrentIndex(count)
  }
  return (
    <div className='bg-gray-50'>
      <div className='max-w-4xl h-full mx-auto relative'>
        <div className='w-full select-none relative'>
          <img className='h-screen w-full' src={link[currenIndex]} alt='' />
          <div className='absolute top-2/4 transform -translate-y-1/2 flex justify-between items-center py-2 h-2 bg-red-500 w-full  '>
            <button onClick={handleOnPrevClick}>Previous</button>
            <button onClick={handleOnNextClick}>Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
