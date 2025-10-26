import { Link } from 'react-router';
import err from '../assets/App-Error.png'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const NotFoundProduct = () => {
    
    return (
        <div className="text-center mt-10">
            <div className='flex flex-col justify-center items-center'>
                <img className='place-items-center md:h-60 md:w-60 h-30 w-30 mb-5' src={err} alt="" />
                <h1 className="md:text-5xl text-3xl font-bold mb-2">OPPS!! APP NOT FOUND</h1>
                <p>The App you are requesting is not found on our system.  please try another apps</p>
                <Link to='/allProducts' className='btn font-bold mt-10 bg-linear-to-r from-purple-600 to-indigo-600 text-white w-50 h-15 text-lg'>Go Back!</Link>
            </div>
        </div>
    );
}

export default NotFoundProduct;
