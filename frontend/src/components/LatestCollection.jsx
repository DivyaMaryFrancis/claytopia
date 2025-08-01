import React ,{useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
const LatestCollection = () => {

  const { products } = useContext(ShopContext);
  const [latestProducts,setLatestProducts] = useState([]);
  // Assuming products is an array of product objects
  useEffect(() => {

setLatestProducts(products.slice(0, 10)); // Get the first 10 products


  },[])
  return (
    <div className='my-10'>
     <div className="justify-center w-full text-3xl  mb-6">
    <Title text1="Latest" text2=" Collection" />
<p className='text-base text-center text-gray-500 mx-auto w-fit'>
  Explore our latest products
</p>

</div>

     {/*Rendereing products */}
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
  {
    latestProducts.map((item,index) => (
<ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
  ) )

  }
  
  
</div> 
      
  </div>
  )
}

export default LatestCollection