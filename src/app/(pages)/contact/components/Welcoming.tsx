import React from 'react'
import Branch from './Branch'


const Welcoming = () => {
  return (
      <div className='w-full px-28 flex flex-col gap-10'>
          <h1 className='text-4xl font-bold capitalize'>We welcome you to visit us at any time:-</h1>
          <div className='grid grid-cols-3 gap-10'>
              <Branch />
              <Branch />
              <Branch />

</div>
    </div>
  )
}

export default Welcoming