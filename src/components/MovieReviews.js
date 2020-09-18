import React from 'react'

const MovieReviews = (props) => {
    return (
        <div>
            {props.reviews.map( ele =>  <p>{ele}</p>)}
        </div>
    )
}

export default MovieReviews
