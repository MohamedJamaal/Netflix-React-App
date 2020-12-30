import React from 'react' 
import './Browse.css'

export default function Browse() {
    return (
        <div className="browse-container">
            <div className="thumbnail-section">
                <div className="thumbnail" style={{ backgroundImage: `url(assets/images/popcorn.jpg)` }}></div>
            </div>
        </div>
    );
}