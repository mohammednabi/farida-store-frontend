import { makeAutoObservable } from "mobx";
import axios from "axios";
import { fetchProducts } from "@/api/fetchProducts";

type userRate = {
    id: string
    userId: string
    userName: string
    userAvatarUrl: string
    rateTitle: string
    rateDescription: string
    rateValue: number
    
}

type category = {
    id: string
    name:string
}


type price = {
   currentPrice: number
    prePrice?: number
    discount?: string
    discountDuration?:Date
}

type color = {
    id: string
    nameOfColor: string
    colorHex?: string
    availabelInstock: number
}

type product ={

    id: string
    
    title:string
    description: string
    price :price
   images:{
     thumbnail: string
    images:string[]
}
    rating: {
        averageRate: number
        ratings:userRate[]
    }

    availabelInstock: number
    category: category
    similarProducts: product[]
    colors?:color[]

}

export class ProductsStore {

    products?: product[] = []
    

    constructor() {
        makeAutoObservable(this)
      
    }


    getAllProducts=() =>{

       
    
        fetchProducts().then((mydata) => mydata.map((p: { id: any; category: any; title: any; price: any; description: any; image: any; }) => {
            const newProduct: product = {
                id: p.id,
                category: { id: Math.random().toString(), name: p.category },
                title: p.title,
                price: { currentPrice: p.price },
                description: p.description,
                images: { thumbnail: p.image, images: [] }
                , availabelInstock: 5, rating: { averageRate: 3, ratings: [] },
                similarProducts:[]
            }
            this.products?.push(newProduct)
       }))
        
       
        
    }

   

    
}