import { Link, NavLink } from 'react-router';
import google from '../assets/download.png'
import apple from '../assets/downloadapple.jpg'
import hero from '../assets/hero.png'
import ProductCard from '../Components/ProductCard';
import useProducts from '../Hooks/Hooks';
import SkeletonLoader from '../Components/SkeletonLoader';
const Home = () => {
    const { loading, error, products } = useProducts();
    const featuredProducts = products.slice(0, 8)
    console.log(typeof loading);
    return (

        <div>

        
        

            {loading ? (
        <SkeletonLoader />
      ) : (
           
            <div className='flex items-center flex-col'>
                <div className="text-center">
                <h1 className="font-bold text-5xl md:text-7xl">We Build</h1>
                <h1 className="font-bold text-5xl md:text-7xl"> <span className="text-purple-600">Productive</span> Apps</h1>
                <p className="mt-5 text-gray-500">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>

            <div className='flex md:gap-5 gap-2 mt-5'>
                <a href='https://play.google.com/store/games?hl=en&pli=1' className='border border-gray-300 w-40 rounded-sm flex items-center px-2'>
                    <img className='w-10 rounded-xl mr-2 p-1' src={google} alt="" />
                    <h1 className='font-semibold'>Google Play</h1>
                </a>
                <a href='https://www.apple.com/app-store/' className='border border-gray-300 w-40 rounded-sm flex items-center px-5 gap-3'>
                    <img className='w-6' src={apple} alt="" />
                    <h1 className='font-semibold'>App Store</h1>
                </a>
            </div>

            <img className='mt-10' src={hero} alt="" />

            <div className="md:w-[calc(100vw-100px)] rounded-md bg-linear-to-r from-purple-600 to-indigo-600 text-white py-20">
                <div className="mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">
                        Trusted By Millions, Built For You
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

                        <div>
                            <p className="text-lg mb-2">Total Downloads</p>
                            <h3 className="text-5xl font-extrabold mb-2">29.6M</h3>
                            <p className="text-sm text-purple-200">
                                21% More Than Last Month
                            </p>
                        </div>


                        <div>
                            <p className="text-lg mb-2">Total Reviews</p>
                            <h3 className="text-5xl font-extrabold mb-2">906K</h3>
                            <p className="text-sm text-purple-200">
                                46% More Than Last Month
                            </p>
                        </div>


                        <div>
                            <p className="text-lg mb-2">Active Apps</p>
                            <h3 className="text-5xl font-extrabold mb-2">132+</h3>
                            <p className="text-sm text-purple-200">
                                31 More Will Launch
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <h1 className='text-5xl font-bold mt-15'>Trending Apps</h1>
            <p className="mt-5 text-gray-500">Explore All Trending Apps on the Market developed by us</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10'>
                {featuredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>


            <Link to='/allProducts' className='btn font-bold mt-10 bg-linear-to-r from-purple-600 to-indigo-600 text-white w-50 h-15 text-lg'>Show All Apps</Link>
            </div>)}

            </div>

     
    );
};

export default Home;