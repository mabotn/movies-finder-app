import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Movie from './components/Movie';
import HttpClient from 'axios';

const App = function () {
    const [query, setQuery] = useState('')
    const [searched, setSearched] = useState(false)
    const [movies, setMovies] = useState([])

    const queryChanged = function (event) {
        setQuery(event.target.value)
    }

    const fetchMovies = function () {
        if (query.length === 0) {
            alert('Movie name is required')
        } else {
            HttpClient.get('http://www.omdbapi.com/?apikey=b3410783&s=' + query).then((result) => {
                setSearched(true)
                setMovies(result.data.Response === "True" ? result.data.Search : [])
            })
        }
    }

    return <div>
        <Navbar query={query} searchAction={fetchMovies.bind(this)} searchChanged={queryChanged.bind(this)} />
        <div className="container mt-4 text-center">
            {!searched && movies.length === 0 && <h2>You can search for movies!</h2>}
            {searched && movies.length === 0 && <h2>No movie is found!</h2>}
            <div className="row">
                {movies.map((movie, index) => <Movie key={index} title={movie.Title} released={movie.Year} poster={movie.Poster} />)}
            </div>
        </div>
    </div>
}

export default App;
