"use client"
import React, { useState } from 'react'

const QuantityCounter = () => {
    const [counter, setCounter] = useState(1)
    

    const increase = () => {
       setCounter((c) => c + 1)
    }
    const decrease=()=>{ counter >1 &&setCounter((c)=>c-1)}

  return (
      <div className='flex items-center justify-center'>
          <button
              className='border-mainBlack/10 border-1 border-solid text-lg px-3 py-2 rounded-l-full transition-all hover:bg-mainBlack/5'
          onClick={increase}
          >
              +
          </button>
          <h1 className='border-mainBlack/10 border-1 border-solid text-xl px-5 py-2'>{counter}</h1>
          <button
              className='border-mainBlack/10 border-1 border-solid text-lg px-3 py-2 rounded-r-full transition-all hover:bg-mainBlack/5'
          onClick={decrease}
          >
              -
          </button>
    </div>
  )
}

export default QuantityCounter