import React, { use, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const ProductItem=({id,image,name,price})=>{
    const {currency}=useContext(ShopContext);

  return (
    
        <Link to={`/product/${id}`} className='text-gray-800 hover:text-gray-900 cursor-pointer'>
        <div className='overflow-hidden '>
            <img src={image[0]} alt="Product Image" className='hover:scale-110 transition ease-in-out' />

        </div>
        <p className='pt-3 pb-l text-sm'>{name}</p>'
        <p className='text-sm font-medium'> {currency}{price}</p>
        </Link>

    
  )
}

export default ProductItem