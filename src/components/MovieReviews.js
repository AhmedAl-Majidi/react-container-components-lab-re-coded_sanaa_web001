import React from 'react'

const MovieReviews = ({reviews}) => {
    return (
        <div className="review-list">
            {reviews.map( ele => {ele} ) }
        </div>
    )
}

export default MovieReviews
