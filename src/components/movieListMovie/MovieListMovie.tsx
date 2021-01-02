import React from 'react'
import { Movie } from '../../models/movie/Movie';
import './MovieListMovie.css'

interface Props {
    movie: Movie;
}

export default function MovieListMovie({movie}: Props) {
    return (
        <div>
            <div className="movie" style={{ backgroundImage: `url(${movie.image_src})` }}>
                <h4 className="title">Movie Title</h4>
            </div>
        </div>
    );
}
