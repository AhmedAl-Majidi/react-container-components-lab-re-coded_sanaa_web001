import React from 'react'

const MovieReviews = ({reviews}) => {
    return (
        <div className="review-list">
            {reviews.map( ele => <p> {ele} </p>) }
        </div>
    )
}

export default MovieReviews
