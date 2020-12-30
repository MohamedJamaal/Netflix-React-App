import React from 'react' 
import './Browse.css'

export default function Browse() {
    return (
        <div className="browse-container">
            <div className="thumbnail-section">
                <div className="thumbnail"
                    style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5) 15%, transparent 60%), url(assets/images/popcorn.jpg)` }}></div>
                <span className="description"> This is the description of popcorn movie,
                    we hope you will enjoy the movie
                </span>
            </div>
        </div>
    );
}