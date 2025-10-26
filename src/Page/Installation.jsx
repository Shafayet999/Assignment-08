import { Download, Star } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Installation = () => {
    const [installList, setInstallList] = useState([]);

    useEffect(() => {
        const savedInstall = JSON.parse(localStorage.getItem("installList"));
        if (savedInstall) setInstallList(savedInstall);
    }, []);

    const [sortOrder, setSortOrder] = useState('none');

    const sortedItem = (() => {
        if (sortOrder === 'downloads-asc') {
            return [...installList].sort((a, b) => a.downloads - b.downloads)
        } else if (sortOrder === 'downloads-desc') {
            return [...installList].sort((a, b) => b.downloads - a.downloads)
        } else {
            return installList
        }
    })();

   const handleRemoveFromwishlist = (id, title) => {
    const existingList = JSON.parse(localStorage.getItem('installList')) || [];   
    let updatedList = existingList.filter(i => i.id !== id)
    setInstallList(updatedList);
    localStorage.setItem('installList', JSON.stringify(updatedList));
    toast.info(`${title} uninstalled successfully!`); 
}


    return (
        <div>
            <ToastContainer />
            <h1 className='md:text-5xl text-3xl font-bold text-center mt-5'>Your Installed Apps</h1>
            <p className='md:text-md text-sm font-semibold text-gray-600 text-center mt-2'>Explore All Trending Apps on the Market developed by us</p>

            <div className='flex justify-between mt-10 items-center'>
                <h1 className='font-bold md:text-xl text-sm'>{sortedItem.length} Apps Found</h1>
                <label className='form-control md:w-full max-w-xs'>
                    <select
                        className='select select-bordered'
                        value={sortOrder}
                        onChange={e => setSortOrder(e.target.value)}
                    >
                        <option value='none'>Sort by Downloads</option>
                        <option value='downloads-asc'>Low-&gt;High</option>
                        <option value='downloads-desc'>High-&gt;Low</option>
                    </select>
                </label>
            </div>

            {sortedItem.length === 0 &&
                <div className='flex justify-center items-center mt-30'>
                    <NavLink to='/allProducts' className='btn font-bold mt-10 bg-gradient-to-r from-purple-600 to-indigo-600 text-white w-50 h-15 text-lg'>Choose Apps</NavLink>
                </div>
            }

            <div>
                {sortedItem.map(i => (
                    <div key={i.id} className='bg-white mt-5 rounded-sm flex flex-col md: p-0 p-3 md:flex-row justify-between items-center'>
                        <div className='p-3 flex gap-x-5'>
                            <img className='md:h-30 md:w-30 h-15 w-15' src={i.image} />
                            <div className='flex flex-col justify-around'>
                                <p className='font-semibold'>{i.title}: {i.description}</p>
                                <div className='flex gap-x-5 font-semibold'>
                                    <div className='flex items-center'>
                                        <Download className='text-green-600 md:h-4 h-3'></Download>
                                        <p className='text-green-600'>{i.downloads}M</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <Star className='text-orange-600 md:h-4 h-3'></Star>
                                        <p className='text-orange-600'>{i.ratingAvg}</p>
                                    </div>
                                    <div className='flex items-center md:text-md text-sm md:font-semibold'>
                                        <p>{i.size} MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button 
    onClick={() => handleRemoveFromwishlist(i.id, i.title)} 
    className='bg-green-600 text-white md:h-12 md:w-25 md:font-semibold text-sm md:text-md h-8 w-18 mr-5 cursor-pointer hover:bg-green-700 md:px-4 md:py-2 px-2 py-1 rounded'
>
    Uninstall
</button>

                    </div>
                ))}
            </div>

        </div>
    );
};

export default Installation;
