import React from 'react'

interface MiniAdProps{
    content:string
}

const MiniAdCard = ({content}:MiniAdProps) => {
  return (
         <div className='bg-mainDarkBlue text-mainWhite text-3xl p-3 '>
              
              <div className='flex justify-center items-center p-10 border-mainWhite border-1 border-dashed'>
                  
              <h1 className='text-center'>{ content}</h1>
</div>
          </div>
  )
}

export default MiniAdCard