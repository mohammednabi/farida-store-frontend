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

    const images = [
        { id: `${Math.random()}`, url: "/fridge2.webp" }
        , { id: `${Math.random()}`, url: "/tv product.webp" },
        { id: `${Math.random()}`, url: "/PayPal.svg.png" },
        { id: `${Math.random()}`, url: "/Visa_Inc._logo.svg.png" },
        {id:`${Math.random()}`,url:"/MasterCard_Logo.svg.webp"}
    ]

    

    const {products} =useContext(StoreContext)

    useEffect(() => {
        products.getSingleProduct(params.id)
        console.log(products.targetProduct)
        console.log("this is the product id from params : " , params.id)
    },[params.id, products, products.targetProduct])
    

    return (
      <div className='relative'>
          <AddToCartButton />
            
      <div className='relative px-10 pb-5'>
          <Breads productId={params.id} />
          <div className='grid grid-cols-[1.5fr_6fr] grid-rows-1 pt-10 gap-10'>
                    <InformationSection />
                    <div className='flex flex-col gap-20'>

              <div className='grid grid-cols-2 grid-rows-1 gap-10'>
                  
                  <ImagesSection   images={[ { id: `${Math.random()}`, url: products.targetProduct?.image },{ id: `${Math.random()}`, url: products.targetProduct?.image }]} />
                            <DetailsSection product={ products.targetProduct} />
              </div>

                        <ReviewsSection />
                    </div>
          </div>

      </div>
      </div>
  )
}

export default observer(ProductPage)