import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className=' justify-center text-xl   '>  
    
            <Link  className='mr-20 hover:text-red-500' to="/home">Home</Link>
            <Link  className='mr-20 hover:text-red-600' to="/review">Review</Link> 
            <Link  className='mr-20 hover:text-red-700' to="/dashborad">Dashborad</Link>
            <Link   className='mr-20 hover:text-red-800'to="/blogs">Blogs</Link>
            <Link   className='mr-20 hover:text-red-900'to="/about">About</Link>
           
        </div>
    );
};

export default Header;