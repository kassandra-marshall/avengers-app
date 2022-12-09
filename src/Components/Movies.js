import React from "react";
// import avengers from "../data";

const Movies = props => {
    return( 
    <div> 
        {
        props.movieList.map( movie => (
            <div className="movies">
                <p>{movie}</p>
            </div>
        ))
        }
    </div>
    )
}
export default Movies