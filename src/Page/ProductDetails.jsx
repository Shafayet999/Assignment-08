import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import useProducts from '../Hooks/Hooks';
import { Download, Loader2, Star, ThumbsUp } from "lucide-react";
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Bar } from "recharts";
import { toast } from 'react-toastify';
import SkeletonLoader from '../Components/SkeletonLoader';
import NotFoundProduct from './NotFoundProduct';

const ProductDetails = () => {
    const { id } = useParams();
    const { products, loading } = useProducts();
    const product = products.find((p) => p.id === Number(id));
    const { image, title, description, companyName, downloads, ratingAvg, reviews, size, ratings } = product || {};

    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        const installedList = JSON.parse(localStorage.getItem('installList')) || [];
        const installed = installedList.some(p => p.id === product?.id);
        setIsInstalled(installed);
    }, [product]);

    const handleInstall = () => {
        if (!product) return;

        const installedList = JSON.parse(localStorage.getItem('installList')) || [];

        if (installedList.some(p => p.id === product.id)) {
            setIsInstalled(true);
            toast.info(`${title} is already installed!`);
            return;
        }

        const updatedList = [...installedList, product];
        localStorage.setItem('installList', JSON.stringify(updatedList));
        setIsInstalled(true);
        toast.success(`${title} Installed Successfully!`);
    };

    if (loading) {
        return (
            <SkeletonLoader />
        );
    }

    if(!product){return <NotFoundProduct></NotFoundProduct>}

    return (
        <div>
            <div className='flex flex-col md:flex-row gap-10 border-b pb-5'>
                <div className='place-items-center'>
                    <img src={image} className='h-80' alt="" />
                </div>
                <div className='flex flex-col gap-1 place-items-center md:place-items-start'>
                    <h1 className='text-3xl font-bold'>{title}</h1>
                    <h1 className='font-semibold text-xl text-gray-600'>{description}</h1>
                    <h1 className='border-b text-gray-500 pb-5'>Developed by <span className='text-purple-700 font-bold'>{companyName}</span></h1>

                    <div className="flex flex-wrap justify-center gap-16 py-5 px-6">
                        <div className="flex flex-col items-center">
                            <Download className="text-green-500 md:w-10 w-5 md:h-10 h-5 mb-1" />
                            <p className="text-gray-600 md:text-lg text-md">Downloads</p>
                            <p className="md:text-4xl text-2xl font-extrabold text-gray-900">{downloads}</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <Star className="text-orange-400 md:w-10 w-5 md:h-10 h-5 mb-1" />
                            <p className="text-gray-600 md:text-lg text-md">Average Ratings</p>
                            <p className="md:text-4xl text-2xl font-extrabold text-gray-900">{ratingAvg}</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <ThumbsUp className="text-purple-500 md:w-10 w-5 md:h-10 h-5 mb-1" />
                            <p className="text-gray-600 md:text-lg text-md">Total Reviews</p>
                            <p className="md:text-4xl text-2xl font-extrabold text-gray-900">{reviews}</p>
                        </div>
                    </div>

                    <button 
                        onClick={handleInstall} 
                        className={`rounded-md md:font-bold md:text-md font-semibold text-sm md:h-15 md:w-50 h-12 w-40 text-white ${isInstalled ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
                        disabled={isInstalled}
                    >
                        {isInstalled ? "Installed" : `Install Now (${size} MB)`}
                    </button>
                </div>
            </div>

    
            <div className="w-full bg-white rounded-2xl shadow-sm p-6 mt-10">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Ratings</h2>
                <div className="w-full h-72">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={ratings ? [...ratings].reverse() : []}
                            layout="vertical"
                            margin={{ top: 10, right: 30, left: 40, bottom: 10 }}
                        >
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" width={70} />
                            <Tooltip cursor={{ fill: "#f5f5f5" }} />
                            <Bar dataKey="count" fill="#ff9900" barSize={20} radius={[4, 4, 4, 4]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <h1 className='font-bold mt-10 text-xl'>Description:</h1>
            <p>{description}</p>
        </div>
    );
};

export default ProductDetails;
