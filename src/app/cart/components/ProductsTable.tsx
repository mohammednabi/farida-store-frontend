"use client"
import React, { useState } from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import CartProductCard from './CartProductCard';
import QuantityCounter from './QuantityCounter';
import { MdDelete } from 'react-icons/md';





const ProductsTable = () => {

  

const rows = [
  {
    key: "1",
    product: <CartProductCard  imageUrl='/fridge2.webp' title='fridge' description='best fridge in our store'/>,
    price: 500 +"$",
        quantity: <QuantityCounter />,
    total: 25000 + "$",
    delete:<MdDelete  className='text-red-500 transition-all hover:text-red-700 text-3xl cursor-pointer'/>
    },
      {
    key: "2",
    product: <CartProductCard  imageUrl='/fridge2.webp' title='fridge' description='best fridge in our store'/>,
    price: 500 +"$",
        quantity: <QuantityCounter />,
        total: 25000 + "$",
    delete:<MdDelete  className='text-red-500 transition-all hover:text-red-700 text-3xl cursor-pointer'/>
    },
        {
    key: "3",
    product: <CartProductCard  imageUrl='/fridge2.webp' title='fridge' description='best fridge in our store'/>,
    price: 500 +"$",
        quantity: <QuantityCounter />,
          total: 25000 + "$",
    delete:<MdDelete  className='text-red-500 transition-all hover:text-red-700 text-3xl cursor-pointer'/>
    },
          {
    key: "4",
    product: <CartProductCard  imageUrl='/fridge2.webp' title='fridge' description='best fridge in our store'/>,
    price: 500 +"$",
        quantity: <QuantityCounter />,
            total: 25000 + "$",
    delete:<MdDelete  className='text-red-500 transition-all hover:text-red-700 text-3xl cursor-pointer'/>
  },

];

const columns = [
  {
    key: "product",
    label: "Product",
  },
  {
    key: "price",
    label: "Price",
  },
  {
    key: "quantity",
    label: "Quantity",
  },
  {
    key: "total",
    label: "Total",
  },
   {
    key: "delete",
    label: "",
  }
];

    return (
        <Table
            aria-label="Example table with dynamic content"
         
            layout='auto'
            radius='none'
            shadow='none'
            classNames={{
              
                th:"bg-mainPink text-mainWhite"
                
        }}
        >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key} className={`font-bold text-lg ${column.key!=="product"?"text-center":"pl-12"}`}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key} className='border-b-1 border-mainBlack/10 border-solid'>
                        {(columnKey) => <TableCell className={`text-xl ${columnKey!=="product"?"text-center":""}`}>{getKeyValue(item, columnKey)}</TableCell>}
                        
                    </TableRow>
                    
        )}
      </TableBody>
    </Table>
  )
}

export default ProductsTable

