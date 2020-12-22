import React from 'react'
import './Landing.css'

export default function Landing() {
    return (
        <div className="landing-container">
            <img className="netflix-logo" src="assets/images/netflix-logo.svg" />
            <div>
                <span> Who's Watching</span>
                <div>
                    <img />
                    <span>Username</span>
                </div>
                <div>
                    <img />
                    <span>Username</span>
                </div>
                <div>
                    <img />
                    <span>Username</span>
                </div>
                <div>
                    <img />
                    <span>Username</span>
                </div>
                <button>Manage Profiles</button>
            </div>
        </div>
    )
}
