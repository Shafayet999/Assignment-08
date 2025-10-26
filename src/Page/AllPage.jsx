import React, { useState } from 'react';
import useProducts from '../Hooks/Hooks';
import ProductCard from '../Components/ProductCard';
import { Search } from 'lucide-react';
import { Link } from 'react-router';
import SkeletonLoader from '../Components/SkeletonLoader';
const AllPage = () => {
    const { error, products, loading } = useProducts();
    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchedProducts = term
        ? products.filter(product =>
            product.title.toLocaleLowerCase().includes(term)
        )
        : products
    
    return (
        <div>
            {loading ? (
        <SkeletonLoader />
      ) : (
        <div>
            <h1 className='text-5xl font-bold text-center'>Our All Applications</h1>
            <p className='text-gray-500 text-center mt-3'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='flex justify-between mt-10 items-center'>
                <div className='md:text-xl text-sm font-bold'>{(searchedProducts.length)} Apps Found</div>
                <label className='input w-45'>
                    <Search></Search>
                    <input
                        value={search}
                        onChange={e => {setSearch(e.target.value); }}
                        type='search'
                        placeholder='Search Apps'
                    />
                </label>
            </div>

            {
                searchedProducts.length === 0 ?
                    (
                        <div className="flex flex-col justify-center items-center">
                            <p className="text-center text-gray-500 text-5xl font-bold mt-30">
                                No apps found
                            </p>
                            <Link to='/allProducts'  onClick={() => setSearch('')} className='btn font-bold mt-10 bg-linear-to-r from-purple-600 to-indigo-600 text-white w-50 h-15 text-lg'>Show All Apps</Link>
                        </div>
                    )
                    :
                    (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-5">
                            {searchedProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )
            }



        </div >)}
        </div>
        
    );
};

export default AllPage;