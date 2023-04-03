import React from 'react'

function Rating({ rating, numReviews }) {
  return (
    <div className='rating'>
        <p><i className='fas fa-star'></i> Rating: {rating} from {numReviews} reviews</p>
    </div>
  )
}

export default Rating