import React from 'react'
import WishlistContent from './WishlistContent'
import WishListFliters from './WishListFliters'

const WishListSections = () => {
  return (
      <div className='grid grid-cols-[3fr_1fr]'>
          <WishlistContent />
          <WishListFliters />
          
    </div>
  )
}

export default WishListSections