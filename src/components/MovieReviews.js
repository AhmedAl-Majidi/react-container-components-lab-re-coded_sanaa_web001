import React from 'react'

const MovieReviews = ({reviews}) => {
    return (
        <div className="review-list">
            {reviews.results.map( ele => {ele} ) }
        </div>
    )
}

export default MovieReviews
