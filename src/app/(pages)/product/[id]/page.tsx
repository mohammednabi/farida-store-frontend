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
import { product } from '@/stores/productsStore'

interface productProps {
    params:{id:string}
}

const ProductPage = ({params}:productProps) => {

    

    const {products} =useContext(StoreContext)

    useEffect(() => {
        products.getSingleProduct(params.id)
        console.log(products.targetProduct)
        console.log("this is the product id from params : " , params.id)
    },[params.id])
    

    return (
      <div className='relative'>
          <AddToCartButton product={products.targetProduct??{}as product}/>
            
      <div className='relative px-10 pb-5 mt-5'>
                <Breads  title={products.targetProduct?.title.slice(0,40)+"..." } />
          <div className='grid grid-cols-[1.5fr_6fr] grid-rows-1 pt-10 gap-10'>
                    <InformationSection />
                    <div className='flex flex-col gap-20'>

              <div className='grid grid-cols-2 grid-rows-1 gap-10'>
                  
                 
                  <ImagesSection   allImages={products.targetProduct?.images} />
                            <DetailsSection product={ products.targetProduct} />
              </div>

                        <ReviewsSection description={products.targetProduct?.description} ratings={products.targetProduct?.rating.ratings} />
                    </div>
          </div>

      </div>
      </div>
  )
}

export default observer(ProductPage)