import React from 'react';
import { Link } from 'react-router-dom';
import UseReviews from '../../Hooks/UseReviews';
import Review from '../Review/Review';

const Home = () => {
    const [reviews]=UseReviews();
    return (
        <div>
    
       <div className='grid grid-cols-2 grid-2 bg-purple-100'>
           
       <div className='mt-20 text-8xl '>
                   <h1 className='hover:text-indigo-900'>FACEBOOK</h1>
                   <p className='text-xl mt-20'>This article is about the social media service. For its owner, formerly known as Facebook, Inc., see Meta Platforms.
       Not to be confused with <span className='text-7xl bold hover:text-indigo-900' >Facebook</span> or <span className='text-7xl bold hover:text-indigo-900'>Factbook</span>.</p>
                 </div>
                <div className='mt-20 hover:animate-pulse'>
                  <img src="https://blog.logomyway.com/wp-content/uploads/2019/09/facebook-logo.jpg" alt="" />
              </div>
       </div>


       <div className='mt-5'>
            <div className=' container mx-auto grid md:grid-cols-3 gap-5 sm:grid-cols-1'>
                {reviews.slice(0, 3).map(itemReview => <Review

                    key={itemReview.id}
                    itemReview={itemReview}
                ></Review>

                )}
            </div>
            <div className='text-center mt-3'>
                <Link to={'/review'}>
                    <button className='bg-[#fd627a] px-4 py-2 text-white rounded-md hover:bg-[#ffd13c] hover:text-black transition-all duration-200'>See More</button>
                </Link>


            </div>
        </div>
        </div>
       
    );
};

export default Home;