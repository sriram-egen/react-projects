import React from 'react'
import StarRating from '../components/star-rating';

function StarRatingPage() {
    return (
        <div>
         {/* Star Rating Component */}
         <StarRating noOfStars={10} />
        </div>
       );
}

export default StarRatingPage