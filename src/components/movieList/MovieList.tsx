import React from 'react'
import './MovieList.css'
import movies from "../../data/movies/movies.json"

export default function MovieList() {
    return (
        <div className="movie-list-container" >
            <span className="title">Trending Now</span>
            <div className="movies" >
                <section id="section-1">
                    {movies.slice(0, 5).map((movie, index) => (
                        <div className="movie" style={{backgroundImage: `url(${movie.image_src})`}}></div>
                    ))}
                </section>
                <section id="section-2">
                    {movies.slice(5, movies.length).map((movie, index) => (
                        <div className="movie" style={{backgroundImage: `url(${movie.image_src})`}}></div>
                    ))}
                </section>
            </div>
        </div>
    )
}
