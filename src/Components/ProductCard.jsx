import React from 'react'
import { Link } from 'react-router'
import { Download } from 'lucide-react';
import { Star } from 'lucide-react';


const ProductCard = ({ product }) => {
  const { title, image, description, ratingAvg, downloads, id } = product
  return (
    <Link to={`/product/${id}`} className='card bg-base-100 shadow-sm hover:scale-105 transition ease-in-out'>
      <figure className='overflow-hidden'>
        <img className='w-full object-cover m-3 h-50 rounded-sm' referrerPolicy='no-referrer' src={image} />
      </figure>
      <div className='m-3'>
        <h2 className='text-xl font-bold'>{title}</h2>
        <p className='font-semibold text-gray-500 text-sm'>{description}</p>


        <div className='flex justify-between '>
            <div className='flex items-center gap-1 bg-green-100 w-15 mt-4 h-7 rounded-md shadow-md'>
                <Download className='text-green-600 h-3'></Download>
                <p className='text-green-600 text-bold text-sm'>{downloads}M</p>
            </div>
            <div className='flex  items-center gap-1 bg-orange-100 w-15 mt-4 h-7 rounded-md shadow-md'>
                <Star className='text-orange-600 h-4'></Star>
                <p className='text-orange-600 text-bold'>{ratingAvg}</p>
            </div>
        </div>
        
      </div>
    </Link>  
  )
}

export default ProductCard