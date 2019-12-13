import React from 'react';

const Movie = function (props) {
    return <div className="col-3 mb-4">
        <div className="card">
            <img src={props.poster === "N/A" ? "https://www.wildhareboca.com/wp-content/uploads/sites/310/2018/03/image-not-available.jpg" : props.poster} className="card-img-top" alt="..." />
            <div className="card-body">
                <b className="card-title">{props.title}</b>
                <p className="card-text">Released in {props.released}</p>
            </div>
        </div>
    </div>
}

export default Movie;