import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const About = () => {
    return (
        <div className='bg-slate-200 grid grid-cols-2 grid-2' >
              <div>
                      <h1 className='text-4xl ml-20 mt-40 text-teal-600 mr-20'>Personalized ads help small businesses get found.</h1>
                      <p className='text-xl mt-10 text-slate-300 hover:text-black'>Small businesses rely on personalized ads to reach the people who will love their products and help their business grow.</p>
                      <button className='text-xl mt-10'> <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>Learn more</button>
              </div>
              <div className='mb-20 mt-20 '>
                   <img src="https://about.fb.com/wp-content/uploads/2021/02/GHF_FPO-Image1-1-1.jpg?w=536" alt="" />
              </div>
        </div>
    );
};

export default About;