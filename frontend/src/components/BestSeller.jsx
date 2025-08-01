import React ,{useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);
    useEffect(() => {
        // Assuming products is an array of product objects
      const bestProduct = products.filter((item) => (item.bestseller));
        setBestSeller(bestProduct.slice(0, 10)); // Get the top 10 best sellers
    },[])
  return (
    <div className='my-10'>
        <div className="justify-center w-full text-3xl  mb-6">
    <Title text1={"Best"} text2={" Seller"} />
<p className='text-base text-center text-gray-500 mx-auto w-fit'>
  Explore our Best Sellers
</p>


        </div>

     {/*Rendereing products */}
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
  {
    bestSeller.map((item,index) => (
<ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
  ) )

  }
  
  
</div> 
      
    </div>
  )
}

export default BestSeller