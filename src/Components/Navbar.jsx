import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import logo from '../assets/logo.png'
import { Link, NavLink } from "react-router";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm md:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <NavLink to='/' className='font-semibold'>Home</NavLink>

                        </li>
                        <li><NavLink to='/allProducts'  className='font-semibold'>Apps</NavLink></li>
                        <li><NavLink className='font-semibold' to='/installation'> Installation</NavLink></li>
                    </ul>
                </div>
                <Link><img src={logo} alt="" className="md:w-10 w-7" /></Link>
                
                <Link to='/' className="btn btn-ghost text-xl font-semibold text-purple-600">HERO.IO</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-x-3">
                    <li><NavLink to='/' className='font-semibold'>Home</NavLink></li>
                    <li><NavLink to='/allProducts' className='font-semibold'>Apps</NavLink></li>
                    <li><NavLink className='font-semibold' to='/installation'> Installation</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-2">
                <a href="https://github.com/Shafayet999" className="btn flex items-center gap-1 bg-linear-to-r from-purple-800 to-purple-500">
                    <FontAwesomeIcon icon={faGithub} className="text-white" />
                    <span className="text-white">Contibute</span>
                </a>
            </div>

        </div>
    );
};

export default Navbar;
