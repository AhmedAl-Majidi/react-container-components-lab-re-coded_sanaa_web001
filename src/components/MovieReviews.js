import React from 'react'

const MovieReviews = (props) => {
    return (
        <div className="review-list">
            {props.reviews.map( ele => <p> {ele} </p>) }
        </div>
    )
}

export default MovieReviews
