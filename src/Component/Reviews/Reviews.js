import React from 'react';
import UseReviews from '../../Hooks/UseReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews]=UseReviews();
    console.log(reviews);
    return (
        <div className='container mx-auto grid grid-cols-3 gap-5 mt-5'>
          {reviews.map(itemReview=> <Review
          key={itemReview.id}
          itemReview={itemReview}
          ></Review>)}
        </div>
    );
};

export default Reviews;