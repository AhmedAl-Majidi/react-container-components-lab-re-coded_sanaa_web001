import React from 'react'



const MovieReviews = ({reviews}) => {
    return (
        <div className="review-list">
            {reviews.results.map( ele => return (<p>{ele}</p>) ) }
        </div>
    )
}

export default MovieReviews
