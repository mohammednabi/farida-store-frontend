"use client"

import Breads from './components/Breads'
import InformationSection from './components/InformationSection'
import ImagesSection from './components/ImagesSection'
import DetailsSection from './components/DetailsSection'
import AddToCartButton from './components/AddToCartButton'
import ReviewsSection from './components/ReviewsSection'
import { StoreContext } from '@/contexts/StoreContext'
import { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'


interface productProps {
    params:{id:string}
}

const ProductPage = ({params}:productProps) => {

    

    const {products} =useContext(StoreContext)

    useEffect(() => {
        products.getSingleProduct(params.id)
     
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[params.id])
    

    return (
      <div className='relative'>
          <AddToCartButton product={products.targetProduct}/>
            
      <div className='relative px-10 pb-5 mt-5'>
                <Breads  title={products.targetProduct?.attributes.slug.slice(0,40)+"..." } />
          <div className='grid grid-cols-[1.5fr_6fr] grid-rows-1 pt-10 gap-10'>
                    <InformationSection />
                    <div className='flex flex-col gap-20'>

              <div className='grid grid-cols-2 grid-rows-1 gap-10'>
                  
                 
                  <ImagesSection   allImages={products.targetProduct?.attributes.images} />
                            <DetailsSection
                                product={products.targetProduct}
                                averageRating={products.getAverageRatings(products.targetProduct.attributes.reviews.data)}
                                priceAfterDiscount={products.getPriceAfterDiscount(products.targetProduct.attributes.discount.data,products.targetProduct.attributes.price)}

                            />
              </div>

                        <ReviewsSection product={products.targetProduct} />
                    </div>
          </div>

      </div>
      </div>
  )
}

export default observer(ProductPage)