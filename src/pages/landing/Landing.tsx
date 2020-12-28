import React, { useState } from 'react'
import './Landing.css'
// import profiles from '../../data/profiles/profiles.json'
// import Button from '../../components/button/Button'
import {Profile as ProfileModel} from '../../models/profiles/Profile'
import Profiles from '../profiles/Profiles'
import Browse from '../browse/Browse'
import Navbar from '../../components/navbar/Navbar'

export default function Landing() {

    // get user when click on profiles //linked in profiles.tsx interface
    const [user, setUser] = useState<ProfileModel | undefined>(undefined)
    function onProfileClick(profile: ProfileModel) {
        setUser(user=>profile)
    }

    return (
        <div className="landing-container">
            <Navbar />
            {user === undefined ?
                <Profiles onProfileClick={onProfileClick} /> : <Browse /> } 


            {/* <div className="content">
                <span className="title"> Who's Watching ?</span>
                <div className="profiles">
                    {profiles.map(( profile, index ) => (
                     <div key={index} onClick={(e) => onProfileClick(profile)} className="profile">
                        <img className="image" alt="" src={profile.image_src} />
                        <span className="username">{profile.username}</span>
                    </div>
                    ))}
                </div>
                <Button label="MANAGE PROFILES" />
            </div> */}
        </div>
    );
}